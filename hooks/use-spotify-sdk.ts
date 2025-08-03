import { useState, useEffect, useCallback } from 'react'

interface SpotifyTrack {
  id: string
  name: string
  artists: Array<{ name: string }>
  album: { name: string; images: Array<{ url: string }> }
  duration_ms: number
}

interface SpotifyPlayer {
  getCurrentState(): Promise<{
    track_window: {
      current_track: SpotifyTrack
    }
    position: number
    duration: number
    paused: boolean
  } | null>
  activate(): Promise<void>
  disconnect(): void
  getVolume(): Promise<number>
  setVolume(volume: number): Promise<void>
  pause(): Promise<void>
  resume(): Promise<void>
  previousTrack(): Promise<void>
  nextTrack(): Promise<void>
  seek(position_ms: number): Promise<void>
}

interface UseSpotifySDKReturn {
  player: SpotifyPlayer | null
  isActive: boolean
  currentTrack: SpotifyTrack | null
  isPlaying: boolean
  position: number
  duration: number
  volume: number
  isLoading: boolean
  error: string | null
  connect: () => Promise<void>
  disconnect: () => void
  togglePlay: () => Promise<void>
  nextTrack: () => Promise<void>
  previousTrack: () => Promise<void>
  setVolume: (volume: number) => Promise<void>
  seek: (position: number) => Promise<void>
}

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: () => void
    Spotify: {
      Player: new (config: {
        name: string
        getOAuthToken: (cb: (token: string) => void) => void
      }) => SpotifyPlayer
    }
  }
}

export function useSpotifySDK(): UseSpotifySDKReturn {
  const [player, setPlayer] = useState<SpotifyPlayer | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(50)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Initialize Spotify SDK
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true

    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log('Spotify Web Playback SDK ready')
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const connect = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Check if we have a token in cookies
      const tokenResponse = await fetch('/api/auth/spotify/token')
      
      if (!tokenResponse.ok) {
        // No token found, redirect to Spotify auth
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || 'http://localhost:3000/api/auth/spotify/callback')}&scope=${encodeURIComponent('streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state playlist-read-private playlist-modify-public playlist-modify-private')}`
        
        window.location.href = authUrl
        return
      }

      const { access_token } = await tokenResponse.json()

      if (!window.Spotify) {
        throw new Error('Spotify SDK not loaded')
      }

      const player = new window.Spotify.Player({
        name: 'Portfolio Player',
        getOAuthToken: cb => cb(access_token)
      })

      // Error handling
      player.addListener('initialization_error', ({ message }) => {
        setError(`Initialization error: ${message}`)
        setIsLoading(false)
      })

      player.addListener('authentication_error', ({ message }) => {
        setError(`Authentication error: ${message}`)
        setIsLoading(false)
      })

      player.addListener('account_error', ({ message }) => {
        setError(`Account error: ${message}`)
        setIsLoading(false)
      })

      player.addListener('playback_error', ({ message }) => {
        setError(`Playback error: ${message}`)
      })

      // Playback status updates
      player.addListener('player_state_changed', state => {
        if (!state) return

        setCurrentTrack(state.track_window.current_track)
        setIsPlaying(!state.paused)
        setPosition(state.position)
        setDuration(state.duration)
      })

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id)
        setIsActive(true)
        setIsLoading(false)
      })

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
        setIsActive(false)
      })

      // Connect to the player
      await player.connect()
      setPlayer(player)

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to Spotify')
      setIsLoading(false)
    }
  }, [])

  const disconnect = useCallback(() => {
    if (player) {
      player.disconnect()
      setPlayer(null)
      setIsActive(false)
      setCurrentTrack(null)
      setIsPlaying(false)
      setPosition(0)
      setDuration(0)
    }
  }, [player])

  const togglePlay = useCallback(async () => {
    if (!player) return

    try {
      const state = await player.getCurrentState()
      if (state?.paused) {
        await player.resume()
      } else {
        await player.pause()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to toggle play')
    }
  }, [player])

  const nextTrack = useCallback(async () => {
    if (!player) return

    try {
      await player.nextTrack()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to skip track')
    }
  }, [player])

  const previousTrack = useCallback(async () => {
    if (!player) return

    try {
      await player.previousTrack()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to go to previous track')
    }
  }, [player])

  const setVolume = useCallback(async (newVolume: number) => {
    if (!player) return

    try {
      await player.setVolume(newVolume / 100)
      setVolumeState(newVolume)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to set volume')
    }
  }, [player])

  const seek = useCallback(async (newPosition: number) => {
    if (!player) return

    try {
      await player.seek(newPosition)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to seek')
    }
  }, [player])

  return {
    player,
    isActive,
    currentTrack,
    isPlaying,
    position,
    duration,
    volume,
    isLoading,
    error,
    connect,
    disconnect,
    togglePlay,
    nextTrack,
    previousTrack,
    setVolume,
    seek
  }
} 
import { useState, useEffect, useCallback } from 'react'

interface SpotifyTrack {
  id: string
  name: string
  artists: Array<{ name: string }>
  album: { name: string; images: Array<{ url: string }> }
  duration_ms: number
}

interface UseSpotifySDKReturn {
  player: any | null
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

// Mock playlist data
const mockPlaylist = [
  {
    id: '1',
    name: 'Bohemian Rhapsody',
    artists: [{ name: 'Queen' }],
    album: { 
      name: 'A Night at the Opera',
      images: [{ url: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Queen' }]
    },
    duration_ms: 354000
  },
  {
    id: '2',
    name: 'Hotel California',
    artists: [{ name: 'Eagles' }],
    album: { 
      name: 'Hotel California',
      images: [{ url: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Eagles' }]
    },
    duration_ms: 391000
  },
  {
    id: '3',
    name: 'Stairway to Heaven',
    artists: [{ name: 'Led Zeppelin' }],
    album: { 
      name: 'Led Zeppelin IV',
      images: [{ url: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Zeppelin' }]
    },
    duration_ms: 482000
  }
]

export function useSpotifySDK(): UseSpotifySDKReturn {
  const [player, setPlayer] = useState<any | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(50)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  // Simulate playback progress
  useEffect(() => {
    if (!isPlaying || !currentTrack) return

    const interval = setInterval(() => {
      setPosition(prev => {
        const newPosition = prev + 1000
        if (newPosition >= duration) {
          // Auto-play next track
          nextTrack()
          return 0
        }
        return newPosition
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, currentTrack, duration])

  const connect = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setCurrentTrack(mockPlaylist[currentTrackIndex])
      setDuration(mockPlaylist[currentTrackIndex].duration_ms)
      setIsActive(true)
      setIsLoading(false)
      setPlayer({ mock: true })
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to Spotify')
      setIsLoading(false)
    }
  }, [currentTrackIndex])

  const disconnect = useCallback(() => {
    setPlayer(null)
    setIsActive(false)
    setCurrentTrack(null)
    setIsPlaying(false)
    setPosition(0)
    setDuration(0)
  }, [])

  const togglePlay = useCallback(async () => {
    if (!currentTrack) return
    
    setIsPlaying(prev => !prev)
  }, [currentTrack])

  const nextTrack = useCallback(async () => {
    const nextIndex = (currentTrackIndex + 1) % mockPlaylist.length
    setCurrentTrackIndex(nextIndex)
    setCurrentTrack(mockPlaylist[nextIndex])
    setDuration(mockPlaylist[nextIndex].duration_ms)
    setPosition(0)
  }, [currentTrackIndex])

  const previousTrack = useCallback(async () => {
    const prevIndex = currentTrackIndex === 0 ? mockPlaylist.length - 1 : currentTrackIndex - 1
    setCurrentTrackIndex(prevIndex)
    setCurrentTrack(mockPlaylist[prevIndex])
    setDuration(mockPlaylist[prevIndex].duration_ms)
    setPosition(0)
  }, [currentTrackIndex])

  const setVolume = useCallback(async (newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(100, newVolume)))
  }, [])

  const seek = useCallback(async (newPosition: number) => {
    setPosition(Math.max(0, Math.min(duration, newPosition)))
  }, [duration])

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
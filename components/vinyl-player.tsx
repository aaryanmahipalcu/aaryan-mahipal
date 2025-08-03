"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSpotifySDK } from "@/hooks/use-spotify-sdk"
import { formatTime, getSpotifyAuthUrl } from "@/lib/spotify-utils"

export function VinylPlayer() {
  const [isVisible, setIsVisible] = useState(true)
  const [showSpotifyControls, setShowSpotifyControls] = useState(false)
  
  const {
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
  } = useSpotifySDK()

  const handleTogglePlay = async () => {
    if (isActive) {
      await togglePlay()
    } else {
      // If not connected, try to connect
      await connect()
    }
  }

  const handleSkipTrack = async () => {
    if (isActive) {
      await nextTrack()
    }
  }

  const handlePreviousTrack = async () => {
    if (isActive) {
      await previousTrack()
    }
  }

  const handleToggleMute = () => {
    if (volume > 0) {
      setVolume(0)
    } else {
      setVolume(50)
    }
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const enableSpotify = () => {
    connect()
  }

  const togglePlayerView = () => {
    setShowSpotifyControls(!showSpotifyControls)
  }



  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd+Right Arrow (Mac) or Ctrl+Right Arrow (Windows/Linux) to skip
      if ((event.metaKey || event.ctrlKey) && event.key === "ArrowRight") {
        event.preventDefault()
        handleSkipTrack()
      }

      // Cmd+Left Arrow (Mac) or Ctrl+Left Arrow (Windows/Linux) to previous
      if ((event.metaKey || event.ctrlKey) && event.key === "ArrowLeft") {
        event.preventDefault()
        handlePreviousTrack()
      }

      // Space to play/pause (only when not typing in inputs)
      if (event.code === "Space" && event.target === document.body) {
        event.preventDefault()
        handleTogglePlay()
      }

      // M to mute/unmute
      if (event.key === "m" && event.target === document.body) {
        event.preventDefault()
        handleToggleMute()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleSkipTrack, handlePreviousTrack, handleTogglePlay, handleToggleMute])

    return (
    <>
      {/* Vinyl Player UI */}
      <div className="fixed top-4 left-4 z-50">
        {/* Minimized State */}
        {!isVisible && (
          <Button
            onClick={toggleVisibility}
            className="w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 hover:bg-black/90 p-0"
          >
            <div className={`w-6 h-6 rounded-full bg-white/20 ${isPlaying ? "animate-spin" : ""}`}>
              <div className="w-full h-full rounded-full border-2 border-white/40 border-t-white/80"></div>
            </div>
          </Button>
        )}

        {/* Expanded Player */}
        {isVisible && (
          <>
            {/* Spotify SDK Controls View */}
            {isActive && showSpotifyControls && (
              <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 min-w-[320px] shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-white/60 font-mono">spotify sdk</div>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={togglePlayerView}
                      variant="ghost"
                      size="sm"
                      className="text-white/60 hover:text-white h-6 w-6 p-0"
                    >
                      🎵
                    </Button>
                    <Button
                      onClick={toggleVisibility}
                      variant="ghost"
                      size="sm"
                      className="text-white/60 hover:text-white h-6 w-6 p-0"
                    >
                      ×
                    </Button>
                  </div>
                </div>

                {/* Current Track Info */}
                {currentTrack && (
                  <div className="mb-4">
                    <div className="flex items-center gap-3">
                      {/* Album Art */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10">
                        {currentTrack.album.images[0] && (
                          <img 
                            src={currentTrack.album.images[0].url} 
                            alt={currentTrack.album.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      
                      {/* Track Details */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate font-mono">
                          {currentTrack.name}
                        </div>
                        <div className="text-xs text-white/60 truncate font-mono">
                          {currentTrack.artists.map(a => a.name).join(', ')}
                        </div>
                        <div className="text-xs text-white/40 truncate font-mono">
                          {currentTrack.album.name}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-white/40 font-mono mb-1">
                        <span>{formatTime(position)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1">
                        <div 
                          className="bg-white/60 h-1 rounded-full transition-all duration-100"
                          style={{ width: `${duration > 0 ? (position / duration) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Controls */}
                <div className="flex items-center justify-center gap-3">
                  <Button
                    onClick={handlePreviousTrack}
                    size="sm"
                    variant="ghost"
                    className="text-white/60 hover:text-white w-8 h-8 p-0"
                  >
                    <SkipBack className="w-3 h-3" />
                  </Button>

                  <Button
                    onClick={handleTogglePlay}
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 w-10 h-10 p-0"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>

                  <Button
                    onClick={handleSkipTrack}
                    size="sm"
                    variant="ghost"
                    className="text-white/60 hover:text-white w-8 h-8 p-0"
                  >
                    <SkipForward className="w-3 h-3" />
                  </Button>
                </div>

                {/* Volume Control */}
                <div className="mt-4 flex items-center gap-2">
                  <Volume2 className="w-3 h-3 text-white/40" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) ${volume}%, rgba(255,255,255,0.1) ${volume}%, rgba(255,255,255,0.1) 100%)`
                    }}
                  />
                  <span className="text-xs text-white/40 font-mono w-8">{volume}%</span>
                </div>

                {/* Error Display */}
                {error && (
                  <div className="mt-3 p-2 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-300">
                    {error}
                  </div>
                )}
              </div>
            )}

            {/* Vinyl Player View */}
            {(!isActive || !showSpotifyControls) && (
              <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 min-w-[280px] shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-white/60 font-mono">now playing</div>
                  <div className="flex items-center gap-2">
                    {isActive && (
                      <Button
                        onClick={togglePlayerView}
                        variant="ghost"
                        size="sm"
                        className="text-white/60 hover:text-white h-6 w-6 p-0"
                      >
                        🎵
                      </Button>
                    )}
                    <Button
                      onClick={toggleVisibility}
                      variant="ghost"
                      size="sm"
                      className="text-white/60 hover:text-white h-6 w-6 p-0"
                    >
                      ×
                    </Button>
                  </div>
                </div>

                {/* Vinyl Record */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-full bg-black border-2 border-white/20 relative overflow-hidden ${
                        isPlaying ? "animate-spin" : ""
                      }`}
                      style={{ animationDuration: "3s" }}
                    >
                      {/* Vinyl grooves */}
                      <div className="absolute inset-2 rounded-full border border-white/10"></div>
                      <div className="absolute inset-4 rounded-full border border-white/10"></div>
                      <div className="absolute inset-6 rounded-full border border-white/10"></div>

                      {/* Center label */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      </div>

                      {/* Album art overlay */}
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                    </div>

                    {/* Needle */}
                    <div className="absolute -right-1 top-2 w-6 h-0.5 bg-white/40 rounded-full origin-left transform rotate-12"></div>
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate font-mono">
                      {currentTrack ? currentTrack.name : "Connect to Spotify"}
                    </div>
                    <div className="text-xs text-white/60 truncate font-mono">
                      {currentTrack ? currentTrack.artists.map(a => a.name).join(', ') : "to start listening"}
                    </div>
                    <div className="text-xs text-white/40 truncate font-mono">
                      {currentTrack ? currentTrack.album.name : "Premium required"}
                    </div>
                  </div>
                </div>

                {/* Spotify Attribution */}
                <div className="mb-4 text-xs text-white/40 font-mono text-center">powered by spotify</div>

                {/* Connection Status */}
                {!isActive && (
                  <div className="mb-4 p-3 bg-white/10 rounded-lg border border-white/20">
                    <div className="text-xs text-white/80 font-mono text-center mb-2">
                      🎵 Connect to Spotify Premium
                    </div>
                    <Button
                      onClick={enableSpotify}
                      size="sm"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                      disabled={isLoading}
                    >
                      {isLoading ? "Connecting..." : "Connect Spotify"}
                    </Button>
                    {error && (
                      <div className="mt-2 text-xs text-red-300 text-center">
                        {error}
                      </div>
                    )}
                  </div>
                )}

                {/* Player Toggle (when Spotify is active) */}
                {isActive && (
                  <div className="mb-4 p-3 bg-white/10 rounded-lg border border-white/20">
                    <div className="text-xs text-white/80 font-mono text-center mb-2">
                      🎵 Switch to SDK controls
                    </div>
                    <Button
                      onClick={togglePlayerView}
                      size="sm"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      Show SDK
                    </Button>
                  </div>
                )}

                {/* Controls */}
                <div className="flex items-center justify-center gap-2">
                  <Button
                    onClick={handleTogglePlay}
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 w-8 h-8 p-0"
                    disabled={!isActive}
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </Button>

                  <Button
                    onClick={handleSkipTrack}
                    size="sm"
                    variant="ghost"
                    className="text-white/60 hover:text-white w-8 h-8 p-0"
                    disabled={!isActive}
                  >
                    <SkipForward className="w-3 h-3" />
                  </Button>

                  <Button
                    onClick={handleToggleMute}
                    size="sm"
                    variant="ghost"
                    className="text-white/60 hover:text-white w-8 h-8 p-0"
                    disabled={!isActive}
                  >
                    {volume === 0 ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                  </Button>

                  <div className="flex items-center gap-1 ml-2">
                    <div className="text-xs text-white/40 font-mono">⌘→</div>
                  </div>
                </div>

                {/* Keyboard Hints */}
                <div className="text-xs text-white/30 text-center mt-2 font-mono">
                  space: play/pause • ⌘→: skip • ⌘←: previous • m: mute
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

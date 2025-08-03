"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, SkipForward, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTrack, setCurrentTrack] = useState({
    title: "random track from playlist",
    artist: "various artists",
    album: "curated vibes",
  })
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd+Right Arrow (Mac) or Ctrl+Right Arrow (Windows/Linux) to skip
      if ((event.metaKey || event.ctrlKey) && event.key === "ArrowRight") {
        event.preventDefault()
        skipTrack()
      }

      // Space to play/pause (only when not typing in inputs)
      if (event.code === "Space" && event.target === document.body) {
        event.preventDefault()
        togglePlay()
      }

      // M to mute/unmute
      if (event.key === "m" && event.target === document.body) {
        event.preventDefault()
        toggleMute()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // Note: Spotify iframe doesn't allow direct play/pause control from external JS
    // This is more for UI state management
  }

  const skipTrack = () => {
    // Refresh the iframe to get a new random track from the playlist
    if (iframeRef.current) {
      const currentSrc = iframeRef.current.src
      iframeRef.current.src = ""
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = currentSrc
        }
      }, 100)
    }
    setCurrentTrack({
      title: "loading next track...",
      artist: "various artists",
      album: "curated vibes",
    })

    // Reset to new track after a delay
    setTimeout(() => {
      setCurrentTrack({
        title: "random track from playlist",
        artist: "various artists",
        album: "curated vibes",
      })
    }, 2000)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      {/* Hidden Spotify Player */}
      <div className="fixed -top-96 -left-96 opacity-0 pointer-events-none">
        <iframe
          ref={iframeRef}
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/6ti8UHn6tRsla8VbjzWM87?utm_source=generator&autoplay=1&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

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
          <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 min-w-[280px] shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-white/60 font-mono">now playing</div>
              <Button
                onClick={toggleVisibility}
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-white h-6 w-6 p-0"
              >
                ×
              </Button>
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
                <div className="text-sm font-medium text-white truncate font-mono">{currentTrack.title}</div>
                <div className="text-xs text-white/60 truncate font-mono">{currentTrack.artist}</div>
                <div className="text-xs text-white/40 truncate font-mono">{currentTrack.album}</div>
              </div>
            </div>

            {/* Spotify Attribution */}
            <div className="mb-4 text-xs text-white/40 font-mono text-center">powered by spotify</div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-2">
              <Button
                onClick={togglePlay}
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 w-8 h-8 p-0"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </Button>

              <Button
                onClick={skipTrack}
                size="sm"
                variant="ghost"
                className="text-white/60 hover:text-white w-8 h-8 p-0"
              >
                <SkipForward className="w-3 h-3" />
              </Button>

              <Button
                onClick={toggleMute}
                size="sm"
                variant="ghost"
                className="text-white/60 hover:text-white w-8 h-8 p-0"
              >
                {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
              </Button>

              <div className="flex items-center gap-1 ml-2">
                <div className="text-xs text-white/40 font-mono">⌘→</div>
              </div>
            </div>

            {/* Keyboard Hints */}
            <div className="text-xs text-white/30 text-center mt-2 font-mono">
              space: play/pause • ⌘→: skip • m: mute
            </div>
          </div>
        )}
      </div>
    </>
  )
}

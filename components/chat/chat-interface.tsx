"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
  isCommand?: boolean
}

const COMMANDS = {
  "/about": {
    route: "/about",
    description: "learn about my background and experience",
  },
  "/work": {
    route: "/work",
    description: "view my portfolio projects",
  },
  "/play": {
    route: "/play",
    description: "explore my creative experiments",
  },
  "/writing": {
    route: "/writing",
    description: "read my thoughts and articles",
  },
  "/contact": {
    route: "/contact",
    description: "get in touch with me",
  },
  "/help": {
    route: null,
    description: "show available commands",
  },
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "hi! i'm jane's ai assistant. i'm here to give you a personalized tour of her work. what would you like to explore first?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleCommand = (command: string) => {
    const cmd = COMMANDS[command as keyof typeof COMMANDS]
    if (!cmd) return false

    if (command === "/help") {
      const helpMessage: Message = {
        id: Date.now().toString(),
        content: `here are the available commands:\n\n${Object.entries(COMMANDS)
          .map(([cmd, info]) => `${cmd} - ${info.description}`)
          .join("\n")}`,
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, helpMessage])
      return true
    }

    if (cmd.route) {
      const responseMessage: Message = {
        id: Date.now().toString(),
        content: `taking you to ${cmd.description}...`,
        role: "assistant",
        timestamp: new Date(),
        isCommand: true,
      }
      setMessages((prev) => [...prev, responseMessage])

      setTimeout(() => {
        router.push(cmd.route!)
      }, 1000)
      return true
    }

    return false
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input.trim()
    setInput("")

    // Check if it's a command
    if (currentInput.startsWith("/")) {
      if (handleCommand(currentInput)) {
        return
      } else {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `unknown command: ${currentInput}. type /help to see available commands.`,
          role: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
        return
      }
    }

    setIsLoading(true)

    // TODO: Replace with actual OpenAI API call
    // Simulate AI response for now
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `jane is a designer, developer, and founder who creates digital experiences that connect human needs with technical innovation. want to know more about specific skills or projects?`,
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* macOS-style Chat Window */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Window Header with macOS controls */}
        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center">
          {/* macOS Window Controls */}
          <div className="flex items-center gap-2 mr-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Window Title */}
          <div className="flex-1 text-center">
            <h3 className="font-medium text-gray-900 dark:text-gray-100">jane's assistant</h3>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="h-96" ref={scrollAreaRef}>
          <div className="p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="space-y-1">
                <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                    {message.isCommand && (
                      <div className="flex items-center gap-1 mt-2 text-xs opacity-70">
                        <ArrowRight className="w-3 h-3" />
                        redirecting...
                      </div>
                    )}
                  </div>
                </div>

                {/* Timestamp */}
                <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <span className="text-xs text-gray-500 dark:text-gray-400 px-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="space-y-1">
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl rounded-bl-md px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ask about work, writing, play..."
              className="flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus-visible:ring-primary rounded-full px-4"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input || isLoading}
              className="bg-primary hover:bg-primary/90 rounded-full w-10 h-10 flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

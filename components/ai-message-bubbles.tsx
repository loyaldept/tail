"use client"

import { useEffect, useState } from "react"

interface MessageBubble {
  id: number
  question: string
  answer: string
  position: {
    top: string
    left: string
    right?: string
  }
  delay: number
}

const messages: MessageBubble[] = [
  {
    id: 1,
    question: "Hey Tail, I want to know how I am spending my budget?",
    answer: "Oh, you're shopping too much at Zara! Want me to show best places to shop and save more?",
    position: { top: "5%", left: "-380px" },
    delay: 0,
  },
  {
    id: 2,
    question: "Tail, I want a new Porsche 911?",
    answer:
      "You can definitely get that! However, we need to work two months on your credit score. Creating a plan to boost it with your approval.",
    position: { top: "15%", right: "-400px" },
    delay: 4000,
  },
  {
    id: 3,
    question: "Tail, my card was declined. What was the reason?",
    answer: "Hey, we detected a suspicious charge, that's why. Just confirm it was you and that's all!",
    position: { top: "75%", left: "-360px" },
    delay: 8000,
  },
  {
    id: 4,
    question: "Tail, can I use your API?",
    answer: "Yes definitely! It's super easy to get started. Check our developer docs.",
    position: { top: "85%", right: "-340px" },
    delay: 12000,
  },
  {
    id: 5,
    question: "I'm an immigrant, don't know English well?",
    answer: "No problem! By accent I can detect and you can speak in any language you prefer.",
    position: { top: "45%", left: "-390px" },
    delay: 16000,
  },
  {
    id: 6,
    question: "Can you help me build credit from scratch?",
    answer: "I'll create a personalized plan and guide you step by step to excellent credit.",
    position: { top: "55%", right: "-370px" },
    delay: 20000,
  },
]

export function AIMessageBubbles() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [typingMessages, setTypingMessages] = useState<number[]>([])
  const [typedText, setTypedText] = useState<{ [key: number]: string }>({})
  const [showAnswers, setShowAnswers] = useState<number[]>([])
  const [typingAnswers, setTypingAnswers] = useState<number[]>([])
  const [typedAnswers, setTypedAnswers] = useState<{ [key: number]: string }>({})

  useEffect(() => {
    messages.forEach((message) => {
      // Start typing question
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, message.id])
        setTypingMessages((prev) => [...prev, message.id])

        // Type question character by character
        let currentText = ""
        let charIndex = 0
        const typeQuestion = () => {
          if (charIndex < message.question.length) {
            currentText += message.question[charIndex]
            setTypedText((prev) => ({ ...prev, [message.id]: currentText }))
            charIndex++
            setTimeout(typeQuestion, 50 + Math.random() * 50) // Random typing speed
          } else {
            // Question finished typing
            setTypingMessages((prev) => prev.filter((id) => id !== message.id))

            // Start typing answer after a short delay
            setTimeout(() => {
              setShowAnswers((prev) => [...prev, message.id])
              setTypingAnswers((prev) => [...prev, message.id])

              let answerText = ""
              let answerIndex = 0
              const typeAnswer = () => {
                if (answerIndex < message.answer.length) {
                  answerText += message.answer[answerIndex]
                  setTypedAnswers((prev) => ({ ...prev, [message.id]: answerText }))
                  answerIndex++
                  setTimeout(typeAnswer, 30 + Math.random() * 40) // Slightly faster for AI response
                } else {
                  // Answer finished typing
                  setTypingAnswers((prev) => prev.filter((id) => id !== message.id))
                }
              }
              typeAnswer()
            }, 800) // Delay before AI responds
          }
        }
        typeQuestion()
      }, message.delay)
    })
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible max-lg:hidden">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`absolute transition-all duration-1000 z-30 ${
            visibleMessages.includes(message.id)
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{
            top: message.position.top,
            left: message.position.left,
            right: message.position.right,
            animation: visibleMessages.includes(message.id) ? `float-${message.id} 12s ease-in-out infinite` : "none",
          }}
        >
          {/* Message Bubble */}
          <div className="relative max-w-[320px] animate-pulse-slow">
            {/* Question Bubble */}
            <div className="bg-white/98 backdrop-blur-sm rounded-2xl p-4 mb-3 shadow-xl border-2 border-white/30 relative min-h-[60px] flex items-center">
              <div className="w-full">
                <p className="text-slate-800 text-sm font-medium leading-relaxed">
                  {typedText[message.id] || ""}
                  {typingMessages.includes(message.id) && (
                    <span className="inline-block w-2 h-5 bg-slate-800 ml-1 animate-pulse">|</span>
                  )}
                </p>
              </div>
              {/* Arrow pointing to card */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${
                  message.position.left
                    ? "right-[-10px] border-l-[10px] border-l-white/98 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
                    : "left-[-10px] border-r-[10px] border-r-white/98 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
                }`}
              />
            </div>

            {/* Answer Bubble */}
            {showAnswers.includes(message.id) && (
              <div className="bg-gradient-to-r from-cyan-500/95 to-purple-500/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-cyan-400/40 relative min-h-[60px] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="w-full">
                  <p className="text-white text-sm font-medium leading-relaxed">
                    {typedAnswers[message.id] || ""}
                    {typingAnswers.includes(message.id) && (
                      <span className="inline-block w-2 h-5 bg-white ml-1 animate-pulse">|</span>
                    )}
                  </p>
                </div>
                {/* Arrow pointing to card */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${
                    message.position.left
                      ? "right-[-10px] border-l-[10px] border-l-cyan-500/95 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
                      : "left-[-10px] border-r-[10px] border-r-cyan-500/95 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
                  }`}
                />
                {/* Tail signature */}
                {!typingAnswers.includes(message.id) && (
                  <div className="text-right mt-2 animate-in fade-in duration-300 delay-500">
                    <span className="text-white/90 text-xs font-semibold">— Tail</span>
                  </div>
                )}
              </div>
            )}

            {/* Typing indicator for answer */}
            {showAnswers.includes(message.id) && typingAnswers.includes(message.id) && !typedAnswers[message.id] && (
              <div className="bg-gradient-to-r from-cyan-500/95 to-purple-500/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-cyan-400/40 relative min-h-[60px] flex items-center animate-pulse">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                {/* Arrow pointing to card */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${
                    message.position.left
                      ? "right-[-10px] border-l-[10px] border-l-cyan-500/95 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
                      : "left-[-10px] border-r-[10px] border-r-cyan-500/95 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
                  }`}
                />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-8px) translateX(3px); }
          66% { transform: translateY(4px) translateX(-2px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(6px) translateX(-4px); }
          66% { transform: translateY(-5px) translateX(3px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-6px) translateX(2px); }
          66% { transform: translateY(5px) translateX(-3px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(5px) translateX(4px); }
          66% { transform: translateY(-6px) translateX(-1px); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-5px) translateX(-3px); }
          66% { transform: translateY(6px) translateX(2px); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(7px) translateX(1px); }
          66% { transform: translateY(-4px) translateX(-4px); }
        }
      `}</style>
    </div>
  )
}

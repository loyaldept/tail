"use client"

import { useEffect, useState } from "react"

const mobileMessages = [
  {
    id: 1,
    question: "Hey Tail, how am I spending?",
    answer: "You're shopping too much at Zara! Want better places to save?",
  },
  {
    id: 2,
    question: "Can I get a Porsche 911?",
    answer: "Definitely! Let's work on your credit score for 2 months first.",
  },
  {
    id: 3,
    question: "Why was my card declined?",
    answer: "Suspicious charge detected. Just confirm it was you!",
  },
]

export function MobileAIShowcase() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [typedQuestion, setTypedQuestion] = useState("")
  const [typedAnswer, setTypedAnswer] = useState("")
  const [showAnswer, setShowAnswer] = useState(false)
  const [isTypingQuestion, setIsTypingQuestion] = useState(false)
  const [isTypingAnswer, setIsTypingAnswer] = useState(false)

  useEffect(() => {
    const typeMessage = () => {
      const message = mobileMessages[currentMessage]
      setTypedQuestion("")
      setTypedAnswer("")
      setShowAnswer(false)
      setIsTypingQuestion(true)

      // Type question
      let questionIndex = 0
      const typeQuestion = () => {
        if (questionIndex < message.question.length) {
          setTypedQuestion(message.question.slice(0, questionIndex + 1))
          questionIndex++
          setTimeout(typeQuestion, 80)
        } else {
          setIsTypingQuestion(false)
          // Start answer after delay
          setTimeout(() => {
            setShowAnswer(true)
            setIsTypingAnswer(true)
            let answerIndex = 0
            const typeAnswer = () => {
              if (answerIndex < message.answer.length) {
                setTypedAnswer(message.answer.slice(0, answerIndex + 1))
                answerIndex++
                setTimeout(typeAnswer, 60)
              } else {
                setIsTypingAnswer(false)
                // Move to next message after delay
                setTimeout(() => {
                  setCurrentMessage((prev) => (prev + 1) % mobileMessages.length)
                }, 3000)
              }
            }
            typeAnswer()
          }, 1000)
        }
      }
      typeQuestion()
    }

    typeMessage()
  }, [currentMessage])

  return (
    <div className="lg:hidden mt-8 px-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">See TAIL in Action</h3>
        <p className="text-white/60 text-sm">Real AI conversations</p>
      </div>

      <div className="space-y-4 max-w-sm mx-auto">
        {/* Question Bubble */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
          <p className="text-slate-800 text-sm font-medium">
            {typedQuestion}
            {isTypingQuestion && <span className="inline-block w-1 h-4 bg-slate-800 ml-1 animate-pulse">|</span>}
          </p>
        </div>

        {/* Answer Bubble */}
        {showAnswer && (
          <div className="bg-gradient-to-r from-cyan-500/95 to-purple-500/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-cyan-400/30 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <p className="text-white text-sm font-medium">
              {typedAnswer}
              {isTypingAnswer && <span className="inline-block w-1 h-4 bg-white ml-1 animate-pulse">|</span>}
            </p>
            {!isTypingAnswer && (
              <div className="text-right mt-2 animate-in fade-in duration-300 delay-300">
                <span className="text-white/90 text-xs font-semibold">— Tail</span>
              </div>
            )}
          </div>
        )}

        {/* Typing indicator */}
        {showAnswer && isTypingAnswer && !typedAnswer && (
          <div className="bg-gradient-to-r from-cyan-500/95 to-purple-500/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-cyan-400/30 flex items-center animate-pulse">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          </div>
        )}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {mobileMessages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentMessage ? "bg-cyan-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

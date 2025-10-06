"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const letters = ["N", "I", "K", "E"]

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center"
        >
          <div className="flex space-x-2 mb-6">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="w-40 sm:w-56 md:w-64 lg:w-80 h-1 bg-background rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              style={{
                background: `linear-gradient(to right, var(--progress-start), var(--progress-end))`,
              }}
              className="h-full rounded-full"
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

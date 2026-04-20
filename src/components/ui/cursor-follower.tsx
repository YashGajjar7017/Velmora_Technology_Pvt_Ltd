'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.2 }}
        className={`pointer-events-none fixed z-50 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
      >
        <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-500/60" />
      </motion.div>

      {/* Trailing effect */}
      <motion.div
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
        className={`pointer-events-none fixed z-40 ${isVisible ? 'opacity-40' : 'opacity-0'} transition-opacity duration-200`}
      >
        <div className="w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/40" />
      </motion.div>

      {/* Water ripple effect on click */}
      <RippleEffect mousePosition={mousePosition} />
    </>
  )
}

function RippleEffect({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setRipples((prev) => [...prev, newRipple])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 600)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-none fixed rounded-full border border-emerald-500/60"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 30,
            height: 30,
            transform: 'translate(-50%, -50%)',
            zIndex: 30,
          }}
        />
      ))}
    </>
  )
}

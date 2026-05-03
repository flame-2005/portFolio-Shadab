'use client'
import { useEffect, useRef, useCallback } from 'react'

export default function EyeSection() {
  const sceneRef     = useRef<HTMLDivElement>(null)
  const irisMoverRef = useRef<HTMLDivElement>(null)
  const blinkRef     = useRef<HTMLDivElement>(null)
  const clickingRef  = useRef(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!irisMoverRef.current || !sceneRef.current) return
      const r   = sceneRef.current.getBoundingClientRect()
      const cx  = r.left + r.width  / 2
      const cy  = r.top  + r.height / 2
      const dx  = e.clientX - cx
      const dy  = e.clientY - cy
      const ang = Math.atan2(dy, dx)
      const raw = Math.hypot(dx, dy)
      // Soft asymptotic mapping — saturates at large distances
      const maxMove = r.width * 0.13
      const mapped  = maxMove * (1 - Math.exp(-raw / 280))
      const x = Math.cos(ang) * mapped
      const y = Math.sin(ang) * mapped * 0.6  // less vertical travel (eye shape)
      irisMoverRef.current.style.transform =
        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    globalThis.addEventListener('mousemove', onMove)
    return () => globalThis.removeEventListener('mousemove', onMove)
  }, [])

  const handleClick = useCallback(() => {
    if (clickingRef.current || !blinkRef.current) return
    clickingRef.current = true
    blinkRef.current.classList.add('clicking')
    blinkRef.current.addEventListener('animationend', () => {
      blinkRef.current?.classList.remove('clicking')
      clickingRef.current = false
    }, { once: true })
  }, [])

  // Fiber lines inside iris (viewBox 0 0 100 100)
  const fibers = Array.from({ length: 32 }, (_, i) => {
    const a = (i * Math.PI * 2) / 32
    return {
      id: `f${i}`,
      x1: 50 + Math.cos(a) * 42, y1: 50 + Math.sin(a) * 42,
      x2: 50 + Math.cos(a) * 96, y2: 50 + Math.sin(a) * 96,
    }
  })

  return (
    <section id="eye-track">
      <span className="eye-track-label">// TRACKING.ACTIVE</span>

      <div className="eye-scene" ref={sceneRef}>
        <button className="eye-click-btn" onClick={handleClick} aria-label="Blink eye" />

        <div className="eye-blink-wrap" ref={blinkRef}>

          {/* Layer 1 — sclera fill (bottom) */}
          <svg className="eye-svg eye-layer-bg" viewBox="0 0 600 260" fill="none">
            <defs>
              <radialGradient id="sclera-g" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="oklch(0.09 0.015 142)" />
                <stop offset="100%" stopColor="oklch(0.04 0.005 142)" />
              </radialGradient>
            </defs>
            <path
              d="M15,130 C80,45 195,8 300,6 C405,8 520,45 585,130 C520,205 405,235 300,235 C195,235 80,205 15,130 Z"
              fill="url(#sclera-g)"
            />
          </svg>

          {/* Layer 2 — moving iris (middle) */}
          <div className="eye-iris-mover" ref={irisMoverRef}>
            <div className="eye-iris-visual">
              <svg className="iris-fiber-svg" viewBox="0 0 100 100" fill="none">
                {fibers.map((f) => (
                  <line key={f.id} x1={f.x1} y1={f.y1} x2={f.x2} y2={f.y2}
                    stroke="oklch(0.72 0.22 142 / 0.22)" strokeWidth="0.6" />
                ))}
                <circle cx="50" cy="50" r="42" fill="none"
                  stroke="oklch(0.72 0.22 142 / 0.1)" strokeWidth="0.5" />
              </svg>
              <div className="eye-iris-pupil">
                <div className="eye-iris-shine" />
              </div>
            </div>
          </div>

          <svg className="eye-svg eye-layer-top" viewBox="0 0 600 260"
               fill="none" overflow="visible">
            {/* Fills everything OUTSIDE the eye shape = clips the iris visually */}
            <path
              d="M0,0 H600 V260 H0 Z M15,130 C80,45 195,8 300,6 C405,8 520,45 585,130 C520,205 405,235 300,235 C195,235 80,205 15,130 Z"
              fill="var(--bg)"
              fillRule="evenodd"
            />
            {/* Upper eyelid */}
            <path d="M15,130 C80,45 195,8 300,6 C405,8 520,45 585,130"
              stroke="oklch(0.72 0.22 142)" strokeWidth="2.5"
              fill="none" strokeLinecap="round" />
            {/* Lower eyelid */}
            <path d="M15,130 C80,205 195,235 300,235 C405,235 520,205 585,130"
              stroke="oklch(0.72 0.22 142 / 0.5)" strokeWidth="1.5"
              fill="none" strokeLinecap="round" />
            {/* Eyelashes */}
            <line x1="75"  y1="72"  x2="62"  y2="50"  stroke="oklch(0.72 0.22 142 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="130" y1="36"  x2="122" y2="14"  stroke="oklch(0.72 0.22 142 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="200" y1="11"  x2="198" y2="-10" stroke="oklch(0.72 0.22 142 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="255" y1="6"   x2="254" y2="-15" stroke="oklch(0.72 0.22 142 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="300" y1="6"   x2="300" y2="-15" stroke="oklch(0.72 0.22 142 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="345" y1="6"   x2="346" y2="-15" stroke="oklch(0.72 0.22 142 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="400" y1="11"  x2="402" y2="-10" stroke="oklch(0.72 0.22 142 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="470" y1="36"  x2="478" y2="14"  stroke="oklch(0.72 0.22 142 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="525" y1="72"  x2="538" y2="50"  stroke="oklch(0.72 0.22 142 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Corner dots */}
            <circle cx="15"  cy="130" r="3.5" fill="oklch(0.72 0.22 142 / 0.6)" />
            <circle cx="585" cy="130" r="3.5" fill="oklch(0.72 0.22 142 / 0.6)" />
          </svg>

        </div>

        <div className="eye-ambient" />
      </div>

      <span className="eye-track-sub">I see you, {'{'}cursor{'}'}</span>
    </section>
  )
}

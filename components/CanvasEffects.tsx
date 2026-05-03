'use client'

import { useEffect } from 'react'

interface Spark { x: number; y: number; vx: number; vy: number; life: number; decay: number; size: number; hue: number; bright: boolean }
interface Particle { x: number; y: number; vx: number; vy: number; r: number; color: string; alpha: number }

// Module-level ref so hover handlers don't create deep function nesting inside useEffect
let _cursor: HTMLElement | null = null
const onHoverEnter = () => { _cursor?.classList.add('hovering') }
const onHoverLeave = () => { _cursor?.classList.remove('hovering') }

export default function CanvasEffects() {
  useEffect(() => {
    const isTouchDevice = !window.matchMedia('(pointer: fine)').matches

    let mx = 0, my = 0
    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    let cursorRaf: number = 0
    if (!isTouchDevice) {
      _cursor = document.getElementById('cursor')

      document.addEventListener('mousemove', onMouseMove)

      const animCursor = () => {
        if (_cursor) { _cursor.style.left = mx + 'px'; _cursor.style.top = my + 'px' }
        cursorRaf = requestAnimationFrame(animCursor)
      }
      cursorRaf = requestAnimationFrame(animCursor)

      document.querySelectorAll('a, button, .project-card, .skill-chip, .tag').forEach(el => {
        el.addEventListener('mouseenter', onHoverEnter)
        el.addEventListener('mouseleave', onHoverLeave)
      })
    }

    // ── SPARK TRAIL ──────────────────────────────────────────────────────
    const sparkCanvas = document.createElement('canvas')
    sparkCanvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9997;'
    document.body.appendChild(sparkCanvas)
    const scCtx = sparkCanvas.getContext('2d')
    if (!scCtx) { sparkCanvas.remove(); return }
    const sc = scCtx
    let SW = window.innerWidth, SH = window.innerHeight
    sparkCanvas.width = SW; sparkCanvas.height = SH
    const resizeSpark = () => {
      SW = sparkCanvas.width = window.innerWidth
      SH = sparkCanvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeSpark)

    const sparks: Spark[] = []
    let lastX = 0, lastY = 0
    const onMouseMoveSpark = (e: MouseEvent) => {
      const dx = e.clientX - lastX, dy = e.clientY - lastY
      const speed = Math.hypot(dx, dy)
      lastX = e.clientX; lastY = e.clientY
      const count = Math.min(Math.floor(speed * 0.5), 6)
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2, vel = Math.random() * 2.5 + 0.8
        sparks.push({
          x: e.clientX, y: e.clientY,
          vx: Math.cos(angle) * vel * 0.6 + dx * 0.08,
          vy: Math.sin(angle) * vel * 0.6 + dy * 0.08,
          life: 1, decay: Math.random() * 0.04 + 0.025,
          size: Math.random() * 3 + 1, hue: 130 + Math.random() * 30,
          bright: Math.random() > 0.5,
        })
      }
    }
    document.addEventListener('mousemove', onMouseMoveSpark)

    let sparkRaf: number
    const drawSparks = () => {
      sc.clearRect(0, 0, SW, SH)
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx; s.y += s.vy; s.vy += 0.06; s.vx *= 0.97; s.life -= s.decay
        if (s.life <= 0) { sparks.splice(i, 1); continue }
        const r = s.size * s.life
        const grad = sc.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 3.5)
        grad.addColorStop(0, `hsla(${s.hue},100%,${s.bright ? 75 : 55}%,${s.life * 0.9})`)
        grad.addColorStop(0.4, `hsla(${s.hue},100%,50%,${s.life * 0.4})`)
        grad.addColorStop(1, `hsla(${s.hue},100%,40%,0)`)
        sc.beginPath(); sc.arc(s.x, s.y, r * 3.5, 0, Math.PI * 2)
        sc.fillStyle = grad; sc.fill()
        sc.beginPath(); sc.arc(s.x, s.y, r * 0.6, 0, Math.PI * 2)
        sc.fillStyle = `hsla(${s.hue},100%,92%,${s.life})`; sc.fill()
      }
      sparkRaf = requestAnimationFrame(drawSparks)
    }
    drawSparks()

    // ── TUNNEL CANVAS ────────────────────────────────────────────────────
    const tunnelCanvas = document.createElement('canvas')
    tunnelCanvas.id = 'tunnel-canvas'
    tunnelCanvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;opacity:0.15;mix-blend-mode:screen;'
    document.body.insertBefore(tunnelCanvas, document.body.firstChild)
    const tcCtx = tunnelCanvas.getContext('2d')
    if (!tcCtx) { tunnelCanvas.remove(); return }
    const tc = tcCtx
    let TW = window.innerWidth, TH = window.innerHeight
    tunnelCanvas.width = TW; tunnelCanvas.height = TH
    const resizeTunnel = () => { TW = tunnelCanvas.width = window.innerWidth; TH = tunnelCanvas.height = window.innerHeight }
    window.addEventListener('resize', resizeTunnel)

    let tunnelRaf: number
    const drawTunnel = () => {
      const sy = window.scrollY
      tc.clearRect(0, 0, TW, TH)
      const cx = TW / 2, cy = TH / 2
      const depth = (sy * 0.035) % 80
      tc.strokeStyle = '#22c55e'; tc.lineWidth = 0.5
      for (let i = 0; i < 14; i++) {
        const t = Math.pow(((i / 14) + depth / 80) % 1, 1.5)
        const hw = t * TW * 0.6, hh = t * TH * 0.6
        tc.globalAlpha = t * 0.5
        tc.beginPath(); tc.rect(cx - hw, cy - hh, hw * 2, hh * 2); tc.stroke()
      }
      tc.globalAlpha = 1
      tunnelRaf = requestAnimationFrame(drawTunnel)
    }
    drawTunnel()

    // ── PARTICLE CANVAS ──────────────────────────────────────────────────
    const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement
    const ctx = canvas?.getContext('2d')
    let particleRaf: number
    const particleCleanup = () => { cancelAnimationFrame(particleRaf) }
    if (canvas && ctx) {
      let W = window.innerWidth, H = window.innerHeight
      canvas.width = W; canvas.height = H
      const resizeP = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
      window.addEventListener('resize', resizeP)
      const COLORS = ['oklch(0.72 0.22 142)', 'oklch(0.65 0.18 142)', 'oklch(0.72 0.22 142 / 0.5)']
      const particles: Particle[] = []
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.3,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.6 + 0.2,
        })
      }
      const drawParticles = () => {
        ctx.clearRect(0, 0, W, H)
        const sy = window.scrollY
        particles.forEach(p => {
          p.x += p.vx
          p.y += p.vy - sy * 0.0002
          if (p.x < 0) p.x = W
          if (p.x > W) p.x = 0
          if (p.y < 0) p.y = H
          if (p.y > H) p.y = 0
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill(); ctx.globalAlpha = 1
        })
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const dist = Math.hypot(dx, dy)
            if (dist < 120) {
              ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = 'oklch(0.72 0.22 142)'
              ctx.globalAlpha = (1 - dist / 120) * 0.12; ctx.lineWidth = 0.5
              ctx.stroke(); ctx.globalAlpha = 1
            }
          }
        }
        particleRaf = requestAnimationFrame(drawParticles)
      }
      drawParticles()
    }

    // ── SCROLL REVEAL ────────────────────────────────────────────────────
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(revealEntry)
    }, { threshold: 0 })

    function revealEntry(e: IntersectionObserverEntry) {
      if (!e.isIntersecting) return
      e.target.classList.add('visible')
      revealObs.unobserve(e.target)
    }

    const revealTimer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el))
    }, 100)

    // ── CURSOR LIGHT SOURCE ──────────────────────────────────────────────
    const onCursorLight = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--gx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--gy', `${e.clientY}px`)
    }
    document.addEventListener('mousemove', onCursorLight)

    document.querySelectorAll('.project-card, .testi-card').forEach(card => {
      const el = card as HTMLElement
      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--cx', `${e.clientX - rect.left}px`)
        el.style.setProperty('--cy', `${e.clientY - rect.top}px`)
      })
      el.addEventListener('mouseleave', () => {
        el.style.setProperty('--cx', '-350px')
        el.style.setProperty('--cy', '-350px')
      })
    })

    // ── 3D TILT ──────────────────────────────────────────────────────────
    document.querySelectorAll('.project-card').forEach(card => {
      const el = card as HTMLElement
      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`
      })
      el.addEventListener('mouseleave', () => { el.style.transform = '' })
    })

    return () => {
      clearTimeout(revealTimer)
      cancelAnimationFrame(cursorRaf)
      cancelAnimationFrame(sparkRaf)
      cancelAnimationFrame(tunnelRaf)
      particleCleanup()
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousemove', onMouseMoveSpark)
      document.removeEventListener('mousemove', onCursorLight)
      window.removeEventListener('resize', resizeSpark)
      window.removeEventListener('resize', resizeTunnel)
      revealObs.disconnect()
      sparkCanvas.remove()
      tunnelCanvas.remove()
    }
  }, [])

  return null
}

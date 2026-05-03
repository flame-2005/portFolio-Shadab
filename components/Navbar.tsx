'use client'

import { useEffect } from 'react'

const NAV_SECTIONS = ['about', 'skills', 'projects', 'experience', 'testimonials', 'contact']

function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const targetY = el.getBoundingClientRect().top + window.scrollY - 72
  const startY = window.scrollY
  const distance = targetY - startY
  const duration = 900
  let startTime = 0

  function step(ts: number) {
    if (!startTime) startTime = ts
    const elapsed = ts - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * ease(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

function onNavClick(e: React.MouseEvent, id: string) {
  e.preventDefault()
  e.stopPropagation()
  smoothScrollTo(id)
}

export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const onScroll = () => {
      if (!navbar) return
      navbar.classList.toggle('scrolled', window.scrollY > 60)
      let cur = ''
      NAV_SECTIONS.forEach(id => {
        const s = document.getElementById(id)
        if (s && window.scrollY >= s.offsetTop - 120) cur = id
      })
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', (a as HTMLAnchorElement).getAttribute('href') === '#' + cur)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar">
      <button
        type="button"
        className="nav-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        MSA<span>.</span>dev
      </button>
      <ul className="nav-links">
        {NAV_SECTIONS.map(id => (
          <li key={id}>
            <a href={`#${id}`} onClick={(e) => onNavClick(e, id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta" onClick={(e) => onNavClick(e, 'contact')}>Get in Touch</a>
    </nav>
  )
}

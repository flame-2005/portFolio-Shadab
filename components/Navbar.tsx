'use client'

import { useEffect } from 'react'

const NAV_SECTIONS = ['about', 'skills', 'projects', 'experience', 'testimonials', 'contact']

function smoothScrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
      <a href="#contact" className="nav-cta" onClick={(e) => onNavClick(e, 'contact')}>Hire Me</a>
    </nav>
  )
}

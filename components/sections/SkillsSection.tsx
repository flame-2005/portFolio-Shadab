'use client'

import { useEffect } from 'react'

const ROW1 = ['JavaScript', 'TypeScript', 'Python', 'SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
const ROW2 = ['React', 'Next.js', 'React Native', 'Node.js', 'Express.js', 'Tailwind CSS', 'Framer Motion', 'tRPC']
const ROW3 = ['Convex', 'Supabase', 'Vercel', 'Docker', 'Git', 'Figma', 'OpenAI', 'Gemini AI', 'Pinecone', 'AWS']

function buildRow(items: string[]) {
  const doubled = [...items, ...items]
  return doubled.map((name, i) => (
    <span key={i} className="skill-chip">
      <span className="chip-label">{name}</span>
      {i < doubled.length - 1 && <span className="sep">·</span>}
    </span>
  ))
}

export default function SkillsSection() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('#skills .reveal:not(.visible)')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.05 })
    revealEls.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="skills-header">
          <div className="section-label reveal">002 — Skills</div>
          <h2 className="section-title reveal reveal-delay-1">
            Tech <span className="accent">Stack</span>
          </h2>
        </div>
      </div>

      <div className="ticker-row">
        <div className="ticker-row-label">Languages &amp; Databases</div>
        <div className="ticker-track">
          <div className="ticker-inner ltr">{buildRow(ROW1)}</div>
        </div>
      </div>

      <div className="ticker-row">
        <div className="ticker-row-label">Frameworks &amp; Libraries</div>
        <div className="ticker-track">
          <div className="ticker-inner rtl">{buildRow(ROW2)}</div>
        </div>
      </div>

      <div className="ticker-row">
        <div className="ticker-row-label">Platforms &amp; Tools</div>
        <div className="ticker-track">
          <div className="ticker-inner ltr2">{buildRow(ROW3)}</div>
        </div>
      </div>

      <div className="skills-inner">
        <div className="specializations reveal reveal-delay-3">
          {['Full-Stack Dev', 'Mobile Dev', 'UI/UX Design', 'Machine Learning', 'Generative AI', 'System Design'].map(s => (
            <span key={s} className="spec-pill">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

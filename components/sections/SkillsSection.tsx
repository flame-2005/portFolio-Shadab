'use client'
import { useEffect } from 'react'
import {
  siJavascript, siTypescript, siPython, siPostgresql, siMongodb,
  siRedis, siGraphql, siReact, siNextdotjs, siNodedotjs,
  siExpress, siTailwindcss, siFramer, siTrpc, siConvex,
  siSupabase, siVercel, siDocker, siGit, siFigma, siGooglegemini,
} from 'simple-icons'

type IconEntry = { path: string; hex: string } | null

const ICONS: Record<string, IconEntry> = {
  'JavaScript':    { path: siJavascript.path, hex: siJavascript.hex },
  'TypeScript':    { path: siTypescript.path, hex: siTypescript.hex },
  'Python':        { path: siPython.path,     hex: siPython.hex },
  'SQL':           null,
  'PostgreSQL':    { path: siPostgresql.path, hex: siPostgresql.hex },
  'MongoDB':       { path: siMongodb.path,    hex: siMongodb.hex },
  'Redis':         { path: siRedis.path,      hex: siRedis.hex },
  'GraphQL':       { path: siGraphql.path,    hex: siGraphql.hex },
  'React':         { path: siReact.path,      hex: siReact.hex },
  'Next.js':       { path: siNextdotjs.path,  hex: siNextdotjs.hex },
  'React Native':  { path: siReact.path,      hex: siReact.hex },
  'Node.js':       { path: siNodedotjs.path,  hex: siNodedotjs.hex },
  'Express.js':    { path: siExpress.path,    hex: 'ffffff' },
  'Tailwind CSS':  { path: siTailwindcss.path,hex: siTailwindcss.hex },
  'Framer Motion': { path: siFramer.path,     hex: siFramer.hex },
  'tRPC':          { path: siTrpc.path,       hex: siTrpc.hex },
  'Convex':        { path: siConvex.path,     hex: siConvex.hex },
  'Supabase':      { path: siSupabase.path,   hex: siSupabase.hex },
  'Vercel':        { path: siVercel.path,     hex: 'ffffff' },
  'Docker':        { path: siDocker.path,     hex: siDocker.hex },
  'Git':           { path: siGit.path,        hex: siGit.hex },
  'Figma':         { path: siFigma.path,      hex: siFigma.hex },
  'OpenAI':        null,
  'Gemini AI':     { path: siGooglegemini.path, hex: siGooglegemini.hex },
  'Pinecone':      null,
  'AWS':           null,
}

const ABBR: Record<string, string> = {
  'SQL': 'SQL', 'OpenAI': 'AI', 'Pinecone': 'PC', 'AWS': 'AWS',
}

const ROW1 = ['JavaScript', 'TypeScript', 'Python', 'SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
const ROW2 = ['React', 'Next.js', 'React Native', 'Node.js', 'Express.js', 'Tailwind CSS', 'Framer Motion', 'tRPC']
const ROW3 = ['Convex', 'Supabase', 'Vercel', 'Docker', 'Git', 'Figma', 'OpenAI', 'Gemini AI', 'Pinecone', 'AWS']

function SkillChip({ name }: { name: string }) {
  const icon = ICONS[name]
  return (
    <span className="skill-chip">
      <span className="chip-icon">
        {icon ? (
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="si-icon"
            style={{ fill: `#${icon.hex}` }}
          >
            <path d={icon.path} />
          </svg>
        ) : (
          <span className="chip-badge">{ABBR[name] ?? name.slice(0, 2).toUpperCase()}</span>
        )}
      </span>
      <span className="chip-label">{name}</span>
    </span>
  )
}

function buildRow(items: string[]) {
  const set  = [...items, ...items, ...items]
  const full = [...set, ...set]
  return full.map((name, i) => (
    <span key={`${name}-${i}`} className="chip-wrap">
      <SkillChip name={name} />
      {i < full.length - 1 && <span className="sep">·</span>}
    </span>
  ))
}

export default function SkillsSection() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('#skills .reveal:not(.visible)')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
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

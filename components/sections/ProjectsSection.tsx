const GH_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LINK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const PROJECTS = [
  {
    num: '// 01',
    name: 'TheVantEdge',
    client: 'Pkeday Advisors',
    metrics: [
      { val: '150+', key: 'Sources Tracked' },
      { val: '50K+', key: 'Records Managed' },
      { val: '25K+', key: 'Posts Processed' },
      { val: '40%', key: 'Faster Load' },
    ],
    desc: 'End-to-end AI-driven investment research platform. Tracks 150+ sources (blogs, research firms, YouTube), applies AI filtering to remove noise, and surfaces high-quality trading insights. Owned full frontend, backend architecture, data pipelines, and AI processing workflows.',
    tech: ['Next.js', 'TypeScript', 'Convex', 'Supabase', 'OpenAI', 'Gemini', 'Tailwind'],
    live: 'https://thevantedge.com',
    liveLabel: 'Live',
    github: null,
  },
  {
    num: '// 02',
    name: 'ChangePay',
    client: 'eSamudaay ($20M+ Valued)',
    metrics: [
      { val: '$20M+', key: 'Company Valuation' },
      { val: '100%', key: 'Built From Scratch' },
      { val: 'Full', key: 'UI/UX + Dev' },
      { val: '1', key: 'Developer (Solo)' },
    ],
    desc: 'Built the ChangePay website (changepay.in) completely from scratch as lead web developer. End-to-end ownership — Figma UI/UX design, full frontend and backend development — for a fintech platform at a $20M+ valued company.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Figma', 'Tailwind CSS', 'Razorpay'],
    live: 'https://changepay.in',
    liveLabel: 'Live',
    github: null,
  },
  {
    num: '// 03',
    name: 'JobGenie',
    client: 'Freelance · Self-Built',
    metrics: [
      { val: '1.2K+', key: 'Users/Month' },
      { val: '90%', key: 'Faster Applications' },
      { val: '5K+', key: 'Resume Queries/Day' },
      { val: '<5min', key: 'Apply Time' },
    ],
    desc: 'AI-powered career assistant — WebApp + Chrome Extension. Smart resume building, AI form auto-fill, RAG-powered job chat. Cut average application time from 45 min to under 5 min. 1.2K+ active monthly users.',
    tech: ['Next.js', 'Convex', 'Supabase', 'Pinecone', 'Gemini AI', 'Tailwind'],
    live: null,
    liveLabel: 'Live',
    github: 'https://github.com/flame-2005/jobGenie---AI-chat-Assistant',
  },
  {
    num: '// 04',
    name: 'Yuva Vaani',
    client: 'Founding Member · Nation-Scale',
    metrics: [
      { val: 'Nation', key: 'Scale Vision' },
      { val: 'Audio', key: 'Posts + Images' },
      { val: 'Map', key: 'Creator Discovery' },
      { val: 'Live', key: 'Talent Contests' },
    ],
    desc: 'Campus radio + social platform built for student voices across India. Region-based content, audio posts with images, creator follow system, talent competitions powered by engagement, and map-based creator discovery.',
    tech: ['Next.js', 'React Native', 'MongoDB', 'Node.js', 'Tailwind', 'Cloudinary'],
    live: null,
    liveLabel: 'Live',
    github: 'https://github.com/flame-2005/YuvaVaani',
  },
  {
    num: '// 05',
    name: 'EzyHelp',
    client: 'Freelance · Social Impact',
    metrics: [
      { val: 'Blue', key: 'Collar Focus' },
      { val: 'Real', key: 'World Impact' },
      { val: 'Full', key: 'Stack Owned' },
      { val: 'Live', key: 'Worker Signup' },
    ],
    desc: 'Platform connecting blue-collar workers with users — built to create economic opportunity for underserved communities. Worker signup system, category-based service discovery, MongoDB backend, and React + Tailwind frontend.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    live: null,
    liveLabel: 'Live',
    github: 'https://github.com/flame-2005/EzyHelp',
  },
  {
    num: '// 06',
    name: 'Fanon Mobile',
    client: 'Fanon.co · 100K+ Target',
    metrics: [
      { val: '50%', key: 'Perf Boost' },
      { val: '25%', key: 'Faster Delivery' },
      { val: 'Video', key: 'Playback System' },
      { val: 'Infinite', key: 'Scroll Feed' },
    ],
    desc: 'React Native mobile app for a comic + creator content platform targeting 100K+ users. Scrollable content feed, video playback, image zoom, social actions (like/bookmark/share), creator uploads, and Supabase Auth — all shipped with a 50% performance improvement.',
    tech: ['React Native', 'TypeScript', 'Expo', 'Supabase', 'Convex', 'MongoDB'],
    live: 'https://play.google.com/store/apps/details?id=co.fanon&pcampaignid=web_share',
    liveLabel: 'Play Store',
    github: null,
  },
]

const DOUBLED = [...PROJECTS, ...PROJECTS]

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="projects-inner">
        <div className="projects-header">
          <div className="section-label reveal">003 — Projects</div>
          <h2 className="section-title reveal reveal-delay-1">
            What I&apos;ve <span className="accent">Built</span>
          </h2>
        </div>
      </div>
      <div className="proj-ticker-wrap reveal">
        <div className="proj-ticker-inner ltr">
          {DOUBLED.map((p, idx) => (
            <div key={`${p.name}-${idx}`} className="project-card">
              <div className="project-number">{p.num}</div>
              <div className="project-name">{p.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--cyan)', letterSpacing: '0.08em', marginBottom: '1rem', opacity: 0.8 }}>
                {p.client}
              </div>
              <div className="project-metrics">
                {p.metrics.map(m => (
                  <div key={m.key} className="metric">
                    <span className="val">{m.val}</span>
                    <span className="mkey">{m.key}</span>
                  </div>
                ))}
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
                    {LINK_ICON} {p.liveLabel}
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    {GH_ICON} GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

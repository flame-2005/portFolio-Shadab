const EXPERIENCE = [
  {
    date: 'Nov 2024 — Present',
    role: 'Full Stack Developer',
    company: 'Pkeday Advisors',
    sub: 'TheVantEdge & SignalBrief · Investment Research Platform',
    dotColor: 'var(--magenta)',
    dotGlow: 'var(--glow-mag)',
    dateColor: 'var(--magenta)',
    tech: ['Next.js', 'TypeScript', 'Convex', 'Supabase', 'OpenAI', 'Gemini', 'GCS', 'Tailwind'],
    bullets: [
      <>Built <strong>TheVantEdge</strong> end-to-end — full frontend, backend architecture, data pipelines, and AI processing workflows. Platform tracks <strong>150+ sources</strong>, filters noise with AI, and surfaces high-quality trading insights for investors.</>,
      <>Managed <strong>50K+ records</strong> across 15+ relational tables; implemented Map-Reduce patterns; integrated OpenAI &amp; Gemini for automated summarization, evaluation, and grading.</>,
      <>Built <strong>SignalBrief</strong>: migrated PDF storage from Google Drive → GCS, implemented session-based auth, fixed download issues, eliminated OTP friction — improving reliability and user experience significantly.</>,
    ],
  },
  {
    date: 'Feb 2025 — Jul 2025',
    role: 'Full Stack Developer Intern',
    company: 'Fanon',
    sub: 'fanon.co · Creator Content Platform · Target 100K+ users',
    dotColor: 'var(--cyan)',
    dotGlow: 'var(--glow-cyan)',
    dateColor: 'var(--cyan)',
    tech: ['React Native', 'TypeScript', 'Expo', 'Supabase', 'Convex', 'Next.js'],
    bullets: [
      <>Engineered the Fanon mobile app: scrollable content feed, <strong>video playback system</strong>, image zoom, social actions (like, bookmark, share), comic episodes, and creator uploads — boosted overall app performance by <strong>50%</strong>.</>,
      <>Delivered Supabase Auth integration, image embedding, and creator Q&amp;A features; accelerated cross-team timelines by <strong>25%</strong>.</>,
    ],
  },
  {
    date: '2024',
    role: 'Lead Web Developer',
    company: 'eSamudaay / ChangePay',
    sub: 'changepay.in · $20M+ Valued Company',
    dotColor: 'oklch(0.72 0.22 142)',
    dotGlow: 'var(--glow-mag)',
    dateColor: 'var(--magenta)',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Figma', 'Tailwind CSS', 'Razorpay'],
    bullets: [
      <>Built the <strong>ChangePay</strong> website (changepay.in) completely from scratch — sole developer. Handled end-to-end: UI/UX design in Figma, full frontend, and backend development.</>,
      <>Delivered a production-grade platform for a <strong>$20M+ valued fintech company</strong>; took full ownership of the product from blank canvas to live launch.</>,
    ],
  },
  {
    date: '2024',
    role: 'Founding Member · Full Stack Developer',
    company: 'Yuva Vaani',
    sub: 'Nation-Scale Campus Radio + Social Platform',
    dotColor: 'oklch(0.65 0.18 142)',
    dotGlow: 'var(--glow-cyan)',
    dateColor: 'var(--cyan)',
    tech: ['Next.js', 'React Native', 'MongoDB', 'Node.js', 'Tailwind', 'Cloudinary'],
    bullets: [
      <>Built a campus radio + social platform for student voices across India — region-based content feeds, audio posts with images, creator follow system, and <strong>talent competitions</strong> powered by engagement.</>,
      <>Designed and implemented map-based creator discovery; contributed to a nation-scale community product vision connecting students across campuses.</>,
    ],
  },
  {
    date: 'Jan 2024 — Nov 2024',
    role: 'Freelance Full Stack Developer',
    company: 'Independent',
    sub: '10+ Startup Clients · EzyHelp, FotoDukan, Codes Wear & more',
    dotColor: 'oklch(0.65 0.18 142 / 0.6)',
    dotGlow: 'none',
    dateColor: 'var(--gray)',
    tech: ['Next.js', 'React', 'React Native', 'Node.js', 'MongoDB', 'Tailwind'],
    bullets: [
      <>Built <strong>EzyHelp</strong> — a marketplace connecting blue-collar workers with users. Worker signup system, category-based discovery, MongoDB backend, React + Tailwind frontend. Real-world social impact product.</>,
      <>Delivered web and mobile solutions for <strong>10+ startups</strong>; scaled platforms to <strong>25,000+ monthly users</strong>; built eSamudaay student platform serving <strong>5,000+ users</strong> with posts, groups, and mentorship network.</>,
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="experience-inner">
        <div className="exp-header">
          <div className="section-label reveal">004 — Experience</div>
          <h2 className="section-title reveal reveal-delay-1">
            Where I&apos;ve <span className="accent">Worked</span>
          </h2>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((exp, idx) => (
            <div key={exp.company + exp.role} className={`timeline-item reveal reveal-delay-${idx % 3}`}>
              <div
                className="timeline-dot"
                style={{ borderColor: exp.dotColor, boxShadow: exp.dotGlow === 'none' ? undefined : exp.dotGlow }}
              />
              <div className="timeline-date" style={{ color: exp.dateColor }}>{exp.date}</div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">
                <span>{exp.company}</span>
                <span style={{ color: 'var(--gray-dim)' }}>·</span>
                <span style={{ color: 'var(--gray)', fontSize: '0.75rem' }}>{exp.sub}</span>
              </div>
              <div className="timeline-tech">
                {exp.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <ul className="timeline-bullets">
                {exp.bullets.map((b, i) => <li key={`${exp.company}-bullet-${i}`}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

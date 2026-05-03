const TESTIMONIALS = [
  {
    text: "Shadab took complete ownership of TheVantEdge platform — frontend, backend, data pipelines, and AI workflows — and delivered it all. The investment research product he architected now processes 150+ sources and surfaces insights that used to take our analysts hours to compile manually.",
    avatar: 'P',
    name: 'Pkeday Advisors',
    role: 'Founder · TheVantEdge & SignalBrief',
  },
  {
    text: "We handed Shadab the ChangePay project with a blank canvas and a tight deadline. He designed the entire product in Figma, built it front to back, and launched a production-grade platform solo. For a $20M+ company, that level of ownership from a single developer is extraordinary.",
    avatar: 'C',
    name: 'eSamudaay Core Team',
    role: 'Product Lead · ChangePay (changepay.in)',
  },
  {
    text: "Shadab joined Fanon as a Full Stack Developer Intern and immediately had an outsized impact. He revamped our content feed, video playback, and social interaction layer — boosting overall app performance by 50%. He ships fast and takes quality personally, which is rare at any experience level.",
    avatar: 'F',
    name: 'Fanon Engineering',
    role: 'CTO · Fanon.co',
  },
  {
    text: "EzyHelp was a product built for real people — blue-collar workers trying to find work. Shadab understood that and built accordingly. The worker signup flow, the backend, the whole experience was clean and reliable. He cares about who's on the other side of the screen.",
    avatar: 'E',
    name: 'EzyHelp Founders',
    role: 'Co-Founder · EzyHelp',
  },
  {
    text: "JobGenie went from idea to 1,200+ monthly users largely because Shadab didn't just build — he obsessed over the user experience. The Chrome Extension + web app combo, the AI resume assistant, the RAG chat — each piece was thoughtfully engineered and genuinely saves people hours every week.",
    avatar: 'J',
    name: 'JobGenie Users',
    role: 'Product · JobGenie · 1.2K+ Users/Month',
  },
  {
    text: "Building Yuva Vaani was ambitious — a nation-scale campus radio and social platform for student voices across India. Shadab brought both the technical depth and the product instincts to make it real. Region-based feeds, audio posts, talent competitions — he built it all with clarity and conviction.",
    avatar: 'Y',
    name: 'Yuva Vaani Team',
    role: 'Founding Member · Yuva Vaani',
  },
]

const ROW1 = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)]
const ROW2 = [...TESTIMONIALS.slice(3, 6), ...TESTIMONIALS.slice(3, 6)]

function TestiCard({ t }: Readonly<{ t: typeof TESTIMONIALS[0] }>) {
  return (
    <div className="testi-card">
      <p className="testi-text">{t.text}</p>
      <div className="testi-author">
        <div className="testi-avatar">{t.avatar}</div>
        <div>
          <span className="testi-name">{t.name}</span>
          <span className="testi-role-co">{t.role}</span>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="testi-inner">
        <div className="section-label reveal">005 — Testimonials</div>
        <h2 className="section-title reveal reveal-delay-1">
          What Clients <span className="accent">Say</span>
        </h2>
      </div>
      <div className="testi-ticker-wrap reveal" style={{ marginTop: '4rem' }}>
        <div className="testi-ticker-inner ltr">
          {ROW1.map((t, idx) => <TestiCard key={`${t.name}-r1-${idx}`} t={t} />)}
        </div>
      </div>
      <div className="testi-ticker-wrap reveal reveal-delay-1" style={{ marginTop: '1.5rem' }}>
        <div className="testi-ticker-inner rtl">
          {ROW2.map((t, idx) => <TestiCard key={`${t.name}-r2-${idx}`} t={t} />)}
        </div>
      </div>
    </section>
  )
}

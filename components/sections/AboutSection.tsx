export default function AboutSection() {
  return (
    <section id="about">
      <div className="about-inner">
        <div className="about-text">
          <div className="section-label reveal">001 — About</div>
          <h2 className="section-title reveal reveal-delay-1">
            Who I <span className="accent">Am</span>
          </h2>
          <p className="reveal reveal-delay-2">
            I&apos;m a <strong>B.Tech student at NIT Karnataka</strong> who ships production-grade software.
            As Full Stack Developer at Pkeday, I architected an AI-driven financial research pipeline
            that handles <strong>50K+ records</strong> and processes <strong>25K+ posts</strong> daily.
          </p>
          <p className="reveal reveal-delay-3">
            Previously at <strong>Fanon</strong> (targeting 100K+ users), built freelance platforms
            serving <strong>25,000+ monthly users</strong>, and led the eSamudaay student platform
            connecting <strong>5,000+ students</strong> with a mentorship network.
          </p>
          <div className="about-tags reveal reveal-delay-4">
            {['NIT Karnataka', 'SIH 2023', 'Open Source', 'Startup Minded', 'AI / ML', 'System Design'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
        <div className="about-card reveal reveal-delay-2">
          <div className="card-stat-grid">
            <div className="card-stat">
              <span className="num">50K+</span>
              <span className="lbl">DB Records Managed</span>
            </div>
            <div className="card-stat">
              <span className="num">1.2K+</span>
              <span className="lbl">JobGenie Users/mo</span>
            </div>
            <div className="card-stat">
              <span className="num">40%</span>
              <span className="lbl">Load Speed Boost</span>
            </div>
            <div className="card-stat">
              <span className="num">50%</span>
              <span className="lbl">App Perf Boost</span>
            </div>
          </div>
          <div className="about-quote">
            &ldquo;Empowering startups with scalable full-stack solutions and generative AI — from zero to production.&rdquo; 🚀
          </div>
        </div>
      </div>
    </section>
  )
}

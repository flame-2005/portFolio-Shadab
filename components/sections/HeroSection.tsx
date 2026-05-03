import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-status reveal">
            <span className="status-dot" />
            <span>Available for new opportunities</span>
          </div>
          <h1 className="hero-name">
            <span className="line1 reveal reveal-delay-1">Mohammed</span>
            <span className="line2 glitch-wrap reveal reveal-delay-2" data-text="Shadab Alam">
              Shadab Alam
            </span>
          </h1>
          <div className="hero-roles reveal reveal-delay-2">
            <span className="hl">Full Stack Dev</span>
            <span className="sep">/</span>
            <span>Gen AI Engineer</span>
            <span className="sep">/</span>
            <span>Prompt Engineer</span>
            <span className="sep">/</span>
            <span>NIT Karnataka</span>
          </div>
          <p className="hero-bio reveal reveal-delay-3">
            B.Tech student building at the intersection of{' '}
            <strong>scalable systems</strong> and <strong>generative AI</strong>.
            Currently architecting AI-driven research pipelines at Pkeday Investments.
            Ex-Fanon. Lead Dev at eSamudaay. SIH 2023 Team Lead.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a href="#projects" className="btn-neon">View Projects</a>
            <a href="#contact" className="btn-neon cyan">Get In Touch</a>
          </div>
          <div className="hero-stats reveal reveal-delay-4">
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-label">Startups Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">25K+</span>
              <span className="stat-label">Monthly Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">50K+</span>
              <span className="stat-label">Records Managed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">3</span>
              <span className="stat-label">Years Building</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-2">
          <div className="hero-img-wrap">
            <Image
              src="/hero-bot.png"
              alt="AI Robot"
              fill
              priority
              className="hero-bot-img"
            />
            <div className="hero-img-glow" />
          </div>
        </div>
      </div>
      <div className="neon-divider hero-divider" />
    </section>
  )
}

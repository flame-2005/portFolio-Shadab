import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import CanvasEffects from '@/components/CanvasEffects'
import HeroSection from '@/components/sections/HeroSection'
import EyeSection from '@/components/sections/EyeSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

// ContactSection uses Convex useMutation — load client-only to avoid SSR issues
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: false })

export default function Home() {
  return (
    <>
      {/* Custom cursor */}
      <div id="cursor">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 2 L3 16 L7.5 12 L10.5 18 L12.5 17 L9.5 11 L15 11 Z"
            fill="oklch(0.72 0.22 142)"
            stroke="oklch(0.04 0.005 142)"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div id="cursor-ring" />

      {/* Fixed canvas for particles */}
      <canvas id="particles-canvas" />

      {/* Noise overlay */}
      <div className="noise" />

      {/* All JS effects */}
      <CanvasEffects />

      <Navbar />

      <main>
        <HeroSection />
        {/* <EyeSection /> */}
        <div className="neon-divider" />
        <AboutSection />
        <div className="neon-divider" />
        <SkillsSection />
        <div className="neon-divider" />
        <ProjectsSection />
        <div className="neon-divider" />
        <ExperienceSection />
        <div className="neon-divider" />
        <TestimonialsSection />
        <div className="neon-divider" />
        <ContactSection />
      </main>

      <footer>
        <div className="footer-copy">
          © 2025 <span>Mohammed Shadab Alam</span>. Crafted with ⚡ and too much coffee.
        </div>
        <div className="footer-copy">
          <span>MSA</span>.dev — Full Stack · Gen AI · NIT Karnataka
        </div>
      </footer>
    </>
  )
}

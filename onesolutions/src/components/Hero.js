"use client"

import { useState, useEffect } from "react"

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ["Full Stack Development", "Social Media Marketing", "Video Content Creation", "Career Mentorship"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Empowering Developers with
            <span className="gradient-text"> Cutting-edge Skills</span>
          </h1>
          <div className="hero-subtitle">
            <span>Specializing in </span>
            <span className="typing-text">{texts[currentText]}</span>
          </div>
          <p className="hero-description">
            One Solutions is an innovative EdTech and social marketing company dedicated to 
            empowering individuals with the skills needed to thrive in today's tech-driven world.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('careers')}
            >
              View Careers
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💻</div>
            <h4>Web Development</h4>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">📱</div>
            <h4>Mobile Apps</h4>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🎥</div>
            <h4>Video Content</h4>
          </div>
          <div className="hero-main-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                <span className="window-title">OneSolutions.js</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="keyword">const</span> 
                  <span className="variable"> success</span> 
                  <span className="operator"> = </span>
                  <span className="function">learn</span>
                  <span className="punctuation">(</span>
                  <span className="string">'coding'</span>
                  <span className="punctuation">)</span>
                </div>
                <div className="code-line">
                  <span className="keyword">if</span>
                  <span className="punctuation"></span>
                  <span className="variable">success</span>
                  <span className="punctuation\"></span>
                </div>
                <div className="code-line indent">
                  <span className="function">buildAmazingThings</span>
                  <span className="punctuation">()</span>
                </div>
                <div className="code-line">
                  <span className="punctuation"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero;

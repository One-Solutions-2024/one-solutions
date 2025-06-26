"use client"

import { useState, useEffect } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["hero", "about", "services", "careers", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.mobile-menu-container')
      const button = document.querySelector('.mobile-menu-btn')

      if (isMobileMenuOpen && menu && !menu.contains(event.target) &&
        button && !button.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection("hero")}>
          <img
            src="assets\img\nav_logo.png"
            alt="One Solutions"
            className="logo-img"
          />
          <div className="logo-text">
            <h2>ONE SOLUTIONS<span>Ed-Tech</span>
            </h2>
          </div>
        </div>

        <div className="nav-menu">
          {["about", "services", "careers", "contact"].map((section) => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? "active" : ""}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <a
            href="https://onesolutions.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link special"
          >
            Job Portal
          </a>
        </div>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Offcanvas Mobile Menu */}
        <div className={`mobile-menu-container ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-header">
            <div className="mobile-nav-logo" onClick={() => scrollToSection("hero")}>
              <img
                src="assets\img\nav_logo.png"
                alt="One Solutions"
                className="logo-img"
              />
            </div>
            <div className='close-icon-bg'>
              <button
                className="close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
          </div>

          <div className="mobile-menu-content">
            {["about", "services", "careers", "contact"].map((section) => (
              <button
                key={section}
                className={`mobile-nav-link ${activeSection === section ? "active" : ""}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <a
              href="https://onesolutions.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-link nav-link special"
            >
              Job Portal
            </a>
          </div>
        </div>
      </div>


    </nav>
  )
}

export default Navbar
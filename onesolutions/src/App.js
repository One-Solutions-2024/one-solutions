"use client"

import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Careers from "./components/Careers"
import Services from "./components/Services"
import Stats from "./components/Stats"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import "./App.css"

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Careers />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

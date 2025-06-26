"use client"

import { useState, useEffect, useRef } from "react"

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    success: 0,
    experience: 0,
  })

  const sectionRef = useRef(null)

  const finalCounts = {
    students: 100,
    courses: 4,
    success: 98,
    experience: 1
    ,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        students: Math.floor(finalCounts.students * progress),
        courses: Math.floor(finalCounts.courses * progress),
        success: Math.floor(finalCounts.success * progress),
        experience: Math.floor(finalCounts.experience * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, stepDuration)
  }

  const stats = [
    {
      number: counts.students,
      suffix: "+",
      label: "Students Trained",
      icon: "👨‍🎓",
      color: "#3498db",
    },
    {
      number: counts.courses,
      suffix: "+",
      label: "Courses Available",
      icon: "📚",
      color: "#e74c3c",
    },
    {
      number: counts.success,
      suffix: "%",
      label: "Success Rate",
      icon: "🎯",
      color: "#2ecc71",
    },
    {
      number: counts.experience,
      suffix: "+",
      label: "Years Experience",
      icon: "⭐",
      color: "#f39c12",
    },
  ]

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-background">
        <div className="stats-pattern"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title white">Our Impact in Numbers</h2>
          <p className="section-subtitle white">Transforming careers and building futures in tech</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number" style={{ color: stat.color }}>
                {stat.number}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-bar">
                <div
                  className="stat-fill"
                  style={{
                    backgroundColor: stat.color,
                    width: isVisible ? "100%" : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

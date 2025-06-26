const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Development Training",
      description: "Comprehensive training program covering both frontend and backend technologies",
      image: "assets/img/service_1.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Python", "SQLite"],
      features: [
        "Hands-on project-based learning",
        "Industry-standard best practices",
        "Real-world application development",
        "Career placement assistance",
      ],
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "Strategic social media marketing to boost your brand presence",
      image: "assets/img/service_2.svg",
      technologies: ["Instagram", "LinkedIn", "YouTube", "Content Strategy", "Analytics"],
      features: [
        "Content creation and curation",
        "Platform-specific strategies",
        "Performance analytics",
        "Community engagement",
      ],
    },
    {
      id: 3,
      title: "Video Content Creation",
      description: "Professional video content for educational and marketing purposes",
      image: "assets/img/service_3.jpg",
      technologies: ["Video Editing", "Scripting", "Animation", "Live Streaming"],
      features: [
        "Educational video tutorials",
        "Marketing video content",
        "Live coding sessions",
        "Interview preparation videos",
      ],
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solutions to accelerate your tech career</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card ${index % 2 === 1 ? "reverse" : ""}`}>
              <div className="service-content">
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>

                <div className="technologies">
                  <h4>Technologies & Tools:</h4>
                  <div className="tech-tags">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button className="btn btn-outline">Learn More</button>
              </div>

              <div className="service-visual">
                <div className="image-wrapper">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <div className="service-icon">
                        {service.id === 1 && "💻"}
                        {service.id === 2 && "📱"}
                        {service.id === 3 && "🎥"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

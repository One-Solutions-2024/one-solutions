const About = () => {
  const features = [
    {
      icon: "🎯",
      title: "Expert-Led Training",
      description: "Learn from industry professionals with years of real-world experience",
    },
    {
      icon: "🚀",
      title: "Cutting-Edge Curriculum",
      description: "Stay ahead with the latest technologies and industry best practices",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Join a thriving community of learners and professionals",
    },
    {
      icon: "💼",
      title: "Career Guidance",
      description: "Get personalized career advice and job placement assistance",
    },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About One Solutions</h2>
          <p className="section-subtitle">
            Bridging the gap between traditional education and real-world technical demands
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <h3>Our Mission</h3>
              <p>
                One Solutions is an innovative EdTech and social marketing company dedicated to empowering individuals
                with the skills and knowledge needed to thrive in today's tech-driven world. By leveraging popular
                platforms like Instagram, LinkedIn, and YouTube, we provide engaging, accessible, and up-to-date
                knowledge-sharing content.
              </p>
            </div>

            <div className="text-block">
              <h3>What We Do</h3>
              <p>
                Our focus is on full stack development, offering in-depth tutorials and insights into key technologies
                such as HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Node.js, Python, and SQLite. We cater to aspiring
                developers, students, and professionals seeking to expand their technical expertise.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Video Tutorials</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="image-container">
              <img
                src="assets/img/about_us.jpg"
                alt="About One Solutions"
                className="about-image"
              />
              <div className="image-overlay">
                <div className="play-button">
                  <div className="play-icon">▶</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

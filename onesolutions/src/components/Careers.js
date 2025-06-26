"use client"

import { useState } from "react"

const Careers = () => {
  const [openJob, setOpenJob] = useState(null)

  const jobs = [
    {
      id: "frontend",
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      experience: "Freshers Training Candidates",
      salary: "Competitive",
      description: "Develop and maintain the frontend of web applications using React.js and Bootstrap.",
      requirements: [
        "Basic understanding of HTML, CSS, JavaScript",
        "Willingness to learn React.js and modern frameworks",
        "Good problem-solving skills",
        "Team collaboration abilities",
      ],
      responsibilities: [
        "Build responsive web applications",
        "Collaborate with design and backend teams",
        "Write clean, maintainable code",
        "Participate in code reviews",
      ],
    },
    {
      id: "backend",
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote",
      experience: "Freshers Training Candidates",
      salary: "Competitive",
      description: "Build scalable backend services using Node.js and SQLite.",
      requirements: [
        "Basic programming knowledge",
        "Interest in server-side development",
        "Understanding of databases",
        "Problem-solving mindset",
      ],
      responsibilities: [
        "Develop server-side applications",
        "Design and implement APIs",
        "Database management and optimization",
        "Ensure application security",
      ],
    },
    {
      id: "video",
      title: "Video Creator",
      type: "Full-time",
      location: "Remote",
      experience: "Freshers Training Candidates",
      salary: "Competitive",
      description: "Create educational videos on full-stack web development for YouTube and social platforms.",
      requirements: [
        "Creative mindset and storytelling skills",
        "Basic video editing knowledge",
        "Understanding of educational content",
        "Social media awareness",
      ],
      responsibilities: [
        "Produce high-quality video tutorials",
        "Script and storyboard content",
        "Edit and post-process videos",
        "Engage with online community",
      ],
    },
  ]

  const toggleJob = (jobId) => {
    setOpenJob(openJob === jobId ? null : jobId)
  }

  return (
    <section id="careers" className="careers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Join Our Team</h2>
          <p className="section-subtitle">Start your tech career with us - We provide training and mentorship</p>
        </div>

        <div className="careers-content">
          <div className="careers-intro">
            <div className="intro-card">
              <div className="intro-icon">🚀</div>
              <h3>Launch Your Career</h3>
              <p>
                We believe in nurturing talent from the ground up. Our positions are designed for fresh graduates and
                career changers who are passionate about technology.
              </p>
            </div>

            <div className="intro-card">
              <div className="intro-icon">🎓</div>
              <h3>Learn While You Work</h3>
              <p>
                Get hands-on experience while receiving mentorship from industry experts. We provide comprehensive
                training to help you succeed.
              </p>
            </div>

            <div className="intro-card">
              <div className="intro-icon">🌟</div>
              <h3>Grow With Us</h3>
              <p>
                Join a company that's growing rapidly and offers excellent opportunities for career advancement and
                skill development.
              </p>
            </div>
          </div>

          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.id} className={`job-card ${openJob === job.id ? "active" : ""}`}>
                <div className="job-header" onClick={() => toggleJob(job.id)}>
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-type">{job.type}</span>
                      <span className="job-location">📍 {job.location}</span>
                      <span className="job-salary">💰 {job.salary}</span>
                    </div>
                  </div>
                  <div className={`job-toggle ${openJob === job.id ? "active" : ""}`}>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className={`job-details ${openJob === job.id ? "open" : ""}`}>
                  <div className="job-description">
                    <h4>About the Role</h4>
                    <p>{job.description}</p>
                  </div>

                  <div className="job-requirements">
                    <h4>What We're Looking For</h4>
                    <ul>
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="job-responsibilities">
                    <h4>What You'll Do</h4>
                    <ul>
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="job-actions">
                    <a
                      href="https://forms.office.com/r/1bLLPpmVz2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Apply Now
                    </a>
                    <button className="btn btn-outline">Share Job</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers

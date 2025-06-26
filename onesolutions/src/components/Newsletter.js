"use client"

import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")
    }, 1500)
  }

  return (
    <section id="contact" className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Stay Updated with Latest Tech Trends</h2>
            <p>
              Get weekly insights, tutorials, and career tips delivered straight to your inbox. Join our community of
              tech enthusiasts and never miss an update!
            </p>
            <div className="newsletter-features">
              <div className="feature">
                <span className="feature-icon">📚</span>
                <span>Weekly tutorials</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💼</span>
                <span>Job opportunities</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎯</span>
                <span>Career tips</span>
              </div>
            </div>
          </div>

          <div className="newsletter-form-container">
            {!isSubscribed ? (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                  />
                  <button type="submit" className={`subscribe-btn ${isLoading ? "loading" : ""}`} disabled={isLoading}>
                    {isLoading ? <div className="loading-spinner"></div> : "Subscribe"}
                  </button>
                </div>
                <p className="form-note">No spam, unsubscribe at any time. We respect your privacy.</p>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Welcome to our community!</h3>
                <p>Check your email for a confirmation message.</p>
              </div>
            )}
          </div>
        </div>

        <div className="social-proof">
          <div className="social-stats">
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Newsletter Subscribers</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">YouTube Subscribers</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Instagram Followers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

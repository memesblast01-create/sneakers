import { useState } from 'react'

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="waitlist" id="waitlist">
      <div className="wrap waitlist__inner">
        <span className="eyebrow">Release — early access</span>
        <h2 className="headline waitlist__headline">
          Model 01 lands
          <br />
          before it ships.
        </h2>
        <p className="waitlist__sub">
          Waitlist members get first call on sizing and a first look at every
          colorway before public release.
        </p>

        {submitted ? (
          <p className="waitlist__confirm">
            You&rsquo;re on the list. We&rsquo;ll email {email} when sizing opens.
          </p>
        ) : (
          <form className="waitlist__form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="btn btn--solid">
              Join waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

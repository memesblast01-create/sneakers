export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a href="#top" className="nav__mark">
          OUTSOLE<span className="nav__mark-dot">.</span>
        </a>
        <nav className="nav__links">
          <a href="#anatomy">Anatomy</a>
          <a href="#colorways">Colorways</a>
          <a href="#materials">Materials</a>
        </nav>
        <a href="#waitlist" className="nav__cta">
          Get early access
        </a>
      </div>
    </header>
  )
}

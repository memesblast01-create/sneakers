import { motion } from 'framer-motion'
import Viewer from './Viewer.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid wrap">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Model 01 — &quot;Vector&quot;</span>
          <h1 className="headline hero__headline">
            Built on
            <br />
            the last.
            <br />
            <span className="hero__headline-accent">Tested on the road.</span>
          </h1>
          <p className="hero__sub">
            Every OUTSOLE begins as a wooden last, shaped to the exact geometry of a
            stride in motion. Model 01 keeps that discipline — four millimetres of
            drop, zero grams wasted.
          </p>
          <div className="hero__actions">
            <a href="#waitlist" className="btn btn--solid">
              Join waitlist
            </a>
            <a href="#anatomy" className="btn btn--line">
              Explore the build
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__stage"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <Viewer interactive autoSpin={false} cameraPosition={[3.2, 1.3, 3.4]} />

          <svg className="hero__blueprint" viewBox="0 0 100 100" aria-hidden="true">
            <line x1="8" y1="88" x2="92" y2="88" />
            <line x1="8" y1="85" x2="8" y2="91" />
            <line x1="92" y1="85" x2="92" y2="91" />
            <text x="50" y="96" textAnchor="middle">
              312 MM
            </text>
          </svg>

          <span className="hero__drag-hint">Drag to rotate</span>
        </motion.div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              UPPER — MIDSOLE — OUTSOLE — TONGUE — HEEL COUNTER — LACE — EYELET —
              UPPER — MIDSOLE — OUTSOLE — TONGUE — HEEL COUNTER — LACE — EYELET —
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

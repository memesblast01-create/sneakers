import { motion } from 'framer-motion'
import Viewer from './Viewer.jsx'

const TICKER_WORDS = ['Upper', 'Midsole', 'Outsole', 'Tongue', 'Heel counter', 'Lace', 'Eyelet']

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
          <span className="eyebrow eyebrow--live">
            <span className="eyebrow__pulse" />
            Launching soon
          </span>
          <h1 className="headline hero__headline">
            Built on
            <br />
            the last.
            <br />
            <span className="hero__headline-accent">Tested on the road.</span>
          </h1>
          <p className="hero__sub">
            OUTSOLE is a new footwear label opening with a single shoe. Model 01,
            Vector: four millimetres of drop, zero grams wasted, and a build you
            can actually take apart and understand.
          </p>
          <div className="hero__actions">
            <a href="#waitlist" className="btn btn--solid">
              Get early access
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
          <div className="hero__glow" aria-hidden="true" />
          <Viewer interactive cameraPosition={[3.2, 1.3, 3.4]} />
        </motion.div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="hero__marquee-set">
              {TICKER_WORDS.map((word) => (
                <span key={word} className="hero__marquee-word">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

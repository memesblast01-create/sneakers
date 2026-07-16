import { useState } from 'react'
import { motion } from 'framer-motion'
import Viewer from './Viewer.jsx'

const PARTS = [
  {
    id: 'upper',
    label: 'Upper',
    rotation: 0.15,
    desc: 'Engineered knit, fused eyelets, zero-slip lockdown through the midfoot.',
    spec: 'WEIGHT 38G / PANELS 3',
  },
  {
    id: 'tongue',
    label: 'Tongue',
    rotation: 0.7,
    desc: 'Full gusset keeps trail debris out without adding bulk underfoot.',
    spec: 'FOAM 4MM / GUSSET FULL',
  },
  {
    id: 'midsole',
    label: 'Midsole',
    rotation: 1.65,
    desc: 'Compression-molded EVA, tuned for a 4mm heel-to-toe drop.',
    spec: 'DROP 4MM / DUROMETER 55C',
  },
  {
    id: 'outsole',
    label: 'Outsole',
    rotation: 2.5,
    desc: 'Carbon-rubber lugs at the high-wear zones only, foam everywhere else.',
    spec: 'LUG DEPTH 3MM / RUBBER 68A',
  },
  {
    id: 'heel',
    label: 'Heel counter',
    rotation: 3.5,
    desc: 'Internal TPU counter locks the heel without any external bulk.',
    spec: 'TPU 1.2MM / HEIGHT 62MM',
  },
]

const COLORWAYS = [
  { id: 'sample', label: 'As sampled', hex: '#ffffff', swatch: '#c9c2b4' },
  { id: 'concrete', label: 'Concrete', hex: '#b9b6ad', swatch: '#b9b6ad' },
  { id: 'blueprint', label: 'Blueprint', hex: '#3a5a80', swatch: '#3a5a80' },
  { id: 'safety', label: 'Safety orange', hex: '#ff5a1f', swatch: '#ff5a1f' },
  { id: 'graphite', label: 'Graphite', hex: '#3a3a3e', swatch: '#3a3a3e' },
  { id: 'bone', label: 'Bone', hex: '#ede6d6', swatch: '#ede6d6' },
]

const MATERIALS = [
  {
    label: 'Engineered mesh',
    where: 'Upper, forefoot',
    detail:
      'A single-layer knit varies its density across the foot: open where the foot needs to breathe, tight where it needs to hold.',
  },
  {
    label: 'Compression EVA',
    where: 'Midsole, full length',
    detail:
      'Molded under heat and pressure rather than injected, so the cell structure stays consistent from heel to toe.',
  },
  {
    label: 'Carbon rubber',
    where: 'Outsole, contact zones',
    detail:
      'Placed only where the tread actually meets the ground, keeping the rest of the sole light.',
  },
]

export default function Studio() {
  const [activePart, setActivePart] = useState(0)
  const [activeColor, setActiveColor] = useState(COLORWAYS[0])

  return (
    <section className="studio" id="anatomy">
      <div className="wrap studio__grid">
        <div className="studio__stage">
          <Viewer
            targetRotationY={PARTS[activePart].rotation}
            tint={activeColor.hex}
            cameraPosition={[2.9, 1.15, 2.9]}
          />
          <span className="studio__stage-tag eyebrow">{COLORWAYS.find((c) => c.id === activeColor.id)?.label}</span>
        </div>

        <div className="studio__panels">
          <div className="studio__block">
            <span className="eyebrow">01 Anatomy</span>
            <h2 className="headline studio__title">Take it apart.</h2>
            <ul className="parts">
              {PARTS.map((part, i) => (
                <li key={part.id}>
                  <button
                    className={`parts__row ${i === activePart ? 'is-active' : ''}`}
                    onClick={() => setActivePart(i)}
                    aria-pressed={i === activePart}
                  >
                    <span className="parts__index">{String(i + 1).padStart(2, '0')}</span>
                    <span className="parts__label">{part.label}</span>
                    <span className="parts__spec">{part.spec}</span>
                  </button>
                  {i === activePart && (
                    <motion.p
                      className="parts__desc"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {part.desc}
                    </motion.p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="studio__block" id="colorways">
            <span className="eyebrow">02 Colorways</span>
            <h2 className="headline studio__title">Pick a finish.</h2>
            <div className="swatches">
              {COLORWAYS.map((c) => (
                <button
                  key={c.id}
                  className={`swatches__chip ${c.id === activeColor.id ? 'is-active' : ''}`}
                  style={{ '--chip': c.swatch }}
                  onClick={() => setActiveColor(c)}
                  aria-pressed={c.id === activeColor.id}
                >
                  <span className="swatches__dot" />
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="studio__block" id="materials">
            <span className="eyebrow">03 Materials</span>
            <h2 className="headline studio__title">What it's made of.</h2>
            <div className="materials">
              {MATERIALS.map((m) => (
                <div className="materials__card" key={m.label}>
                  <span className="materials__where eyebrow">{m.where}</span>
                  <h3>{m.label}</h3>
                  <p>{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

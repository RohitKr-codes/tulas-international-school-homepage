import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-orbit hero-orbit--one" />
      <div className="hero-orbit hero-orbit--two" />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <span className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> Dehradun · India · Since 2012</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9, delay: .08, ease: [0.22,1,0.36,1] }}
          >
            Where learning<br />
            <em>becomes a life.</em>
          </motion.h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .22 }}
          >
            A modern gurukul where academic excellence, character and curiosity meet — and every student gets room to discover what comes next.
          </motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .38 }}>
            <Button href="#contact">Explore admissions</Button>
            <a className="text-link text-link--light" href="#experience" data-cursor="hover">
              Discover TIS <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="hero-meta">
            <span>CBSE · IV–XII</span>
            <span>Boarding + Day School</span>
          </div>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 25 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: .2 }}>
          <div className="visual-frame">
            <div className="visual-sun" />
            <div className="mountain mountain--back" />
            <div className="mountain mountain--front" />
            <div className="campus-building">
              <div className="building-roof" />
              <div className="building-body">
                {Array.from({ length: 15 }).map((_, i) => <span key={i} />)}
              </div>
            </div>
            <div className="visual-label">
              <span>THE MODERN GURUKUL</span>
              <strong>Learning in motion.</strong>
            </div>
            <div className="visual-play"><Play size={16} fill="currentColor" /></div>
          </div>

          <div className="floating-card floating-card--top">
            <span>22 acres</span>
            <small>of open possibility</small>
          </div>
          <div className="floating-card floating-card--bottom">
            <span>16+</span>
            <small>Olympic sports</small>
          </div>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to discover TIS">
        <span>Scroll to discover</span><ArrowDown size={16} />
      </a>
    </section>
  );
}

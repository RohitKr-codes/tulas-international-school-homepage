import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../../data/siteData";
import Reveal from "../ui/Reveal";

export default function Voices() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const change = (direction) => {
    setIndex((value) => (value + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section voices">
      <div className="shell">
        <div className="voices-top">
          <Reveal><span className="eyebrow">05 — Voices</span></Reveal>
          <Reveal delay={.08}><span className="section-index">Community stories</span></Reveal>
        </div>

        <div className="quote-layout">
          <Reveal className="quote-mark"><Quote size={48} strokeWidth={1.2} /></Reveal>
          <div className="quote-content">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: .42 }}
              >
                “{current.quote}”
              </motion.blockquote>
            </AnimatePresence>
            <div className="quote-author">
              <div><strong>{current.author}</strong><span>{current.meta}</span></div>
              <div className="slider-controls">
                <button onClick={() => change(-1)} aria-label="Previous testimonial" data-cursor="hover"><ArrowLeft size={17} /></button>
                <span>{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
                <button onClick={() => change(1)} aria-label="Next testimonial" data-cursor="hover"><ArrowRight size={17} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

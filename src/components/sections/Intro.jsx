import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function Intro() {
  return (
    <section className="section intro" id="about">
      <div className="shell">
        <div className="intro-top">
          <Reveal><span className="eyebrow">01 — The TIS approach</span></Reveal>
          <Reveal delay={.08}><span className="section-index">01 / 07</span></Reveal>
        </div>

        <Reveal className="intro-statement" delay={.12}>
          <h2>School should feel less like a checklist and more like <em>an invitation.</em></h2>
        </Reveal>

        <div className="intro-bottom">
          <Reveal delay={.15}>
            <p className="lead-copy">Tulas International School blends a CBSE academic foundation with experiences designed to help students become confident, curious and capable global citizens.</p>
          </Reveal>
          <Reveal delay={.22}>
            <a className="arrow-link" href="https://tis.edu.in/about-tis/vision-mission/" target="_blank" rel="noreferrer" data-cursor="hover">
              Our vision & mission <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Compass, HeartHandshake, Sparkles } from "lucide-react";
import { values } from "../../data/siteData";
import Reveal from "../ui/Reveal";

const icons = [Compass, HeartHandshake, Sparkles];

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="shell">
        <div className="section-heading">
          <Reveal><span className="eyebrow">02 — Beyond the classroom</span></Reveal>
          <Reveal delay={.08}><h2>Three things we<br /><em>make space for.</em></h2></Reveal>
          <Reveal delay={.14}><p>Because the most important learning does not always happen at a desk.</p></Reveal>
        </div>

        <div className="value-grid">
          {values.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.number} delay={index * .08} className="value-card">
                <div className="value-card-top">
                  <span>{item.number}</span>
                  <Icon size={23} strokeWidth={1.6} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contact" aria-label={`Learn more about ${item.title}`} data-cursor="hover"><ArrowUpRight size={18} /></a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

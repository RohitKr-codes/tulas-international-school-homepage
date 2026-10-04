import { MoveUpRight } from "lucide-react";
import { sports } from "../../data/siteData";
import Reveal from "../ui/Reveal";

export default function Life() {
  return (
    <section className="section life" id="life">
      <div className="shell">
        <div className="life-heading">
          <Reveal><span className="eyebrow">04 — Campus life</span></Reveal>
          <Reveal delay={.08}><h2>Find your <em>edge.</em></h2></Reveal>
          <Reveal delay={.14}><p>Sports, arts, leadership, friendships and the little moments that make school feel like your own.</p></Reveal>
        </div>

        <div className="life-stage">
          <Reveal className="life-art">
            <div className="life-gradient" />
            <div className="sun-disc" />
            <div className="field-lines" />
            <div className="runner">
              <span className="runner-head" />
              <span className="runner-body" />
              <span className="runner-arm runner-arm--a" />
              <span className="runner-arm runner-arm--b" />
              <span className="runner-leg runner-leg--a" />
              <span className="runner-leg runner-leg--b" />
            </div>
            <div className="art-caption">
              <span>MOVE / PLAY / LEAD</span>
              <strong>16+ sports.<br />One big playground.</strong>
            </div>
          </Reveal>

          <div className="sports-list">
            {sports.map((sport, index) => (
              <Reveal key={sport} delay={index * .035}>
                <a href="#contact" className="sport-row" data-cursor="hover">
                  <span>0{index + 1}</span>
                  <strong>{sport}</strong>
                  <MoveUpRight size={18} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

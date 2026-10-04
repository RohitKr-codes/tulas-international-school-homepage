import { ArrowUpRight, BookOpen, BrainCircuit, FlaskConical, MonitorSmartphone } from "lucide-react";
import Reveal from "../ui/Reveal";

const pillars = [
  { icon: BrainCircuit, title: "Reason & analyse", text: "A skill-led CBSE journey that values thinking over rote memorisation." },
  { icon: FlaskConical, title: "Learn by doing", text: "Projects, labs, quests and real-world experiences turn concepts into capability." },
  { icon: MonitorSmartphone, title: "Digital advantage", text: "Technology-supported classrooms and digital tools extend learning beyond the timetable." },
  { icon: BookOpen, title: "Prepare for tomorrow", text: "From Olympiads to competitive-exam pathways, students can pursue ambitious goals." }
];

export default function Academics() {
  return (
    <section className="section academics" id="academics">
      <div className="shell">
        <div className="academics-header">
          <Reveal><span className="eyebrow">03 — Academics</span></Reveal>
          <Reveal delay={.08}><h2>Think deeply.<br /><em>Build boldly.</em></h2></Reveal>
          <Reveal delay={.14}>
            <a className="arrow-link" href="https://tis.edu.in/academics/affilation/" target="_blank" rel="noreferrer" data-cursor="hover">
              Explore curriculum <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>

        <div className="academic-grid">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * .06} className="academic-card">
                <div className="icon-tile"><Icon size={23} /></div>
                <span className="card-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

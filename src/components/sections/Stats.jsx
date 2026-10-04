import Reveal from "../ui/Reveal";
import { stats } from "../../data/siteData";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="shell stats-grid">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * .06} className="stat-item">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

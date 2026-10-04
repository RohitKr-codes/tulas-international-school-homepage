import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, Phone } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", grade: "Class IV–IX", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`TIS admission enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nGrade: ${form.grade}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@tis.edu.in?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="cta-section" id="contact">
      <div className="shell cta-grid">
        <div className="cta-copy">
          <Reveal><span className="eyebrow eyebrow--light">06 — Admissions</span></Reveal>
          <Reveal delay={.08}><h2>Ready to see<br /><em>what's possible?</em></h2></Reveal>
          <Reveal delay={.14}><p>Start a conversation with the TIS admissions team. Ask a question, request information or plan a campus visit.</p></Reveal>

          <Reveal delay={.2} className="contact-stack">
            <a href="tel:+919837983791" data-cursor="hover"><span><Phone size={17} /> Admission helpline</span><strong>+91 98379 83791</strong></a>
            <a href="mailto:info@tis.edu.in" data-cursor="hover"><span><Mail size={17} /> Email</span><strong>info@tis.edu.in</strong></a>
          </Reveal>
        </div>

        <Reveal className="enquiry-card" delay={.12}>
          <div className="form-heading">
            <span>ENQUIRE NOW</span>
            <strong>Let’s start with a question.</strong>
          </div>

          {sent && (
            <div className="form-success">
              <CheckCircle2 size={22} />
              <div><strong>Your enquiry is ready.</strong><span>Your email client should open with the details pre-filled.</span></div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label>Full name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
            <label>Grade<select value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })}><option>Class IV–IX</option><option>Class XI</option><option>Exploring options</option></select></label>
            <label>Message<textarea rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What would you like to know?" /></label>
            <button className="submit-button" type="submit" data-cursor="hover">Send enquiry <ArrowUpRight size={18} /></button>
          </form>

          <p className="privacy-note">This demo uses your default email client; no form data is stored by this website.</p>
        </Reveal>
      </div>
    </section>
  );
}

import { ArrowUpRight, Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-top">
        <div>
          <span className="eyebrow">Tulas International School</span>
          <h2>Build a future<br /><em>worth belonging to.</em></h2>
        </div>
        <a className="footer-big-link" href="#contact" data-cursor="hover">Start a conversation <ArrowUpRight /></a>
      </div>

      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src="/logo.svg" alt="Tulas International School" />
          <p>Dhoolkot, P.O. Selaqui,<br />Chakrata Road, Dehradun, Uttarakhand 248011</p>
        </div>

        <div className="footer-column">
          <span>Explore</span>
          <a href="#about">About TIS</a>
          <a href="#academics">Academics</a>
          <a href="#life">Campus life</a>
          <a href="#contact">Admissions</a>
        </div>

        <div className="footer-column">
          <span>Contact</span>
          <a href="tel:+919837983791"><Phone size={15} /> +91 98379 83791</a>
          <a href="mailto:info@tis.edu.in"><Mail size={15} /> info@tis.edu.in</a>
        </div>

        <div className="footer-column">
          <span>Follow</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook size={15} /> Facebook</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Tulas International School. Redesign concept.</span>
        <span>Designed & engineered with React + Framer Motion.</span>
      </div>
    </footer>
  );
}

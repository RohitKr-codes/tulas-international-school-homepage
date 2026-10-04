import { ArrowUpRight } from "lucide-react";

export default function Button({ href, children, variant = "primary", external = false, onClick }) {
  return (
    <a
      className={`button button--${variant}`}
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      data-cursor="hover"
    >
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={2.2} />
    </a>
  );
}

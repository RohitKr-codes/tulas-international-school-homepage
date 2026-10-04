import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  useEffect(() => {
    if (!enabled) return undefined;
    const enter = () => document.body.classList.add("cursor-hover");
    const leave = () => document.body.classList.remove("cursor-hover");
    const interactive = document.querySelectorAll("a, button, [data-cursor='hover']");
    interactive.forEach((element) => {
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointerleave", leave);
    });
    return () => {
      interactive.forEach((element) => {
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointerleave", leave);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div className="custom-cursor" style={{ left: springX, top: springY }} aria-hidden="true">
      <span />
    </motion.div>
  );
}

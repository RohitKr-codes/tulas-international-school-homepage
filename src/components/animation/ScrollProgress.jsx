import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.15 });

  return <motion.div className="scroll-progress" style={{ scaleX, transformOrigin: "0% 50%" }} aria-hidden="true" />;
}

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 100, stiffness: 300, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [-5, 5]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [5, -5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();

      mouseX.set((clientX - left) / width);
      mouseY.set((clientY - top) / height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const textVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 + 3.5, duration: 1, ease: "easeOut" }, // <-- FIX IS HERE
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <motion.div
        ref={heroRef}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        className="h-full w-full flex items-center justify-center"
      >
        <motion.div
          className="fluid-orb"
          style={{
            x: useTransform(smoothMouseX, [0, 1], [-200, 200]),
            y: useTransform(smoothMouseY, [0, 1], [-200, 200]),
          }}
        />
        <div className="hero-text-content text-center">
          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            DESIGN
            <br />
            THE FUTURE
          </h1>
        </div>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center mt-[22rem] md:mt-[25rem]">
          <motion.p
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Delhi's premier institute for Digital Marketing, Graphic Design, and
            Video Editing.
          </motion.p>
          <motion.div
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 pointer-events-auto"
          >
            <Button asChild className="btn-hero group">
              <Link to="/courses">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

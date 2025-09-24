import { motion } from "framer-motion";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CourseCards from "@/components/CourseCards";
import About from "@/components/About";
import UpcomingBatches from "@/components/UpcomingBatches";
import Testimonials from "@/components/Testimonials";
import CallNow from "@/components/CallNow";
import Footer from "@/components/Footer";

// A wrapper for scroll animations
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AnimatedSection>
          <CourseCards />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <UpcomingBatches />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <CallNow />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

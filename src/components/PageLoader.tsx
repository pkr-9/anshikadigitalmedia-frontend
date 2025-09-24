import { motion, type Variants } from "framer-motion";

const loaderVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 1.5,
    },
  },
};

const logoVariants: Variants = {
  // <-- FIX IS HERE
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2,
    },
  },
};

const PageLoader = () => {
  return (
    <motion.div
      id="page-loader"
      variants={loaderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={logoVariants} className="inline-block">
        <img
          src="/logo.png"
          alt="Anshika Digital Media Logo"
          className="h-20 w-auto animate-pulse-glow"
        />
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;

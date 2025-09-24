import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Providers and Components
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageLoader from "./components/PageLoader";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";
import DigitalMarketingCoursePage from "./pages/DigitalMarketingCourse";
import NotFound from "./pages/NotFound";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loader will show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route
              path="/digital-marketing-course"
              element={<DigitalMarketingCoursePage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </TooltipProvider>
  );
};

export default App;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallNow from "@/components/CallNow";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const DigitalMarketingCoursePage = () => {
  const modules = [
    "Intro to Digital Marketing",
    "Website Design & Development",
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click (PPC)",
    "Social Media Marketing",
    "Email Marketing",
    "Content Marketing",
    "Analytics & Data",
    "Conversion Rate Optimization",
    "Affiliate Marketing",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center text-white bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
              Digital Marketing Mastery
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Master SEO, Social Media, PPC, and Analytics to become a certified
              digital marketer and drive online growth.
            </p>
            <Button className="btn-hero group">
              Enroll in Course
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-display">
                What You'll Learn
              </h2>
              <p className="text-muted-foreground text-lg">
                Our curriculum is designed to make you a complete digital
                marketer. From strategy to execution, you'll gain hands-on
                experience with the tools and techniques that matter.
              </p>
              <ul className="space-y-3">
                {modules.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glow p-8">
              <h3 className="text-2xl font-bold mb-4">Course Highlights</h3>
              <ul className="space-y-4">
                <li className="font-semibold">
                  <strong>Duration:</strong> 4 Months
                </li>
                <li className="font-semibold">
                  <strong>Projects:</strong> 10+ Live Projects
                </li>
                <li className="font-semibold">
                  <strong>Support:</strong> 100% Placement Assistance
                </li>
                <li className="font-semibold">
                  <strong>Tools:</strong> Google Analytics, SEMrush, Ahrefs &
                  more
                </li>
              </ul>
              <Button className="btn-secondary w-full mt-6">
                Download Syllabus
              </Button>
            </div>
          </div>
        </section>
      </main>
      <CallNow />
      <Footer />
    </div>
  );
};

export default DigitalMarketingCoursePage;

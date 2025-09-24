import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const students = [
  {
    name: "Sunil Kumar",
    software: "Photoshop, Illustrator",
    image: "/Sunil.webp",
    portfolioUrl: "#",
  },
  {
    name: "Raj Mehra",
    software: "After Effects, Premiere Pro",
    image: "/Rajnish.webp",
    portfolioUrl: "#",
  },
  {
    name: "Pooja Singh",
    software: "CorelDraw, Photoshop",
    image: "/Pooja.webp",
    portfolioUrl: "#",
  },
  {
    name: "Aman",
    software: "Illustrator, After Effects",
    image: "/Aman.webp",
    portfolioUrl: "#",
  },
  {
    name: "Mansi",
    software: "Figma, Photoshop",
    image: "/mansi.webp",
    portfolioUrl: "#",
  },
  {
    name: "Hemant",
    software: "Premiere Pro, Illustrator",
    image: "/Hemant.webp",
    portfolioUrl: "#",
  },
  {
    name: "Abhishek",
    software: "Photoshop, Illustrator",
    image: "/abhishek.webp",
    portfolioUrl: "#",
  },
  {
    name: "Sushmita",
    software: "CorelDraw, Figma",
    image: "/sushmita.webp",
    portfolioUrl: "#",
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <section className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
              Student <span className="text-gradient">Creations</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the amazing work and creative projects accomplished by our
              talented students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {students.map((student, index) => (
              <Card
                key={index}
                className="card-modern group text-center overflow-hidden"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full border-4 border-primary/20 overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                    {/* Using <img> tag as Next.js <Image> is not available */}
                    <img
                      src={student.image}
                      alt={student.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {student.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {student.software}
                    </p>
                  </div>
                  <Button asChild className="btn-secondary w-full">
                    <Link to={student.portfolioUrl}>View Portfolio</Link>
                  </Button>
                  <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" /> 345 views
                    </span>
                    <Share2 className="w-4 h-4 cursor-pointer hover:text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;

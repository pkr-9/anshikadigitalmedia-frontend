"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);

  const courses = [
    {
      name: "Digital Marketing",
      href: "/digital-marketing",
      icon: "📱",
      color: "text-primary",
    },
    {
      name: "Graphic Design",
      href: "/graphic-design",
      icon: "🎨",
      color: "text-secondary",
    },
    {
      name: "Video Editing",
      href: "/video-editing",
      icon: "🎬",
      color: "text-accent",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative h-12 w-32 flex items-center">
              {/* Your logo is now the main element */}
              <img
                src="/logo.png"
                alt="Anshika Digital Media Logo"
                className="relative z-10 h-full w-auto"
              />
              {/* This div creates the blur effect behind the logo */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleCourses}
                className="flex items-center text-foreground hover:text-primary transition-colors font-medium"
              >
                Courses
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-lg rounded-2xl shadow-floating border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="p-4 space-y-2">
                  {courses.map((course) => (
                    <Link
                      key={course.name}
                      to={course.href}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group/item"
                    >
                      <span className="text-2xl">{course.icon}</span>
                      <div>
                        <div
                          className={`font-medium ${course.color} group-hover/item:text-primary`}
                        >
                          {course.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Master the skills
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="btn-hero">Enroll Now ✨</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-border/50 mt-4">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Courses */}
            <div>
              <button
                onClick={toggleCourses}
                className="flex items-center w-full text-foreground hover:text-primary transition-colors font-medium"
              >
                Courses
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isCoursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`mt-2 ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                  isCoursesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {courses.map((course) => (
                  <Link
                    key={course.name}
                    to={course.href}
                    className="flex items-center space-x-2 p-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{course.icon}</span>
                    <span>{course.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <Button
              className="btn-hero w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now ✨
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

'use client';

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Star, Zap } from 'lucide-react';

const CourseCards = () => {
  const courses = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      subtitle: 'Master Online Growth',
      description: 'Learn SEO, Social Media, PPC, Email Marketing, and Analytics to become a certified digital marketer.',
      icon: '📱',
      gradient: 'from-primary to-primary-glow',
      duration: '4 Months',
      students: '800+',
      rating: '4.9',
      features: ['SEO & SEM', 'Social Media Marketing', 'Google Analytics', 'Content Strategy'],
      price: '₹25,000',
      href: '/digital-marketing-course'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      subtitle: 'Create Visual Magic',
      description: 'Master Photoshop, Illustrator, CorelDraw, and design principles to create stunning visuals.',
      icon: '🎨',
      gradient: 'from-secondary to-accent',
      duration: '3 Months',
      students: '650+',
      rating: '4.8',
      features: ['Adobe Creative Suite', 'Logo Design', 'Print Design', 'UI/UX Basics'],
      price: '₹20,000',
      href: '/graphic-design'
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      subtitle: 'Bring Stories to Life',
      description: 'Learn Premiere Pro, After Effects, and motion graphics to create professional videos.',
      icon: '🎬',
      gradient: 'from-accent to-secondary',
      duration: '3 Months',
      students: '500+',
      rating: '4.9',
      features: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading'],
      price: '₹22,000',
      href: '/video-editing'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-secondary rounded-full text-secondary-foreground text-sm font-medium shadow-card">
            <Zap className="w-4 h-4 mr-2" />
            Popular Courses
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Choose Your{' '}
            <span className="text-gradient">Creative Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-focused courses designed to get you job-ready with practical skills and real projects.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`card-glow p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Course Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${course.gradient} rounded-2xl text-white text-2xl mb-4 shadow-glow group-hover:scale-110 transition-transform`}>
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-primary font-semibold">
                  {course.subtitle}
                </p>
              </div>

              {/* Course Info */}
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground text-center">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Star className="w-4 h-4 mr-1 fill-accent text-accent" />
                    {course.rating}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">What You'll Learn:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="border-t border-border/50 pt-6 space-y-4">
                <div className="text-center">
                  <span className="text-2xl font-bold text-gradient">{course.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">Complete Course</span>
                </div>
                
                <Link to={course.href} className="block">
                  <Button className="w-full btn-secondary group">
                    Explore Course
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/enroll-form" className="block">
                  <Button variant="outline" className="w-full btn-outline">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Not sure which course to choose?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get personalized career guidance from our experts
            </p>
            <Button className="btn-hero">
              Get Free Counselling ✨
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCards;
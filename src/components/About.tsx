'use client';

import { Button } from '@/components/ui/button';
import { Target, Users, Award, Lightbulb, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Industry-Focused',
      description: 'Curriculum designed with industry leaders to match current market demands.',
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from professionals with 10+ years of experience in their fields.',
    },
    {
      icon: Award,
      title: '100% Placement',
      description: 'Guaranteed job placement support with our extensive industry network.',
    },
    {
      icon: Lightbulb,
      title: 'Hands-on Learning',
      description: 'Work on real projects and build a portfolio that impresses employers.',
    },
  ];

  const achievements = [
    { label: 'Years of Excellence', value: '8+' },
    { label: 'Students Trained', value: '2000+' },
    { label: 'Placement Rate', value: '95%' },
    { label: 'Industry Partners', value: '50+' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium shadow-glow">
                🏆 About Anshika Digital
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
                Transforming{' '}
                <span className="text-gradient">Careers</span>
                <br />
                Since 2016
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just another training institute. We're a community of creators, marketers, 
                and visionaries dedicated to bridging the gap between education and industry needs.
              </p>
              
              <p className="text-muted-foreground">
                Our mission is simple: provide world-class digital skills training that gets you 
                hired. With 95% placement success rate and partnerships with leading companies, 
                we've helped over 2000 students launch successful careers.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-hero group">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-modern p-6 group animate-slide-in-right"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="card-glow p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Ready to Join Delhi's Most Trusted Digital Institute?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait for opportunities to come to you. Create them with skills that matter 
              in today's digital world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="btn-hero">
                Start Your Journey Today ✨
              </Button>
              <Button variant="outline" className="btn-outline">
                Book Free Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
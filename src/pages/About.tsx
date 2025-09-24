import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Target, Users, Award, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence in Education',
      description: 'We maintain the highest standards in digital education with industry-relevant curriculum.',
    },
    {
      icon: Users,
      title: 'Student-Centric Approach',
      description: 'Every student receives personalized attention and career guidance.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Our courses are recognized by leading companies and industry bodies.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'We foster creative thinking and innovative problem-solving skills.',
    },
  ];

  const milestones = [
    { year: '2016', event: 'Founded Anshika Digital Media' },
    { year: '2018', event: 'Reached 500+ student milestone' },
    { year: '2020', event: 'Launched online learning platform' },
    { year: '2022', event: 'Expanded to video editing courses' },
    { year: '2024', event: '2000+ successful placements' },
  ];

  const features = [
    'Industry-expert instructors',
    'Hands-on project experience',
    '100% placement assistance',
    'Modern learning facilities',
    'Flexible class timings',
    'Certificate programs',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground text-sm font-medium shadow-glow">
              🏆 About Anshika Digital
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
              Transforming{' '}
              <span className="text-gradient">Digital Dreams</span>
              <br />
              Into Reality
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 2016, we've been Delhi's premier destination for digital skills training, 
              helping students build successful careers in the digital economy.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To democratize digital education and bridge the gap between academic learning 
                  and industry requirements. We believe everyone deserves access to world-class 
                  digital skills training that leads to meaningful career opportunities.
                </p>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={feature} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glow p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Journey</h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex items-start space-x-4 animate-slide-in-right" style={{ animationDelay: `${index * 0.15}s` }}>
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-glow">
                        {milestone.year}
                      </div>
                      <div className="flex-1 pt-3">
                        <p className="text-foreground font-medium">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
                Our{' '}
                <span className="text-gradient">Core Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that drive everything we do and shape our approach to education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-modern p-6 text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="space-y-8 mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
                Meet Our{' '}
                <span className="text-gradient">Expert Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn from industry professionals with years of real-world experience.
              </p>
            </div>

            <div className="card-glow p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Ready to Start Your Digital Journey?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of successful graduates who have transformed their careers with us.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-hero">
                  Enroll Now ✨
                </Button>
                <Button variant="outline" className="btn-outline">
                  Book Free Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
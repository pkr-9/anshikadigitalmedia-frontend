import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 85952 01835',
      action: 'tel:+918595201835',
      color: 'text-primary',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@anshika.digital',
      action: 'mailto:info@anshika.digital',
      color: 'text-secondary',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'F-76, Near Saket Metro Station Gate 2, New Delhi 110030',
      action: '#',
      color: 'text-accent',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 7:00 PM',
      action: '#',
      color: 'text-primary',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-secondary rounded-full text-secondary-foreground text-sm font-medium shadow-card">
              📞 Contact Us
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
              Get In{' '}
              <span className="text-gradient">Touch</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your digital journey? We're here to help you choose the right path 
              and answer all your questions.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="card-modern p-6 text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {info.details}
                  </p>
                  {info.action !== '#' && (
                    <a
                      href={info.action}
                      className="inline-block mt-3 text-primary hover:text-primary-glow transition-colors text-sm font-medium"
                    >
                      Contact Now
                    </a>
                  )}
                </Card>
              ))}
            </div>

            {/* Contact Form & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card-glow p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+91 9876543210" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Course Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground">
                      <option value="">Select a course</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="video-editing">Video Editing</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your goals and how we can help you..."
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="btn-hero w-full group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                <div className="card-modern p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Visit Our Campus
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Come see our modern facilities and meet our team in person. 
                    We're conveniently located near Saket Metro Station.
                  </p>
                  
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.311711179948!2d77.2002685!3d28.5206107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzE0LjIiTiA3N8KwMTInMDAuOSJF!5e0!3m2!1sen!2sin!4v1694599461182!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="border-0"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="card-modern p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Quick Support
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      <span className="text-muted-foreground">Support team online</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Need immediate assistance? Call us or send a WhatsApp message 
                      for instant support.
                    </p>
                    <Button variant="outline" className="btn-outline w-full">
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-8">
              Frequently Asked{' '}
              <span className="text-gradient">Questions</span>
            </h2>
            
            <div className="card-glow p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our admissions team is ready to help you find the perfect course 
                and answer any questions you might have.
              </p>
              <Button className="btn-hero">
                Schedule a Call ✨
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
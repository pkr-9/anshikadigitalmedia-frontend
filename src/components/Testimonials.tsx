import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Anshika Digital Media is the ultimate solution for learning the best creative skills. I absolutely love the hands-on projects!",
    name: "Aditi Sharma",
    title: "Graphic Designer",
  },
  {
    quote:
      "A very versatile institute… My go-to for everything related to digital marketing. The instructors are industry experts.",
    name: "Manish Verma",
    title: "Marketing Professional",
  },
  {
    quote:
      "Easy to learn and great for inspiration. The placement support is genuine and helped me land my first job.",
    name: "Sneha Kapoor",
    title: "Content Creator",
  },
  {
    quote:
      "The video editing course was fantastic. The curriculum is up-to-date, and the mentors are always there to help.",
    name: "Rahul Mehta",
    title: "Video Editor",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Words That <span className="text-gradient">Inspire Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our students who trusted us to build their
            creative careers.
          </p>
        </div>

        <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="card-glow p-8 md:p-12">
                    <CardContent className="flex flex-col items-center justify-center p-0 text-center space-y-6">
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-primary">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;

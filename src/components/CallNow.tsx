import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CallNow = () => {
  return (
    <section className="py-12 px-4 bg-muted">
      <div className="max-w-5xl mx-auto">
        <div className="card-glow p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Let's Talk About Your{" "}
              <span className="text-gradient">Career</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Speak with our career counsellors and unlock your path to becoming
              a creative professional.
            </p>
          </div>
          <Link to="tel:+918595201835">
            <Button className="btn-hero mt-4 md:mt-0 flex-shrink-0">
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallNow;

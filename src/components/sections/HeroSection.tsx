import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, Clock, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Warm radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(38_90%_44%_/_0.06),_transparent_70%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 font-body text-sm"
          >
            <Palette className="w-3.5 h-3.5 mr-1.5" />
            8 art styles. Your actual pet, not a generic breed.
          </Badge>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.1]">
            They're not just a pet.{" "}
            <span className="text-primary">Give them art that proves it.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Upload a photo. Pick a style. Get a frame-worthy portrait of{" "}
            <em>your</em> pet in 60 seconds — not a generic breed, but the face
            you actually love.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link to="/signup">
              <Button
                size="lg"
                className="font-body text-base px-8 py-6 bg-primary hover:bg-amber-700 text-primary-foreground shadow-lg shadow-amber-600/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Create your pet's portrait — it's free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="#styles">
              <Button
                variant="outline"
                size="lg"
                className="font-body text-base px-8 py-6 border-border hover:bg-muted"
              >
                See all styles
              </Button>
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm font-body text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              Ready in 60 seconds
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Print-ready quality
            </span>
            <span>No credit card required</span>
          </div>
        </div>

        {/* Before/After with REAL image */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="relative portrait-frame-gold gallery-hover rounded-lg overflow-hidden">
            <img
              src="/images/hero-before-after.png"
              alt="Before and after: a golden retriever photo transformed into a Renaissance oil painting portrait"
              className="w-full h-auto"
              loading="eager"
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between max-w-4xl mx-auto mt-4 px-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground/40" />
              <span className="font-body text-sm text-muted-foreground">
                Your favorite photo
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span className="font-body text-sm text-primary font-medium">
                Frame-worthy masterpiece
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

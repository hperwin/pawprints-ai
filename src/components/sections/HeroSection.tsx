import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Palette, Clock, Sparkles } from "lucide-react";

const styles = [
  { label: "Watercolor", emoji: "💧", color: "bg-sky-100 text-sky-800" },
  { label: "Renaissance", emoji: "🎨", color: "bg-amber-100 text-amber-800" },
  { label: "Oil Painting", emoji: "🖼️", color: "bg-orange-100 text-orange-800" },
  { label: "Pop Art", emoji: "🌈", color: "bg-pink-100 text-pink-800" },
  { label: "Cartoon", emoji: "✏️", color: "bg-green-100 text-green-800" },
  { label: "Anime", emoji: "✨", color: "bg-purple-100 text-purple-800" },
  { label: "Memorial", emoji: "🕊️", color: "bg-slate-100 text-slate-700" },
  { label: "Impressionist", emoji: "🌻", color: "bg-yellow-100 text-yellow-800" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle warm radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(38_90%_44%_/_0.06),_transparent_70%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
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
                className="font-body text-base px-8 py-6 bg-primary hover:bg-amber-700 text-primary-foreground shadow-lg shadow-amber-600/20"
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
                See all 8 styles
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

        {/* Before/After Visual */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Before — pet photo */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 p-8">
                <span className="text-6xl">🐕</span>
                <span className="font-body text-sm text-muted-foreground">
                  Your favorite photo
                </span>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full px-3 py-1">
                <span className="font-body text-xs text-muted-foreground">
                  Before
                </span>
              </div>
            </div>

            {/* After — portrait */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-amber-50 border border-amber-200 flex flex-col items-center justify-center gap-3 p-8 shadow-lg shadow-amber-600/10">
                <span className="text-6xl">🖼️</span>
                <span className="font-body text-sm text-amber-700 font-medium">
                  Frame-worthy masterpiece
                </span>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-3 py-1">
                <span className="font-body text-xs font-medium">After</span>
              </div>
            </div>
          </div>

          {/* Style tags below */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {styles.map((style) => (
              <span
                key={style.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-body font-medium ${style.color}`}
              >
                {style.emoji} {style.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

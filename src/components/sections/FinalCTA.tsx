import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Warm background */}
      <div className="absolute inset-0 bg-amber-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38_90%_44%_/_0.08),_transparent_70%)]" />

      {/* Decorative portrait images — faded gallery feel */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-64 opacity-[0.08] rotate-[-8deg] hidden lg:block">
        <img
          src="/images/style-renaissance.png"
          alt=""
          className="w-full h-full object-cover rounded-lg"
          aria-hidden="true"
        />
      </div>
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-64 opacity-[0.08] rotate-[8deg] hidden lg:block">
        <img
          src="/images/style-watercolor.png"
          alt=""
          className="w-full h-full object-cover rounded-lg"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-6 relative text-center">
        <h2 className="font-display text-3xl md:text-5xl text-foreground max-w-2xl mx-auto leading-tight">
          They belong on the wall, not just on your camera roll.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-body max-w-md mx-auto">
          A custom portrait of your pet — the gift that gets framed, the art
          that starts conversations, the keepsake that lasts forever.
        </p>

        {/* Mini gallery of style thumbnails */}
        <div className="flex items-center justify-center gap-3 mt-10 mb-10">
          {[
            { src: "/images/style-renaissance.png", alt: "Renaissance style" },
            { src: "/images/style-watercolor.png", alt: "Watercolor style" },
            { src: "/images/style-pop-art.png", alt: "Pop art style" },
            { src: "/images/style-anime.png", alt: "Anime style" },
            { src: "/images/style-memorial.png", alt: "Memorial style" },
          ].map((img, i) => (
            <div
              key={i}
              className="w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden portrait-frame gallery-hover opacity-90 hover:opacity-100 transition-opacity"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div>
          <Link to="/signup">
            <Button
              size="lg"
              className="font-body text-base px-8 py-6 bg-primary hover:bg-amber-700 text-primary-foreground shadow-lg shadow-amber-600/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              Create your pet's portrait — it's free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <p className="mt-4 font-body text-sm text-muted-foreground">
            No credit card required. 8 styles. 60 seconds. Frame-worthy
            results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

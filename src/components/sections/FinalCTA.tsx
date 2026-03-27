import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Warm background tint */}
      <div className="absolute inset-0 bg-amber-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38_90%_44%_/_0.08),_transparent_70%)]" />

      <div className="container mx-auto px-6 relative text-center">
        <h2 className="font-display text-3xl md:text-5xl text-foreground max-w-2xl mx-auto leading-tight">
          They belong on the wall, not just on your camera roll.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-body max-w-md mx-auto">
          A custom portrait of your pet — the gift that gets framed, the art
          that starts conversations, the keepsake that lasts forever.
        </p>
        <div className="mt-10">
          <Link to="/signup">
            <Button
              size="lg"
              className="font-body text-base px-8 py-6 bg-primary hover:bg-amber-700 text-primary-foreground shadow-lg shadow-amber-600/20"
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

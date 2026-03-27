import { Palette, Download, Gift, PawPrint, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesBento = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Everything you need to give your pet the spotlight
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {/* Row 1: large + small */}
          <Card className="md:col-span-2 border border-border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <CardContent className="p-8 md:p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 mb-5">
                <Palette className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                5 art styles
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Renaissance, anime, superhero, watercolor, pop art. Each one hand-tuned to make your pet look incredible.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 mb-5">
                <Download className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                High-res downloads
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                2048x2048 minimum. Print it, frame it, hang it on the wall.
              </p>
            </CardContent>
          </Card>

          {/* Row 2: small + large */}
          <Card className="border border-border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 mb-5">
                <Gift className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                The perfect gift
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Birthday, holiday, or just because. A custom portrait of someone's pet is the gift that gets framed.
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 border border-border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <CardContent className="p-8 md:p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 mb-5">
                <PawPrint className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                Dogs, cats, and more
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Rabbits, birds, horses, hamsters — if you love it, we can paint it.
              </p>
            </CardContent>
          </Card>

          {/* Row 3: full width */}
          <Card className="md:col-span-3 border border-amber-200 bg-amber-50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <CardContent className="p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-200 mb-5">
                <Sparkles className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                New styles monthly
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Stained glass, mosaic, impressionist — we add new styles every month. Pro members get first access.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;

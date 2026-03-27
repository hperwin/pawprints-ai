import {
  Palette,
  Download,
  Gift,
  PawPrint,
  Sparkles,
  Heart,
} from "lucide-react";

const FeaturesBento = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Everything you need to give your pet the spotlight they deserve
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {/* Row 1: large with image + small */}
          <div className="md:col-span-2 gallery-card rounded-xl overflow-hidden border border-border bg-card">
            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:p-10 flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 mb-5">
                  <Palette className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  8 curated art styles
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Watercolor, renaissance, oil painting, pop art, cartoon, anime,
                  impressionist, and memorial. Each one tuned to make your pet
                  look incredible — not like a generic filter.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 gallery-hover">
                <img
                  src="/images/style-renaissance.png"
                  alt="Renaissance pet portrait example"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="gallery-card rounded-xl border border-border bg-card p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 mb-5">
              <Download className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">
              Print-ready downloads
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              2048x2048 minimum at 256 DPI. Frame it, hang it on the wall,
              give it as a gift. Not a phone filter — real art.
            </p>
          </div>

          {/* Row 2: small + large with image */}
          <div className="gallery-card rounded-xl border border-border bg-card p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 mb-5">
              <Gift className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">
              The perfect gift
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Birthday, Christmas, gotcha day, or "just because." A custom
              portrait of someone's pet is the gift that gets framed, not
              returned.
            </p>
          </div>

          <div className="md:col-span-2 gallery-card rounded-xl overflow-hidden border border-border bg-card">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="p-8 md:p-10 flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 mb-5">
                  <PawPrint className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  Dogs, cats, and every pet in between
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Rabbits, birds, horses, hamsters, ferrets — if you love them, we
                  can paint them. Best results with dogs and cats, but we've seen
                  some stunning bird portraits too.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 gallery-hover">
                <img
                  src="/images/style-watercolor.png"
                  alt="Watercolor pet portrait example"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Row 3: small + large accent */}
          <div className="gallery-card rounded-xl border border-border bg-card p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 mb-5">
              <Heart className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">
              Memorial portraits
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              A gentle tribute for pets who've crossed the rainbow bridge.
              Soft light, angel wings, and the peace they deserve.
            </p>
          </div>

          <div className="md:col-span-2 gallery-card rounded-xl overflow-hidden border border-amber-200 bg-amber-50">
            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:p-10 flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-200 mb-5">
                  <Sparkles className="w-6 h-6 text-amber-800" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  New styles every month
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed max-w-lg">
                  Stained glass, mosaic, line art, cyberpunk — we add new styles
                  regularly. Pro members get early access to every new drop.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 gallery-hover opacity-80">
                <img
                  src="/images/style-anime.png"
                  alt="Anime pet portrait example"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;

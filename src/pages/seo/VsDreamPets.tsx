import SEOPageLayout from "@/components/layout/SEOPageLayout";

const VsDreamPets = () => (
  <SEOPageLayout
    title="PawPrints AI vs DreamPets: Which AI Pet Portrait App Is Better?"
    description="Both are AI-powered pet portrait generators under $10/mo. But the quality, style options, and web experience differ. Here's an honest comparison."
  >
    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">AI Pet Portraits: Two Different Approaches</h2>
      <p>
        DreamPets is a mobile app with 300+ styles, mix-and-match outfits, and custom text prompts. PawPrints AI is a web-based studio with 8 curated styles designed for print-quality output, background selection, frame options, and a gallery-quality experience.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-body text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold">Feature</th>
              <th className="text-left py-3 pr-4 font-semibold">PawPrints AI</th>
              <th className="text-left py-3 font-semibold">DreamPets</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Price</td><td className="py-3 pr-4">$8.99/mo</td><td className="py-3">$6.99/mo</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Platform</td><td className="py-3 pr-4">Web (any device)</td><td className="py-3">Mobile app only</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Styles</td><td className="py-3 pr-4">8 curated, print-optimized</td><td className="py-3">300+ (quantity over quality)</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Print-ready output</td><td className="py-3 pr-4 text-primary font-medium">300 DPI, standard frame sizes</td><td className="py-3">Not optimized for print</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Background selection</td><td className="py-3 pr-4 text-primary font-medium">12+ curated backgrounds</td><td className="py-3">Mix-and-match scenes</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Frame options</td><td className="py-3 pr-4 text-primary font-medium">6 frame styles</td><td className="py-3">None</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Gift features</td><td className="py-3 pr-4 text-primary font-medium">Gift cards with animation</td><td className="py-3">None</td></tr>
            <tr><td className="py-3 pr-4">Free tier</td><td className="py-3 pr-4">1 free portrait</td><td className="py-3">Limited free trial</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Why PawPrints AI Wins for Serious Pet Portraits</h2>
      <p>
        DreamPets is fun for casual social media posts. But if you want a portrait that looks gallery-worthy when framed and hung on your wall, PawPrints AI's curated styles, print-ready output at 300 DPI in standard frame sizes, and digital frame previews give you a result that is actually ready to display.
      </p>
      <p className="mt-4">
        The difference between 300 styles and 8 styles is not about having fewer options. It is about curation. Every PawPrints AI style is tuned for print quality, likeness accuracy, and the kind of output that looks stunning at 16x20 inches on your wall.
      </p>
    </section>
  </SEOPageLayout>
);

export default VsDreamPets;

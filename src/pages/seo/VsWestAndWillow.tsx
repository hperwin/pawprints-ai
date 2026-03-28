import SEOPageLayout from "@/components/layout/SEOPageLayout";

const VsWestAndWillow = () => (
  <SEOPageLayout
    title="PawPrints AI vs West & Willow: Modern Pet Portraits Compared"
    description="West & Willow makes beautiful minimalist pet portraits for $83-$166. PawPrints AI offers 8 styles including modern minimalist for $8.99/mo. Here's how they compare."
  >
    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Two Different Approaches to Pet Art</h2>
      <p>
        West & Willow has built a beloved brand around one thing: clean, modern, minimalist pet portraits printed on museum-quality paper in hardwood frames. PawPrints AI takes a different approach with 8 curated art styles, instant AI generation, and digital downloads you can print anywhere.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Side-by-Side Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-body text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold">Feature</th>
              <th className="text-left py-3 pr-4 font-semibold">PawPrints AI</th>
              <th className="text-left py-3 font-semibold">West & Willow</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Price</td><td className="py-3 pr-4 text-primary font-medium">$8.99/mo unlimited</td><td className="py-3">$83-$166 per portrait</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Speed</td><td className="py-3 pr-4 text-primary font-medium">60 seconds</td><td className="py-3">~2 weeks</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Style options</td><td className="py-3 pr-4">8 styles (watercolor, renaissance, pop art, anime, memorial, oil, cartoon, impressionist)</td><td className="py-3">1 style (minimalist modern)</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Multiple pets</td><td className="py-3 pr-4">Up to 3</td><td className="py-3">Up to 4</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Preview before paying</td><td className="py-3 pr-4 text-primary font-medium">Yes (free tier)</td><td className="py-3">No preview before shipping</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Frame choices</td><td className="py-3 pr-4">6 digital frame styles</td><td className="py-3">Black, white, or walnut</td></tr>
            <tr><td className="py-3 pr-4">Background options</td><td className="py-3 pr-4">12+ backgrounds</td><td className="py-3">6 backgrounds</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">What West & Willow Does Better</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Museum-quality giclee printing on Epson matte paper</li>
        <li>Physical hardwood frames with hanging hardware included</li>
        <li>The aesthetic consistency of one signature style</li>
        <li>Custom embroidered pet apparel (hoodies, hats)</li>
      </ul>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">What PawPrints AI Does Better</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>8 distinct art styles vs. one minimalist look</li>
        <li>Instant delivery: see your portrait in 60 seconds, not 2 weeks</li>
        <li>Free preview: try before you buy (West & Willow ships without a proof)</li>
        <li>Unlimited regenerations: keep generating until you love it</li>
        <li>10-20x more affordable per portrait</li>
        <li>Dedicated memorial style for pets who have passed</li>
        <li>Print at any size you want at your local shop</li>
      </ul>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">The Bottom Line</h2>
      <p>
        West & Willow is a beautiful product for people who want one specific minimalist look and are willing to pay premium for the physical frame and paper. PawPrints AI is for people who want variety, speed, and the freedom to experiment with multiple styles of their pet before choosing what to print and frame.
      </p>
    </section>
  </SEOPageLayout>
);

export default VsWestAndWillow;

import { Link } from "react-router-dom";
import SEOPageLayout from "@/components/layout/SEOPageLayout";

const Alternatives = () => (
  <SEOPageLayout
    title="Best AI Pet Portrait Generators in 2026 -- Alternatives Compared"
    description="Looking for the best AI pet portrait app? We compare PawPrints AI, Crown & Paw, West & Willow, DreamPets, Pawcaso, Fotor, and more. Free tier included."
  >
    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">The Complete Guide to Pet Portrait Services</h2>
      <p>
        Whether you want a quick digital portrait for social media or a museum-quality canvas to hang above your fireplace, there is a pet portrait service for you. Here is every major option in 2026, honestly compared.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Quick Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-body text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-3 font-semibold">Service</th>
              <th className="text-left py-3 pr-3 font-semibold">Price</th>
              <th className="text-left py-3 pr-3 font-semibold">Speed</th>
              <th className="text-left py-3 pr-3 font-semibold">Type</th>
              <th className="text-left py-3 font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50 bg-amber-50/50"><td className="py-3 pr-3 font-medium text-primary">PawPrints AI</td><td className="py-3 pr-3">Free / $8.99/mo</td><td className="py-3 pr-3">60 sec</td><td className="py-3 pr-3">AI, web</td><td className="py-3">Print-ready, gifts, variety</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-3 font-medium">Crown & Paw</td><td className="py-3 pr-3">$50-$140</td><td className="py-3 pr-3">3-7 days</td><td className="py-3 pr-3">Human + AI</td><td className="py-3">Physical canvas, 150+ styles</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-3 font-medium">West & Willow</td><td className="py-3 pr-3">$83-$166</td><td className="py-3 pr-3">~2 weeks</td><td className="py-3 pr-3">Digital art</td><td className="py-3">Minimalist modern</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-3 font-medium">DreamPets</td><td className="py-3 pr-3">$6.99/mo</td><td className="py-3 pr-3">Instant</td><td className="py-3 pr-3">AI, mobile</td><td className="py-3">Casual, social media</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-3 font-medium">Pawcaso Studio</td><td className="py-3 pr-3">$9.99-$19.99</td><td className="py-3 pr-3">30 sec</td><td className="py-3 pr-3">AI, web</td><td className="py-3">Bulk portraits, value</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-3 font-medium">PetPortrait.AI</td><td className="py-3 pr-3">Free-$9.99</td><td className="py-3 pr-3">24-48 hrs</td><td className="py-3 pr-3">Custom AI model</td><td className="py-3">Best likeness accuracy</td></tr>
            <tr><td className="py-3 pr-3 font-medium">Fotor</td><td className="py-3 pr-3">Free+</td><td className="py-3 pr-3">Instant</td><td className="py-3 pr-3">AI, web</td><td className="py-3">Quick and free</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Detailed Reviews</h2>

      <h3 className="font-display text-xl text-foreground mt-8 mb-3">PawPrints AI</h3>
      <p>
        The best balance of quality, speed, and price. 8 curated styles that are optimized for print (300 DPI, standard frame sizes). Unique features like photo crop and zoom, background selection, digital frame previews, gift cards, and multi-pet portraits. The free tier lets you try one portrait with no credit card. <Link to="/signup" className="text-primary hover:text-amber-700 font-medium">Try it free.</Link>
      </p>

      <h3 className="font-display text-xl text-foreground mt-8 mb-3">Crown & Paw</h3>
      <p>
        The premium option. 150+ designs, human artist quality control, physical canvas and poster printing. Best for people who want a ready-to-hang product and do not mind paying $50-$140 and waiting 3-7 days. <Link to="/vs/crown-and-paw" className="text-primary hover:text-amber-700">Read our full comparison.</Link>
      </p>

      <h3 className="font-display text-xl text-foreground mt-8 mb-3">West & Willow</h3>
      <p>
        Beautiful minimalist modern portraits on museum-quality paper. One signature style, available in framed prints. Premium pricing ($83-$166) and no preview before shipping. Best for design-conscious buyers who know they want the minimalist look. <Link to="/vs/west-and-willow" className="text-primary hover:text-amber-700">Read our full comparison.</Link>
      </p>

      <h3 className="font-display text-xl text-foreground mt-8 mb-3">DreamPets</h3>
      <p>
        The most styles (300+) at the lowest subscription price ($6.99/mo). Mobile app only. Best for casual social media sharing, not optimized for printing. <Link to="/vs/dreampets" className="text-primary hover:text-amber-700">Read our full comparison.</Link>
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">How to Choose</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Want a physical canvas?</strong> Crown & Paw</li>
        <li><strong>Want minimalist modern?</strong> West & Willow</li>
        <li><strong>Want instant + print-ready + affordable?</strong> PawPrints AI</li>
        <li><strong>Want mobile + tons of styles?</strong> DreamPets</li>
        <li><strong>Want bulk portraits?</strong> Pawcaso Studio</li>
        <li><strong>Want best likeness?</strong> PetPortrait.AI (but expect a 24-48 hour wait)</li>
      </ul>
    </section>
  </SEOPageLayout>
);

export default Alternatives;

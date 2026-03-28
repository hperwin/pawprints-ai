import { Link } from "react-router-dom";
import SEOPageLayout from "@/components/layout/SEOPageLayout";

const VsCrownAndPawPricing = () => (
  <SEOPageLayout
    title="PawPrints AI vs Crown & Paw: $8.99/mo vs $50 Per Portrait"
    description="Is a $50-$140 Crown & Paw canvas worth it when PawPrints AI offers unlimited portraits for $8.99/mo? We break down exactly what you get at each price point."
  >
    <section>
      <p className="text-lg font-body text-muted-foreground italic mb-8">
        Crown & Paw has been the go-to name in custom pet portraits for years. But with AI portrait generators now producing frame-worthy results in seconds, is paying $50-$140 per portrait still worth it? Let us do the math.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">The Price Breakdown</h2>
      <p>
        At Crown & Paw, a single canvas portrait starts at $49.95 and goes up to $139.95 depending on size and complexity. That is one portrait, one style, one size. If you want to try a different style or size, you buy another one.
      </p>
      <p className="mt-4">
        At PawPrints AI, $8.99 per month gets you unlimited portraits in all 8 styles, at any of 5 standard print sizes, with background selection and frame previews. Your first portrait is completely free, no credit card required.
      </p>

      <div className="mt-6 p-6 rounded-xl bg-amber-50 border border-amber-200">
        <h3 className="font-display text-lg text-foreground mb-3">The Math</h3>
        <ul className="space-y-2 font-body text-sm">
          <li>1 Crown & Paw canvas (8x10): <strong>$49.95</strong></li>
          <li>1 month of PawPrints AI Pro (unlimited portraits): <strong>$8.99</strong></li>
          <li>6 months of PawPrints AI Pro: <strong>$53.94</strong></li>
          <li>For the price of one Crown & Paw canvas, you get <strong>5+ months of unlimited portraits</strong></li>
          <li>If you print an 8x10 at your local shop: ~$5-$15</li>
          <li>Total for a printed PawPrints AI portrait: <strong>$14-$24</strong></li>
        </ul>
      </div>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">What $50+ Actually Buys You at Crown & Paw</h2>
      <p>
        To be fair, Crown & Paw is not just selling a digital image. Their price includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
        <li>Human artist digital drawing with proprietary retouching</li>
        <li>Unlimited revisions until you approve the proof</li>
        <li>Physical canvas print on gallery-standard 1.25" depth frame</li>
        <li>Shipping (3-7 business days)</li>
        <li>In-house quality control</li>
      </ul>
      <p className="mt-4">
        If you specifically want a ready-to-hang physical canvas with zero effort on your part, Crown & Paw delivers that. The question is whether that convenience is worth $50-$140.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">What $8.99/mo Gets You at PawPrints AI</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Unlimited portrait generations in all 8 styles</li>
        <li>Print-ready downloads at 300 DPI in 5 standard frame sizes</li>
        <li>Photo crop and zoom for perfect composition</li>
        <li>12+ background options (studio, outdoor, fantasy, seasonal)</li>
        <li>6 digital frame previews to see how it looks before printing</li>
        <li>Gift card creator with personalized messages</li>
        <li>Multi-pet portraits (up to 3 pets)</li>
        <li>Style intensity control (more realistic to more stylized)</li>
        <li>Before/after comparison slider</li>
        <li>Favorites gallery with shareable links</li>
        <li>New styles added monthly</li>
        <li>Full commercial rights</li>
      </ul>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">The Verdict</h2>
      <p>
        Crown & Paw is a premium product for people who want a turn-key physical gift. PawPrints AI is for everyone else: people who want to experiment with styles, create portraits of multiple pets, control the print size and framing themselves, and do it all for a fraction of the cost.
      </p>
      <p className="mt-4">
        If you have ever looked at a Crown & Paw portrait and thought "I love this but I wish I could try it before committing $50," PawPrints AI is exactly what you want. <Link to="/signup" className="text-primary hover:text-amber-700 font-medium">Try your first portrait free.</Link>
      </p>
    </section>
  </SEOPageLayout>
);

export default VsCrownAndPawPricing;

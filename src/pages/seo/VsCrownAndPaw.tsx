import SEOPageLayout from "@/components/layout/SEOPageLayout";

const VsCrownAndPaw = () => (
  <SEOPageLayout
    title="PawPrints AI vs Crown & Paw: Which Pet Portrait Service Is Right for You?"
    description="Crown & Paw charges $50-$140 per portrait and takes 3-7 days. PawPrints AI gives you unlimited portraits for $8.99/mo in 60 seconds. Here's an honest comparison."
  >
    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">The Quick Answer</h2>
      <p>
        If you want a physical canvas print with human-reviewed quality and you are happy waiting a week and paying $50+, Crown & Paw is excellent. If you want instant results, unlimited generations, digital downloads in print-ready quality, and you value speed and affordability, PawPrints AI is the better choice.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Price Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-body text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold">Feature</th>
              <th className="text-left py-3 pr-4 font-semibold">PawPrints AI</th>
              <th className="text-left py-3 font-semibold">Crown & Paw</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Price</td><td className="py-3 pr-4 text-primary font-medium">$8.99/mo unlimited</td><td className="py-3">$50-$140 per portrait</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Speed</td><td className="py-3 pr-4 text-primary font-medium">60 seconds</td><td className="py-3">3-7 business days</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Styles</td><td className="py-3 pr-4">8 curated styles</td><td className="py-3">150+ templates</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Multiple pets</td><td className="py-3 pr-4">Up to 3</td><td className="py-3">Up to 4</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Print-ready</td><td className="py-3 pr-4">300 DPI digital</td><td className="py-3">Physical canvas/poster</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Free tier</td><td className="py-3 pr-4 text-primary font-medium">1 free portrait</td><td className="py-3">No free option</td></tr>
            <tr className="border-b border-border/50"><td className="py-3 pr-4">Revisions</td><td className="py-3 pr-4">Unlimited regenerations</td><td className="py-3">Unlimited human revisions</td></tr>
            <tr><td className="py-3 pr-4">Frame options</td><td className="py-3 pr-4">6 digital frame styles</td><td className="py-3">Physical canvas frame</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">When to Choose Crown & Paw</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>You want a ready-to-hang physical canvas delivered to your door</li>
        <li>You need a very specific pose or costume from their 150+ template library</li>
        <li>You prefer human artist oversight on every portrait</li>
        <li>Budget is not a concern and you only need one portrait</li>
      </ul>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">When to Choose PawPrints AI</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>You want to try multiple styles before committing to a print</li>
        <li>You have multiple pets and want portraits of all of them</li>
        <li>Speed matters: you need a portrait today, not next week</li>
        <li>You plan to print locally (print shops, Shutterfly, Canvera) at your preferred size</li>
        <li>You want a memorial portrait and need the emotional moment to be instant</li>
        <li>You are looking for an affordable gift for a pet lover</li>
      </ul>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">The Bottom Line</h2>
      <p>
        Crown & Paw is a premium physical product service. PawPrints AI is an instant digital art studio. For the price of a single Crown & Paw canvas, you get unlimited portraits for over 5 months on PawPrints AI -- enough to create a full gallery wall of every pet you have ever loved, in every style, and print them at whatever size you want.
      </p>
    </section>
  </SEOPageLayout>
);

export default VsCrownAndPaw;

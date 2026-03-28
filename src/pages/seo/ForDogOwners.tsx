import SEOPageLayout from "@/components/layout/SEOPageLayout";

const ForDogOwners = () => (
  <SEOPageLayout
    title="Custom Dog Portraits from Your Photo -- Frame-Worthy in 60 Seconds"
    description="Upload a photo of your dog. Pick a style: watercolor, renaissance, pop art, or memorial. Get a print-ready portrait in under a minute. First one free."
    ctaText="Create your dog's portrait -- it's free"
  >
    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Your Dog Deserves More Than a Phone Photo</h2>
      <p>
        That photo of your golden retriever looking right at you with those soulful eyes? It deserves to be more than a file in your camera roll. PawPrints AI turns it into a frame-worthy portrait that captures their personality, not just their breed.
      </p>
      <p className="mt-4">
        Whether it is a goofy labrador, a regal German shepherd, a tiny Chihuahua, or a lovable pit mix, our portrait engine analyzes your dog's specific markings, coloring, and expression. You get a portrait of your actual dog, not a stock image of the breed.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Popular Styles for Dog Portraits</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li><strong>Renaissance:</strong> Your dog as a 17th-century duke. Regal pose, dramatic lighting, oil-painting texture. This is the one that goes viral when you share it.</li>
        <li><strong>Watercolor:</strong> Soft, dreamy washes that capture your dog's gentle side. Our most popular style overall, and the top choice for gifts.</li>
        <li><strong>Pop Art:</strong> Bold Warhol-style colors and halftone dots. Perfect for Instagram, gallery walls, or anywhere you want your pup to make a statement.</li>
        <li><strong>Memorial:</strong> A gentle tribute for dogs who have crossed the rainbow bridge. Soft light, angel wings, peaceful warmth. Many customers tell us this portrait becomes a cherished keepsake.</li>
      </ul>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Tips for the Best Dog Portrait</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Use a front-facing photo where you can see both eyes clearly</li>
        <li>Natural daylight gives the best results (no flash)</li>
        <li>Get close enough that their face fills most of the frame</li>
        <li>That photo where they are looking right at you is usually the winner</li>
        <li>Use our crop and zoom tool to center their face perfectly</li>
      </ol>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Multiple Dogs? No Problem.</h2>
      <p>
        Have two or three dogs? Upload photos of each one and we will combine them into a single portrait. Your whole pack, together, in any style. It makes an incredible gallery wall piece or family gift.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Print It, Frame It, Love It</h2>
      <p>
        Every portrait downloads in print-ready quality at 300 DPI in standard frame sizes: 5x7, 8x10, 11x14, or 16x20. Take it to your local print shop or upload to Shutterfly, Canvera, or any online printing service. Preview with our digital frame options before you print.
      </p>
    </section>
  </SEOPageLayout>
);

export default ForDogOwners;

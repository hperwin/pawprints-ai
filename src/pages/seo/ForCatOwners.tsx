import SEOPageLayout from "@/components/layout/SEOPageLayout";

const ForCatOwners = () => (
  <SEOPageLayout
    title="Custom Cat Portraits from Your Photo -- Capture Their Personality"
    description="Your cat's resting judgment face deserves to be art. Upload a photo, pick a style, and get a frame-worthy portrait in 60 seconds. First one free."
    ctaText="Create your cat's portrait -- it's free"
  >
    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Cats Were Born to Be Painted</h2>
      <p>
        Cats have been the subject of art for thousands of years, from ancient Egyptian sculptures to Renaissance paintings. Your cat is no exception. That look of supreme indifference? That regal pose on the back of the couch? It was meant to be a masterpiece.
      </p>
      <p className="mt-4">
        PawPrints AI turns your cat's photo into a portrait that captures everything that makes them uniquely them: the markings, the expression, and especially the attitude.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Styles That Cats Were Made For</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li><strong>Renaissance:</strong> Your cat as feline royalty. Because they already think they are, and honestly, they are right.</li>
        <li><strong>Anime:</strong> Big expressive eyes, vibrant colors, Studio Ghibli energy. Cats translate beautifully to manga-style art.</li>
        <li><strong>Watercolor:</strong> Soft, dreamy, and elegant. Perfect for capturing the graceful side of even the most chaotic cat.</li>
        <li><strong>Oil Painting:</strong> Dignified and classic. The "hanging above the fireplace" style. Ideal for cats who take themselves very seriously.</li>
      </ul>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Getting a Good Cat Photo (The Real Challenge)</h2>
      <p>
        We know. Getting a cat to look at the camera is harder than it sounds. Here is what works:
      </p>
      <ol className="list-decimal pl-6 space-y-2 mt-4">
        <li>Catch them mid-loaf or when they are sitting still (rare, we know)</li>
        <li>Use treats or a toy above the camera to get eye contact</li>
        <li>Natural light from a window works perfectly</li>
        <li>The "just woke up" face often makes the best portraits</li>
        <li>Use our crop and zoom to center their face even if the photo is not perfect</li>
      </ol>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Multiple Cats? Create a Gallery Wall</h2>
      <p>
        Three cats, three styles, three frames, one gallery wall. Or combine all of them into a single multi-pet portrait. Either way, your home office Zoom background will never be the same.
      </p>
    </section>
  </SEOPageLayout>
);

export default ForCatOwners;

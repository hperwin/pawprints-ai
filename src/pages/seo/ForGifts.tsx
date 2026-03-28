import SEOPageLayout from "@/components/layout/SEOPageLayout";

const ForGifts = () => (
  <SEOPageLayout
    title="Pet Portrait Gifts -- The Gift That Makes Pet Lovers Cry Happy Tears"
    description="A custom portrait of someone's pet is the gift that gets framed, not returned. Create one in 60 seconds, send it with a personalized gift card. First one free."
    ctaText="Create a pet portrait gift -- it's free"
  >
    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">The #1 Gift for Pet Lovers</h2>
      <p>
        Stuck on what to get the person who treats their dog like a child? The friend whose cat has its own Instagram account? The colleague who will not stop showing you photos of their new puppy?
      </p>
      <p className="mt-4">
        A custom portrait of their pet. It is the gift that gets framed and hung on the wall, not shoved in a drawer. And with PawPrints AI, you can create it in 60 seconds from a photo on their social media.
      </p>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Perfect for Every Occasion</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Christmas and holidays:</strong> Custom pet portraits are a top-10 personalized gift on Etsy every holiday season</li>
        <li><strong>Birthdays:</strong> "I didn't know what to get them, then I remembered they love their dog"</li>
        <li><strong>Pet memorials:</strong> A gentle tribute for someone who has lost a beloved pet</li>
        <li><strong>Mother's Day / Father's Day:</strong> "Dog mom" and "cat dad" gifts are a real category</li>
        <li><strong>Adoption anniversaries:</strong> Celebrate their "gotcha day" with art</li>
        <li><strong>"Just because":</strong> Because sometimes the best gifts are unexpected</li>
      </ul>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">How to Gift a Pet Portrait</h2>
      <ol className="list-decimal pl-6 space-y-3">
        <li><strong>Find a good photo:</strong> Check their social media for a clear, front-facing photo of their pet</li>
        <li><strong>Upload and choose a style:</strong> Renaissance for the dramatic friend, watercolor for the sentimental one, anime for the fun one</li>
        <li><strong>Send as a gift card:</strong> Add a personal message and their email. They will receive a beautifully wrapped digital gift with an unwrapping animation</li>
        <li><strong>Or print and frame it yourself:</strong> Download in print-ready quality, take it to a local print shop, and wrap the physical frame</li>
      </ol>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Real Gift Reactions</h2>
      <div className="space-y-4 pl-4 border-l-2 border-amber-200">
        <blockquote className="italic text-muted-foreground">
          "My sister's cat Mochi passed last year. I used the Memorial style and gave her a watercolor portrait for Christmas. She cried. It's now the centerpiece of her living room."
          <span className="block mt-1 text-sm font-medium text-foreground not-italic">-- Marcus T.</span>
        </blockquote>
        <blockquote className="italic text-muted-foreground">
          "My mom talks about her Shih Tzu more than she talks about me. I made a Renaissance portrait of Coco as a birthday gift and now it's the first thing she shows every visitor."
          <span className="block mt-1 text-sm font-medium text-foreground not-italic">-- Priya M.</span>
        </blockquote>
      </div>
    </section>

    <section>
      <h2 className="font-display text-2xl text-foreground mt-12 mb-4">Budget-Friendly vs. Premium Gift Options</h2>
      <p>
        A digital portrait sent via gift card costs nothing extra beyond your subscription. For a premium touch, download in 16x20 print-ready quality, have it printed at a local shop, and give a framed physical portrait -- still under $30 total, compared to $50-$166 for similar products from competitors.
      </p>
    </section>
  </SEOPageLayout>
);

export default ForGifts;

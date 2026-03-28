const styles = [
  {
    name: "Watercolor",
    description:
      "Soft washes, delicate brushstrokes, dreamy feel. Our most popular style — perfect for gifts and memorials.",
    image: "/images/style-watercolor.png",
    tag: "Most Popular",
  },
  {
    name: "Renaissance",
    description:
      "Your pet as a 17th-century noble. Regal pose, dramatic lighting, oil-painting texture. The one that goes viral.",
    image: "/images/style-renaissance.png",
    tag: "Fan Favorite",
  },
  {
    name: "Pop Art",
    description:
      "Bold outlines, halftone dots, electric colors. Warhol would approve. Perfect for Instagram and gallery walls.",
    image: "/images/style-pop-art.png",
  },
  {
    name: "Anime",
    description:
      "Big expressive eyes, vibrant colors, manga-style shading. Studio Ghibli energy for your fur baby.",
    image: "/images/style-anime.png",
  },
  {
    name: "Memorial",
    description:
      "A gentle tribute for pets who've crossed the rainbow bridge. Soft light, angel wings, peaceful warmth.",
    image: "/images/style-memorial.png",
    tag: "New",
  },
];

const StyleShowcase = () => {
  return (
    <section id="styles" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            8 styles. One very loved pet. Endless frame-worthy options.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            From regal Renaissance to gentle memorial tributes — every style is
            tuned to capture what makes <em>your</em> pet unique, not just their
            breed.
          </p>
        </div>

        {/* Gallery grid — 2 large on top, 3 below */}
        <div className="max-w-6xl mx-auto">
          {/* Top row: 2 featured styles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {styles.slice(0, 2).map((style) => (
              <div
                key={style.name}
                className="group gallery-card rounded-xl overflow-hidden bg-card border border-border"
              >
                <div className="gallery-hover gallery-spotlight aspect-[4/3] relative">
                  <img
                    src={style.image}
                    alt={`${style.name} pet portrait style example`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Warm gallery lighting on each portrait */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-50/8 via-transparent to-amber-900/3 pointer-events-none" />
                  {style.tag && (
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-body font-semibold px-3 py-1 rounded-full border border-black/5 shadow-sm">
                      {style.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground">
                    {style.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: 3 styles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {styles.slice(2).map((style) => (
              <div
                key={style.name}
                className="group gallery-card rounded-xl overflow-hidden bg-card border border-border"
              >
                <div className="gallery-hover gallery-spotlight aspect-square relative">
                  <img
                    src={style.image}
                    alt={`${style.name} pet portrait style example`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-50/8 via-transparent to-amber-900/3 pointer-events-none" />
                  {style.tag && (
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-body font-semibold px-3 py-1 rounded-full border border-black/5 shadow-sm">
                      {style.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground">
                    {style.name}
                  </h3>
                  <p className="mt-1.5 font-body text-xs text-muted-foreground leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional styles mention */}
          <p className="text-center mt-10 font-body text-sm text-muted-foreground">
            Plus Oil Painting, Cartoon, and Impressionist styles — 8 total, with new styles added monthly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StyleShowcase;

import { Card, CardContent } from "@/components/ui/card";

const styles = [
  {
    name: "Watercolor",
    description:
      "Soft washes, delicate brushstrokes, dreamy feel. Our most popular style — perfect for gifts and memorials.",
    emoji: "💧",
    bg: "bg-sky-50",
    border: "border-sky-200",
    accent: "text-sky-800",
    tag: "Most Popular",
  },
  {
    name: "Renaissance",
    description:
      "Your pet as a 17th-century noble. Regal pose, dramatic lighting, oil-painting texture. The one that goes viral.",
    emoji: "🎨",
    bg: "bg-amber-50",
    border: "border-amber-200",
    accent: "text-amber-800",
    tag: "Fan Favorite",
  },
  {
    name: "Oil Painting",
    description:
      "Classic, dignified, timeless. Rich colors and visible brushwork — like a portrait that belongs over the fireplace.",
    emoji: "🖼️",
    bg: "bg-orange-50",
    border: "border-orange-200",
    accent: "text-orange-800",
  },
  {
    name: "Pop Art",
    description:
      "Bold outlines, halftone dots, electric colors. Warhol would approve. Perfect for Instagram and gallery walls.",
    emoji: "🌈",
    bg: "bg-pink-50",
    border: "border-pink-200",
    accent: "text-pink-800",
  },
  {
    name: "Cartoon",
    description:
      "Clean lines, flat colors, playful personality. Modern illustration style that captures your pet's character.",
    emoji: "✏️",
    bg: "bg-green-50",
    border: "border-green-200",
    accent: "text-green-800",
  },
  {
    name: "Anime",
    description:
      "Big expressive eyes, vibrant colors, manga-style shading. Studio Ghibli energy for your fur baby.",
    emoji: "✨",
    bg: "bg-purple-50",
    border: "border-purple-200",
    accent: "text-purple-800",
  },
  {
    name: "Memorial",
    description:
      "A gentle tribute for pets who've crossed the rainbow bridge. Soft light, angel wings, peaceful warmth.",
    emoji: "🕊️",
    bg: "bg-slate-50",
    border: "border-slate-200",
    accent: "text-slate-700",
    tag: "New",
  },
  {
    name: "Impressionist",
    description:
      "Monet-inspired brushstrokes, dappled light, garden scenes. Your pet painted like a French masterpiece.",
    emoji: "🌻",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    accent: "text-yellow-800",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {styles.map((style) => (
            <Card
              key={style.name}
              className={`group overflow-hidden border ${style.border} ${style.bg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] flex items-center justify-center relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {style.emoji}
                  </span>
                  {style.tag && (
                    <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-xs font-body font-medium px-2 py-0.5 rounded-full border border-black/5">
                      {style.tag}
                    </span>
                  )}
                </div>
                <div className="p-5 pt-0">
                  <h3 className={`font-display text-lg ${style.accent}`}>
                    {style.name}
                  </h3>
                  <p className="mt-1 font-body text-xs text-muted-foreground leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleShowcase;

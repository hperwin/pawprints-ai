import { Card, CardContent } from "@/components/ui/card";

const styles = [
  {
    name: "Renaissance",
    description: "Oil painting, regal pose, dramatic lighting",
    emoji: "🎨",
    bg: "bg-amber-50",
    border: "border-amber-200",
    accent: "text-amber-800",
  },
  {
    name: "Anime",
    description: "Big eyes, vibrant colors, manga-style shading",
    emoji: "✨",
    bg: "bg-purple-50",
    border: "border-purple-200",
    accent: "text-purple-800",
  },
  {
    name: "Superhero",
    description: "Cape, muscles, comic-book energy",
    emoji: "💥",
    bg: "bg-red-50",
    border: "border-red-200",
    accent: "text-red-800",
  },
  {
    name: "Watercolor",
    description: "Soft washes, delicate brushstrokes, dreamy feel",
    emoji: "💧",
    bg: "bg-sky-50",
    border: "border-sky-200",
    accent: "text-sky-800",
  },
  {
    name: "Pop Art",
    description: "Bold outlines, halftone dots, Warhol vibes",
    emoji: "🌈",
    bg: "bg-pink-50",
    border: "border-pink-200",
    accent: "text-pink-800",
  },
];

const StyleShowcase = () => {
  return (
    <section id="styles" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Same pet. Five completely different vibes.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            Pick a style and watch your pet become the main character.
            Your cat won't care, but your Instagram followers will.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {styles.map((style, i) => (
            <Card
              key={style.name}
              className={`group overflow-hidden border ${style.border} ${style.bg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {style.emoji}
                  </span>
                </div>
                <div className="p-6 pt-0">
                  <h3 className={`font-display text-xl ${style.accent}`}>
                    {style.name}
                  </h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
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

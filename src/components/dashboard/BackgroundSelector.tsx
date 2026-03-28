import { useState } from "react";

const backgrounds = [
  { id: "studio", name: "Studio", color: "bg-gradient-to-b from-stone-200 to-stone-100", description: "Clean, professional" },
  { id: "outdoor-garden", name: "Garden", color: "bg-gradient-to-b from-green-200 to-emerald-100", description: "Lush greenery" },
  { id: "outdoor-sunset", name: "Sunset", color: "bg-gradient-to-b from-orange-200 to-amber-100", description: "Golden hour" },
  { id: "fantasy-castle", name: "Castle", color: "bg-gradient-to-b from-purple-200 to-indigo-100", description: "Royal setting" },
  { id: "fantasy-clouds", name: "Clouds", color: "bg-gradient-to-b from-sky-200 to-blue-100", description: "Dreamy sky" },
  { id: "fantasy-stars", name: "Starlight", color: "bg-gradient-to-b from-indigo-300 to-violet-200", description: "Night magic" },
  { id: "seasonal-christmas", name: "Christmas", color: "bg-gradient-to-b from-red-200 to-green-100", description: "Holiday cheer" },
  { id: "seasonal-halloween", name: "Halloween", color: "bg-gradient-to-b from-orange-300 to-purple-200", description: "Spooky fun" },
  { id: "seasonal-spring", name: "Spring", color: "bg-gradient-to-b from-pink-200 to-rose-100", description: "Cherry blossoms" },
  { id: "seasonal-autumn", name: "Autumn", color: "bg-gradient-to-b from-amber-300 to-orange-100", description: "Warm leaves" },
  { id: "minimal-white", name: "White", color: "bg-white", description: "Pure minimal" },
  { id: "minimal-cream", name: "Cream", color: "bg-amber-50", description: "Warm neutral" },
];

interface BackgroundSelectorProps {
  selected: string | null;
  onSelect: (id: string) => void;
}

const BackgroundSelector = ({ selected, onSelect }: BackgroundSelectorProps) => {
  const [category, setCategory] = useState<"all" | "studio" | "outdoor" | "fantasy" | "seasonal" | "minimal">("all");

  const filtered = category === "all"
    ? backgrounds
    : backgrounds.filter((b) => b.id.startsWith(category) || (category === "studio" && b.id === "studio"));

  const categories = [
    { id: "all", label: "All" },
    { id: "studio", label: "Studio" },
    { id: "outdoor", label: "Outdoor" },
    { id: "fantasy", label: "Fantasy" },
    { id: "seasonal", label: "Seasonal" },
    { id: "minimal", label: "Minimal" },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`font-body text-xs px-3 py-1.5 rounded-full border transition-all ${
              category === cat.id
                ? "border-primary bg-amber-50 text-amber-700 font-semibold"
                : "border-border bg-card text-muted-foreground hover:border-primary/50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {filtered.map((bg) => (
          <button
            key={bg.id}
            onClick={() => onSelect(bg.id)}
            className={`relative rounded-xl overflow-hidden border-2 transition-all group ${
              selected === bg.id
                ? "border-primary ring-2 ring-primary/20 scale-[1.02]"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className={`aspect-square ${bg.color}`} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2">
              <span className="font-body text-[10px] text-white font-medium block leading-tight">
                {bg.name}
              </span>
            </div>
            {selected === bg.id && (
              <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSelector;

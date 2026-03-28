import { motion } from "framer-motion";
import { Sparkles, Palette, Gift, Printer, PawPrint, Bug } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const entries = [
  {
    date: "March 27, 2026",
    version: "2.0",
    title: "The Big Upgrade",
    icon: Sparkles,
    type: "feature" as const,
    items: [
      "Full app shell with sidebar navigation and mobile bottom tabs",
      "Pro plan with unlimited portraits, all 8 styles, and print-ready quality",
      "Gift Center -- send portrait gift cards to friends and family",
      "Print Shop -- download print-ready files sized for real frames",
      "Pet Profiles -- save your pets for faster portrait creation",
      "20 micro-interactions for a buttery smooth experience",
      "ProGate feature locking with 'try once free' option",
      "Beautiful empty states for every page",
    ],
  },
  {
    date: "March 26, 2026",
    version: "1.5",
    title: "Style & Polish",
    icon: Palette,
    type: "enhancement" as const,
    items: [
      "Added 8 art styles including Memorial and Impressionist",
      "Before/after slider on generated portraits",
      "Photo cropping and zoom tool",
      "Background and frame selection",
      "Style intensity slider",
      "Favorites gallery with heart toggle",
      "Surprise Me button for random style + background combos",
    ],
  },
  {
    date: "March 25, 2026",
    version: "1.0",
    title: "Launch",
    icon: PawPrint,
    type: "feature" as const,
    items: [
      "Landing page with hero, style showcase, and pricing",
      "Upload photo and generate portrait in 60 seconds",
      "3 art styles: Renaissance, Watercolor, Anime",
      "Free plan with 1 portrait",
      "Social proof and testimonials",
      "SEO pages for competitor comparison and use cases",
    ],
  },
];

const typeColors = {
  feature: "bg-green-100 text-green-800 border-green-200",
  enhancement: "bg-blue-100 text-blue-800 border-blue-200",
  fix: "bg-amber-100 text-amber-800 border-amber-200",
};

const Changelog = () => {
  return (
    <div className="container mx-auto px-6 py-8 max-w-2xl">
      <motion.h1
        className="font-display text-3xl md:text-4xl text-foreground mb-2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Changelog
      </motion.h1>
      <p className="font-body text-muted-foreground mb-10">
        What's new in PawPrints AI.
      </p>

      <div className="space-y-12">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            className="relative pl-8 border-l-2 border-amber-200"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center">
              <entry.icon className="w-3 h-3 text-amber-700" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-body text-xs text-muted-foreground">
                {entry.date}
              </span>
              <Badge variant="outline" className="font-body text-[10px] px-1.5 py-0">
                v{entry.version}
              </Badge>
              <Badge className={`font-body text-[10px] px-1.5 py-0 border ${typeColors[entry.type]}`}>
                {entry.type}
              </Badge>
            </div>

            <h3 className="font-display text-xl text-foreground mb-3">
              {entry.title}
            </h3>

            <ul className="space-y-1.5">
              {entry.items.map((item, j) => (
                <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Changelog;

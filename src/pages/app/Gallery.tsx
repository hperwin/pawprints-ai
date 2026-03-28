import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Download, Trash2, Eye, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUserStore } from "@/lib/stores/user-store";
import EmptyPortraits from "@/components/empty-states/EmptyPortraits";

const Gallery = () => {
  const { portraits, toggleFavorite, deletePortrait } = useUserStore();
  const [filter, setFilter] = useState<"all" | "favorites">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    filter === "favorites"
      ? portraits.filter((p) => p.isFavorite)
      : portraits;

  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          className="font-display text-3xl md:text-4xl text-foreground"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Portraits
        </motion.h1>

        {portraits.length > 0 && (
          <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
            <TabsList className="bg-muted/50">
              <TabsTrigger value="all" className="font-body text-sm relative">
                All
                <Badge variant="secondary" className="ml-1.5 text-[10px] px-1.5 py-0">
                  {portraits.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="font-body text-sm">
                <Heart className="w-3.5 h-3.5 mr-1" />
                Favorites
              </TabsTrigger>
            </TabsList>
          </Tabs>
        )}
      </div>

      {filtered.length === 0 && filter === "all" ? (
        <EmptyPortraits />
      ) : filtered.length === 0 && filter === "favorites" ? (
        <div className="text-center py-16">
          <Heart className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" strokeWidth={1} />
          <p className="font-body text-muted-foreground">
            No favorites yet. Click the heart on any portrait.
          </p>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06 },
            },
          }}
        >
          {filtered.map((portrait) => (
            <motion.div
              key={portrait.id}
              className="relative group rounded-xl overflow-hidden border border-border bg-card"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              onHoverStart={() => setHoveredId(portrait.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(217, 119, 6, 0.12)",
              }}
              transition={{ duration: 0.2 }}
              layout
            >
              <div className="aspect-square overflow-hidden relative">
                <motion.img
                  src={portrait.imageUrl}
                  alt={`${portrait.style} portrait`}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === portrait.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Hover overlay */}
                <AnimatePresence>
                  {hoveredId === portrait.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-between p-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="font-body text-sm text-white font-medium flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        View
                      </span>
                      <div className="flex gap-1.5">
                        <motion.button
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Download className="w-3.5 h-3.5 text-white" />
                        </motion.button>
                        <motion.button
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            deletePortrait(portrait.id);
                          }}
                        >
                          <Trash2 className="w-3.5 h-3.5 text-white" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Info bar */}
              <div className="p-3 flex items-center justify-between">
                <div>
                  <p className="font-body text-sm font-medium text-foreground">
                    {portrait.style}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {portrait.createdAt}
                  </p>
                </div>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(portrait.id);
                  }}
                  whileTap={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      portrait.isFavorite
                        ? "text-rose-500 fill-rose-500"
                        : "text-muted-foreground hover:text-rose-400"
                    }`}
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;

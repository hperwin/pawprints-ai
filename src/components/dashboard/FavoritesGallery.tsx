import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, ExternalLink, ImageIcon } from "lucide-react";

interface Portrait {
  id: string;
  style: string;
  imageUrl: string;
  createdAt: string;
  isFavorite: boolean;
}

interface FavoritesGalleryProps {
  portraits: Portrait[];
  onToggleFavorite: (id: string) => void;
}

const FavoritesGallery = ({ portraits, onToggleFavorite }: FavoritesGalleryProps) => {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [shareLink, setShareLink] = useState<string | null>(null);

  const filtered = showFavoritesOnly
    ? portraits.filter((p) => p.isFavorite)
    : portraits;

  const favoriteCount = portraits.filter((p) => p.isFavorite).length;

  const handleShare = () => {
    const link = `https://pawprints.ai/gallery/${Math.random().toString(36).slice(2, 10)}`;
    setShareLink(link);
    navigator.clipboard?.writeText(link);
  };

  if (portraits.length === 0) {
    return (
      <div className="border-2 border-dashed border-border rounded-2xl p-16 text-center">
        <ImageIcon className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
        <p className="font-body text-muted-foreground">
          No portraits yet. Upload a photo and pick a style to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`flex items-center gap-1.5 font-body text-sm px-3 py-1.5 rounded-full border transition-all ${
              showFavoritesOnly
                ? "border-primary bg-amber-50 text-amber-700 font-semibold"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${showFavoritesOnly ? "fill-primary text-primary" : ""}`} />
            Favorites ({favoriteCount})
          </button>
        </div>

        {favoriteCount > 0 && (
          <Button variant="outline" size="sm" onClick={handleShare} className="font-body text-xs">
            <Share2 className="w-3.5 h-3.5 mr-1.5" />
            Share gallery
          </Button>
        )}
      </div>

      {shareLink && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200">
          <ExternalLink className="w-4 h-4 text-amber-700 shrink-0" />
          <span className="font-body text-sm text-amber-800 truncate flex-1">{shareLink}</span>
          <Badge className="bg-amber-200 text-amber-800 font-body text-[10px]">Copied</Badge>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filtered.map((portrait) => (
          <div
            key={portrait.id}
            className="gallery-card rounded-xl border border-border overflow-hidden group"
          >
            <div className="aspect-square bg-amber-50 relative gallery-hover">
              <img
                src={portrait.imageUrl}
                alt={`${portrait.style} portrait`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => onToggleFavorite(portrait.id)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    portrait.isFavorite
                      ? "fill-red-500 text-red-500"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            </div>
            <div className="p-3">
              <p className="font-body text-xs font-medium text-foreground">
                {portrait.style}
              </p>
              <p className="font-body text-xs text-muted-foreground/60">
                {portrait.createdAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export type { Portrait };
export default FavoritesGallery;

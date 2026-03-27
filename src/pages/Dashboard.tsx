import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  Download,
  Sparkles,
  ImageIcon,
  LogOut,
  X,
} from "lucide-react";
import PaywallModal from "@/components/sections/PaywallModal";

const artStyles = [
  { id: "renaissance", name: "Renaissance", emoji: "🎨", description: "Oil painting, regal pose" },
  { id: "anime", name: "Anime", emoji: "✨", description: "Manga-style, vibrant" },
  { id: "superhero", name: "Superhero", emoji: "💥", description: "Comic-book energy" },
  { id: "watercolor", name: "Watercolor", emoji: "💧", description: "Soft, dreamy washes" },
  { id: "pop-art", name: "Pop Art", emoji: "🌈", description: "Bold, Warhol vibes" },
];

const Dashboard = () => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPortrait, setGeneratedPortrait] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setGeneratedPortrait(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleGenerate = () => {
    if (!uploadedFile || !selectedStyle) return;
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPortrait(true);
    }, 2500);
  };

  const clearUpload = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
    setGeneratedPortrait(false);
    setSelectedStyle(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="font-display text-xl text-foreground">
              PawPrints AI
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="font-body text-xs border-amber-200 text-amber-700 bg-amber-50"
            >
              Free Plan — 1 portrait left
            </Badge>
            <Link to="/">
              <Button variant="ghost" size="sm" className="font-body text-sm">
                <LogOut className="w-4 h-4 mr-1.5" />
                Log out
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 md:py-16 max-w-4xl">
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
          Create a portrait
        </h1>
        <p className="font-body text-muted-foreground mb-10">
          Upload a photo of your pet, pick a style, and download your masterpiece.
        </p>

        {/* Upload area */}
        <div className="mb-10">
          <h2 className="font-body text-sm font-semibold text-foreground mb-3">
            1. Upload a pet photo
          </h2>
          {!previewUrl ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
                isDragOver
                  ? "border-primary bg-amber-50"
                  : "border-border hover:border-primary/50 hover:bg-muted/30"
              }`}
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <input
                id="file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
              <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
              <p className="font-body text-foreground font-medium mb-1">
                Drag and drop your pet photo here
              </p>
              <p className="font-body text-sm text-muted-foreground">
                or click to browse. Front-facing photos with good lighting work best.
              </p>
            </div>
          ) : (
            <div className="relative inline-block">
              <img
                src={previewUrl}
                alt="Uploaded pet"
                className="max-h-72 rounded-2xl border border-border object-cover"
              />
              <button
                onClick={clearUpload}
                className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Style selector */}
        <div className="mb-10">
          <h2 className="font-body text-sm font-semibold text-foreground mb-3">
            2. Choose a style
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {artStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`relative p-4 rounded-xl border text-center transition-all ${
                  selectedStyle === style.id
                    ? "border-primary bg-amber-50 ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <span className="text-3xl block mb-2">{style.emoji}</span>
                <span className="font-body text-sm font-medium text-foreground block">
                  {style.name}
                </span>
                <span className="font-body text-xs text-muted-foreground block mt-0.5">
                  {style.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <div className="mb-10">
          <Button
            size="lg"
            disabled={!uploadedFile || !selectedStyle || isGenerating}
            onClick={handleGenerate}
            className="font-body text-base px-8 py-6 bg-primary hover:bg-amber-700 text-primary-foreground shadow-lg shadow-amber-600/20 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                Painting your portrait...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Portrait
              </>
            )}
          </Button>
        </div>

        {/* Result area */}
        {generatedPortrait && (
          <div className="mb-16">
            <h2 className="font-body text-sm font-semibold text-foreground mb-3">
              3. Your portrait
            </h2>
            <Card className="border border-amber-200 bg-amber-50 overflow-hidden max-w-sm">
              <CardContent className="p-0">
                <div className="aspect-square bg-amber-100 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-7xl block mb-3">🖼️</span>
                    <p className="font-body text-sm text-amber-700 font-medium">
                      {artStyles.find((s) => s.id === selectedStyle)?.name} Portrait
                    </p>
                  </div>
                </div>
                <div className="p-5 flex gap-3">
                  <Button className="flex-1 font-body bg-primary hover:bg-amber-700 text-primary-foreground">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    className="font-body"
                    onClick={() => setShowPaywall(true)}
                  >
                    Generate another
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* My Portraits gallery */}
        <div>
          <h2 className="font-display text-2xl text-foreground mb-6">
            My Portraits
          </h2>
          {!generatedPortrait ? (
            <div className="border-2 border-dashed border-border rounded-2xl p-16 text-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="font-body text-muted-foreground">
                No portraits yet. Upload a photo and pick a style to get started.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Card className="border border-border overflow-hidden group hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="aspect-square bg-amber-50 flex items-center justify-center">
                    <span className="text-5xl group-hover:scale-110 transition-transform">
                      🖼️
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="font-body text-xs text-muted-foreground">
                      {artStyles.find((s) => s.id === selectedStyle)?.name} Style
                    </p>
                    <p className="font-body text-xs text-muted-foreground/60">
                      Just now
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <PaywallModal open={showPaywall} onOpenChange={setShowPaywall} />
    </div>
  );
};

export default Dashboard;

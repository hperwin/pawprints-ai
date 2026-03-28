import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  Download,
  Sparkles,
  LogOut,
  X,
  Shuffle,
  Gift,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import PaywallModal from "@/components/sections/PaywallModal";
import PhotoCropper from "@/components/dashboard/PhotoCropper";
import BackgroundSelector from "@/components/dashboard/BackgroundSelector";
import FrameSelector, { frames } from "@/components/dashboard/FrameSelector";
import PrintReadyDownload from "@/components/dashboard/PrintReadyDownload";
import GiftCardCreator from "@/components/dashboard/GiftCardCreator";
import MultiPetUpload from "@/components/dashboard/MultiPetUpload";
import type { PetPhoto } from "@/components/dashboard/MultiPetUpload";
import StyleIntensitySlider from "@/components/dashboard/StyleIntensitySlider";
import BeforeAfterSlider from "@/components/dashboard/BeforeAfterSlider";
import FavoritesGallery from "@/components/dashboard/FavoritesGallery";
import type { Portrait } from "@/components/dashboard/FavoritesGallery";

const artStyles = [
  { id: "renaissance", name: "Renaissance", description: "Oil painting, regal pose", image: "/images/style-renaissance.png" },
  { id: "watercolor", name: "Watercolor", description: "Soft, dreamy washes", image: "/images/style-watercolor.png" },
  { id: "anime", name: "Anime", description: "Manga-style, vibrant", image: "/images/style-anime.png" },
  { id: "pop-art", name: "Pop Art", description: "Bold, Warhol vibes", image: "/images/style-pop-art.png" },
  { id: "memorial", name: "Memorial", description: "Gentle tribute", image: "/images/style-memorial.png" },
  { id: "oil-painting", name: "Oil Painting", description: "Classic, dignified", image: "/images/style-renaissance.png" },
  { id: "cartoon", name: "Cartoon", description: "Clean lines, fun", image: "/images/style-anime.png" },
  { id: "impressionist", name: "Impressionist", description: "Monet-inspired", image: "/images/style-watercolor.png" },
];

const Dashboard = () => {
  // Core state
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPortrait, setGeneratedPortrait] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  // Feature state
  const [showCropper, setShowCropper] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState<string | null>("studio");
  const [selectedFrame, setSelectedFrame] = useState<string | null>("gold-ornate");
  const [styleIntensity, setStyleIntensity] = useState(65);
  const [showGiftCreator, setShowGiftCreator] = useState(false);
  const [showPrintDownload, setShowPrintDownload] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Multi-pet state
  const [multiPetMode, setMultiPetMode] = useState(false);
  const [pets, setPets] = useState<PetPhoto[]>([]);

  // Gallery state
  const [portraits, setPortraits] = useState<Portrait[]>([]);

  // Onboarding state
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [showOnboardingSample, setShowOnboardingSample] = useState(false);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setGeneratedPortrait(false);
      setShowCropper(true);
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

  const handleCropComplete = (croppedUrl: string) => {
    setPreviewUrl(croppedUrl);
    setShowCropper(false);
  };

  const handleGenerate = () => {
    if ((!uploadedFile && pets.length === 0) || !selectedStyle) return;
    setIsGenerating(true);
    setShowOnboardingSample(true);

    // Simulate generation with progress
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPortrait(true);
      setIsFirstTime(false);

      // Add to gallery
      const style = artStyles.find((s) => s.id === selectedStyle);
      const newPortrait: Portrait = {
        id: `portrait-${Date.now()}`,
        style: style?.name || "Portrait",
        imageUrl: style?.image || "/images/style-renaissance.png",
        createdAt: "Just now",
        isFavorite: false,
      };
      setPortraits((prev) => [newPortrait, ...prev]);
    }, 3000);
  };

  const handleSurpriseMe = () => {
    const randomStyle = artStyles[Math.floor(Math.random() * artStyles.length)];
    const backgrounds = ["studio", "outdoor-garden", "outdoor-sunset", "fantasy-castle", "fantasy-clouds", "seasonal-christmas"];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setSelectedStyle(randomStyle.id);
    setSelectedBackground(randomBg);
    setStyleIntensity(Math.floor(Math.random() * 60) + 30);
  };

  const clearUpload = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
    setGeneratedPortrait(false);
    setSelectedStyle(null);
    setShowCropper(false);
    setShowGiftCreator(false);
    setShowPrintDownload(false);
    setPets([]);
    setMultiPetMode(false);
  };

  const toggleFavorite = (id: string) => {
    setPortraits((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isFavorite: !p.isFavorite } : p))
    );
  };

  // Use a pre-filled example for onboarding
  const handleTryExample = () => {
    setSelectedStyle("renaissance");
    setPreviewUrl("/images/hero-before-after.png");
    setUploadedFile(new File([], "example.png"));
    setShowCropper(false);
    setIsFirstTime(false);
  };

  const currentStyle = artStyles.find((s) => s.id === selectedStyle);
  const currentFrame = frames.find((f) => f.id === selectedFrame);

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="font-display text-xl text-foreground">PawPrints AI</span>
          </Link>
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="font-body text-xs border-amber-200 text-amber-700 bg-amber-50"
            >
              Free Plan -- 1 portrait left
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

      <main className="container mx-auto px-6 py-10 md:py-16 max-w-5xl">
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-display text-3xl md:text-4xl text-foreground">
            Create a portrait
          </h1>
          {/* Surprise Me button */}
          <Button
            variant="outline"
            onClick={handleSurpriseMe}
            className="font-body text-sm border-amber-200 text-amber-700 hover:bg-amber-50"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Surprise me
          </Button>
        </div>
        <p className="font-body text-muted-foreground mb-10">
          Upload a photo of your pet, pick a style, and download your masterpiece.
        </p>

        {/* Onboarding for first-time users */}
        {isFirstTime && !uploadedFile && (
          <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-xl overflow-hidden portrait-frame shrink-0">
                <img
                  src="/images/hero-before-after.png"
                  alt="Example pet portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-lg text-foreground mb-1">
                  See how it works with a sample photo
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Try our pre-loaded example to see the magic before uploading your own pet's photo.
                </p>
                <Button
                  onClick={handleTryExample}
                  className="font-body bg-primary hover:bg-amber-700 text-primary-foreground"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Try with example photo
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Upload / Multi-pet toggle */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-body text-sm font-semibold text-foreground">
              1. Upload a pet photo
            </h2>
            <button
              onClick={() => {
                setMultiPetMode(!multiPetMode);
                if (!multiPetMode && uploadedFile) {
                  setPets([{ file: uploadedFile, previewUrl: previewUrl || "", name: "Pet 1" }]);
                }
              }}
              className={`font-body text-xs px-3 py-1 rounded-full border transition-all ${
                multiPetMode
                  ? "border-primary bg-amber-50 text-amber-700"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              Multiple pets
            </button>
          </div>

          {multiPetMode ? (
            <MultiPetUpload pets={pets} onPetsChange={setPets} maxPets={3} />
          ) : showCropper && previewUrl ? (
            <PhotoCropper
              imageUrl={previewUrl}
              onCropComplete={handleCropComplete}
              onCancel={() => setShowCropper(false)}
            />
          ) : !previewUrl ? (
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
              <div className={`rounded-2xl overflow-hidden ${currentFrame?.css || ""}`}>
                <img
                  src={previewUrl}
                  alt="Uploaded pet"
                  className="max-h-72 object-cover"
                />
              </div>
              <button
                onClick={clearUpload}
                className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowCropper(true)}
                className="absolute bottom-2 left-2 font-body text-xs bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full border border-black/10"
              >
                Crop & zoom
              </button>
            </div>
          )}
        </div>

        {/* Step 2: Style selector */}
        <div className="mb-10">
          <h2 className="font-body text-sm font-semibold text-foreground mb-3">
            2. Choose a style
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
            {artStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`relative rounded-xl border overflow-hidden transition-all group ${
                  selectedStyle === style.id
                    ? "border-primary ring-2 ring-primary/20 scale-[1.02]"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="aspect-[4/3] gallery-hover">
                  <img
                    src={style.image}
                    alt={`${style.name} style`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <span className="font-body text-sm font-medium text-foreground block">
                    {style.name}
                  </span>
                  <span className="font-body text-xs text-muted-foreground block mt-0.5">
                    {style.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Background + Frame + Intensity */}
        <div className="mb-10">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 font-body text-sm font-semibold text-foreground mb-4 hover:text-primary transition-colors"
          >
            3. Customize (optional)
            {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showAdvanced && (
            <div className="space-y-8 pl-0">
              {/* Background selector */}
              <div>
                <h3 className="font-body text-sm font-medium text-foreground mb-3">
                  Background
                </h3>
                <BackgroundSelector
                  selected={selectedBackground}
                  onSelect={setSelectedBackground}
                />
              </div>

              {/* Frame selector */}
              <div>
                <h3 className="font-body text-sm font-medium text-foreground mb-3">
                  Frame & Border
                </h3>
                <FrameSelector
                  selected={selectedFrame}
                  onSelect={setSelectedFrame}
                />
              </div>

              {/* Style intensity */}
              <StyleIntensitySlider
                value={styleIntensity}
                onChange={setStyleIntensity}
              />
            </div>
          )}
        </div>

        {/* Generate button */}
        <div className="mb-10">
          <Button
            size="lg"
            disabled={(!uploadedFile && pets.length === 0) || !selectedStyle || isGenerating}
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

        {/* Generating state -- show sample while waiting */}
        {isGenerating && showOnboardingSample && (
          <div className="mb-10 p-6 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden portrait-frame animate-pulse">
                <img
                  src={currentStyle?.image || "/images/style-renaissance.png"}
                  alt="Sample result"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-amber-800">
                  Creating your {currentStyle?.name || "portrait"}...
                </p>
                <p className="font-body text-xs text-amber-600">
                  Here is what a {currentStyle?.name?.toLowerCase()} portrait looks like while yours is being crafted.
                </p>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-4 h-2 rounded-full bg-amber-200 overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-[progress_3s_ease-in-out]" style={{ width: "100%" }} />
            </div>
          </div>
        )}

        {/* Result area */}
        {generatedPortrait && (
          <div className="mb-16 space-y-8">
            <h2 className="font-body text-sm font-semibold text-foreground">
              Your portrait
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before/After comparison */}
              {previewUrl && currentStyle && (
                <BeforeAfterSlider
                  beforeImage={previewUrl}
                  afterImage={currentStyle.image}
                  beforeLabel="Your photo"
                  afterLabel={`${currentStyle.name} portrait`}
                />
              )}

              {/* Generated portrait with frame */}
              <Card className="border border-amber-200 bg-amber-50 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`aspect-square relative ${currentFrame?.css || ""}`}>
                    {/* Heart animation on success */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <Heart className="w-16 h-16 text-red-500 fill-red-500 animate-[heartPop_0.6s_ease-out]" />
                    </div>
                    <img
                      src={currentStyle?.image || "/images/style-renaissance.png"}
                      alt={`${currentStyle?.name} portrait of your pet`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-wrap gap-3">
                    <Button className="flex-1 font-body bg-primary hover:bg-amber-700 text-primary-foreground">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      className="font-body"
                      onClick={() => setShowPrintDownload(!showPrintDownload)}
                    >
                      Print sizes
                    </Button>
                    <Button
                      variant="outline"
                      className="font-body"
                      onClick={() => setShowGiftCreator(!showGiftCreator)}
                    >
                      <Gift className="w-4 h-4 mr-2" />
                      Gift
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

            {/* Print-ready download panel */}
            {showPrintDownload && (
              <Card className="border border-border p-6">
                <PrintReadyDownload
                  onDownload={(sizeId) => {
                    console.log("Downloading:", sizeId);
                  }}
                  isPro={false}
                  onUpgrade={() => setShowPaywall(true)}
                />
              </Card>
            )}

            {/* Gift card creator */}
            {showGiftCreator && (
              <Card className="border border-border p-6">
                <GiftCardCreator
                  portraitStyleName={currentStyle?.name || "Portrait"}
                  onSend={(data) => console.log("Gift sent:", data)}
                />
              </Card>
            )}
          </div>
        )}

        {/* My Portraits / Favorites Gallery */}
        <div>
          <h2 className="font-display text-2xl text-foreground mb-6">
            My Portraits
          </h2>
          <FavoritesGallery
            portraits={portraits}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </main>

      <PaywallModal open={showPaywall} onOpenChange={setShowPaywall} />
    </div>
  );
};

export default Dashboard;

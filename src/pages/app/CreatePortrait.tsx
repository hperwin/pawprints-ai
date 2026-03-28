import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Download,
  Sparkles,
  X,
  Shuffle,
  Gift,
  Heart,
  ChevronDown,
  ChevronUp,
  Lock,
  Crown,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUserStore } from "@/lib/stores/user-store";
import ProGate from "@/components/pro/ProGate";
import BackgroundSelector from "@/components/dashboard/BackgroundSelector";
import FrameSelector, { frames } from "@/components/dashboard/FrameSelector";
import StyleIntensitySlider from "@/components/dashboard/StyleIntensitySlider";
import BeforeAfterSlider from "@/components/dashboard/BeforeAfterSlider";

const artStyles = [
  { id: "renaissance", name: "Renaissance", description: "Oil painting, regal pose", image: "/images/style-renaissance.png", free: true },
  { id: "watercolor", name: "Watercolor", description: "Soft, dreamy washes", image: "/images/style-watercolor.png", free: true },
  { id: "anime", name: "Anime", description: "Manga-style, vibrant", image: "/images/style-anime.png", free: true },
  { id: "pop-art", name: "Pop Art", description: "Bold, Warhol vibes", image: "/images/style-pop-art.png", free: false },
  { id: "memorial", name: "Memorial", description: "Gentle tribute", image: "/images/style-memorial.png", free: false },
  { id: "oil-painting", name: "Oil Painting", description: "Classic, dignified", image: "/images/style-renaissance.png", free: false },
  { id: "cartoon", name: "Cartoon", description: "Clean lines, fun", image: "/images/style-anime.png", free: false },
  { id: "impressionist", name: "Impressionist", description: "Monet-inspired", image: "/images/style-watercolor.png", free: false },
];

const CreatePortrait = () => {
  const { plan, creditsRemaining, deductCredit, addPortrait } = useUserStore();
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPortrait, setGeneratedPortrait] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState<string | null>("studio");
  const [selectedFrame, setSelectedFrame] = useState<string | null>("gold-ornate");
  const [styleIntensity, setStyleIntensity] = useState(65);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

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

  const handleGenerate = () => {
    if (!uploadedFile || !selectedStyle) return;
    setIsGenerating(true);
    setGenerationProgress(0);

    // Simulate blur-to-sharp painting animation
    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    setTimeout(() => {
      clearInterval(interval);
      setGenerationProgress(100);
      setIsGenerating(false);
      setGeneratedPortrait(true);
      setShowHearts(true);
      deductCredit();

      const style = artStyles.find((s) => s.id === selectedStyle);
      addPortrait({
        id: `portrait-${Date.now()}`,
        style: style?.name || "Portrait",
        imageUrl: style?.image || "/images/style-renaissance.png",
        createdAt: "Just now",
        isFavorite: false,
      });

      setTimeout(() => setShowHearts(false), 1500);
    }, 3000);
  };

  const handleSurpriseMe = () => {
    const freeStyles = plan === "pro" ? artStyles : artStyles.filter((s) => s.free);
    const randomStyle = freeStyles[Math.floor(Math.random() * freeStyles.length)];
    setSelectedStyle(randomStyle.id);
  };

  const clearUpload = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
    setGeneratedPortrait(false);
    setSelectedStyle(null);
  };

  const currentStyle = artStyles.find((s) => s.id === selectedStyle);
  const currentFrame = frames.find((f) => f.id === selectedFrame);

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-2">
        <motion.h1
          className="font-display text-3xl md:text-4xl text-foreground"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Create a portrait
        </motion.h1>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="outline"
            onClick={handleSurpriseMe}
            className="font-body text-sm border-amber-200 text-amber-700 hover:bg-amber-50"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Surprise me
          </Button>
        </motion.div>
      </div>
      <p className="font-body text-muted-foreground mb-10">
        Upload a photo of your pet, pick a style, and download your masterpiece.
      </p>

      {/* Step 1: Upload */}
      <div className="mb-10">
        <h2 className="font-body text-sm font-semibold text-foreground mb-3">
          1. Upload a pet photo
        </h2>

        {!previewUrl ? (
          <motion.div
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onClick={() => document.getElementById("file-input")?.click()}
            className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-colors ${
              isDragOver
                ? "border-primary bg-amber-50"
                : "border-border hover:border-primary/50 hover:bg-muted/30"
            }`}
            animate={isDragOver ? { scale: 1.01 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated dashes on drag */}
            {isDragOver && (
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ borderStyle: "dashed" }}
              />
            )}
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
            <p className="font-body text-sm text-muted-foreground mb-4">
              or click to browse. Front-facing photos with good lighting work best.
            </p>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm" className="font-body text-xs">
                <Camera className="w-3.5 h-3.5 mr-1.5" />
                Take a photo
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`rounded-2xl overflow-hidden ${currentFrame?.css || ""}`}>
              <img src={previewUrl} alt="Uploaded pet" className="max-h-72 object-cover" />
            </div>
            <motion.button
              onClick={clearUpload}
              className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Step 2: Style selector */}
      <div className="mb-10">
        <h2 className="font-body text-sm font-semibold text-foreground mb-3">
          2. Choose a style
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {artStyles.map((style) => {
            const locked = !style.free && plan === "free";
            return (
              <motion.button
                key={style.id}
                onClick={() => !locked && setSelectedStyle(style.id)}
                className={`relative rounded-xl border overflow-hidden transition-all group ${
                  selectedStyle === style.id
                    ? "border-primary ring-2 ring-primary/20"
                    : locked
                    ? "border-border opacity-80"
                    : "border-border bg-card hover:border-primary/50"
                }`}
                whileHover={{ scale: locked ? 1 : 1.02 }}
                whileTap={{ scale: locked ? 1 : 0.98 }}
                transition={{ duration: 0.18 }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    src={style.image}
                    alt={`${style.name} style`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: locked ? 1 : 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  {locked && (
                    <div className="absolute inset-0 bg-amber-50/60 backdrop-blur-[2px] flex items-center justify-center">
                      <Lock className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                    </div>
                  )}
                  {/* Selection checkmark */}
                  <AnimatePresence>
                    {selectedStyle === style.id && (
                      <motion.div
                        className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      >
                        <motion.svg
                          viewBox="0 0 24 24"
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <motion.path
                            d="M5 13l4 4L19 7"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          />
                        </motion.svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-3 flex items-start justify-between">
                  <div>
                    <span className="font-body text-sm font-medium text-foreground block">
                      {style.name}
                    </span>
                    <span className="font-body text-xs text-muted-foreground block mt-0.5">
                      {style.description}
                    </span>
                  </div>
                  {locked && (
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-amber-200 text-amber-600 shrink-0">
                      <Crown className="w-2.5 h-2.5 mr-0.5" />
                      Pro
                    </Badge>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Customize */}
      <div className="mb-10">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 font-body text-sm font-semibold text-foreground mb-4 hover:text-primary transition-colors"
        >
          3. Customize (optional)
          <motion.div
            animate={{ rotate: showAdvanced ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              className="space-y-8"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ProGate feature="Custom Backgrounds" description="Choose from studio, outdoor, fantasy, and seasonal backgrounds.">
                <BackgroundSelector selected={selectedBackground} onSelect={setSelectedBackground} />
              </ProGate>

              <ProGate feature="Frame Options" description="Gold ornate, rustic wood, floating shadow, and more.">
                <FrameSelector selected={selectedFrame} onSelect={setSelectedFrame} />
              </ProGate>

              <ProGate feature="Style Intensity" description="Fine-tune how strongly the art style is applied.">
                <StyleIntensitySlider value={styleIntensity} onChange={setStyleIntensity} />
              </ProGate>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Generate button */}
      <div className="mb-10">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            size="lg"
            disabled={!uploadedFile || !selectedStyle || isGenerating || (plan === "free" && creditsRemaining <= 0)}
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
        </motion.div>
        {plan === "free" && creditsRemaining <= 0 && (
          <p className="font-body text-sm text-amber-700 mt-2">
            You've used all free portraits.{" "}
            <a href="/app/pricing" className="underline font-medium">
              Upgrade to Pro
            </a>{" "}
            for unlimited.
          </p>
        )}
      </div>

      {/* Generation animation -- blur to sharp painting effect */}
      <AnimatePresence>
        {isGenerating && currentStyle && (
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border border-amber-200 bg-amber-50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <motion.img
                    src={currentStyle.image}
                    alt="Generating..."
                    className="w-full h-full object-cover"
                    animate={{
                      filter: `blur(${Math.max(0, 20 - generationProgress * 0.2)}px)`,
                    }}
                    transition={{ duration: 0.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-50/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-body text-sm font-medium text-amber-800 mb-2">
                      Creating your {currentStyle.name} portrait...
                    </p>
                    <div className="h-2 rounded-full bg-amber-200 overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        animate={{ width: `${generationProgress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result area */}
      <AnimatePresence>
        {generatedPortrait && currentStyle && (
          <motion.div
            className="mb-16 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-body text-sm font-semibold text-foreground">
              Your portrait
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {previewUrl && (
                <BeforeAfterSlider
                  beforeImage={previewUrl}
                  afterImage={currentStyle.image}
                  beforeLabel="Your photo"
                  afterLabel={`${currentStyle.name} portrait`}
                />
              )}

              <Card className="border border-amber-200 bg-amber-50 overflow-hidden relative">
                <CardContent className="p-0">
                  <div className={`aspect-square relative ${currentFrame?.css || ""}`}>
                    {/* Heart particle burst */}
                    <AnimatePresence>
                      {showHearts && (
                        <>
                          {Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute z-10 pointer-events-none"
                              style={{
                                left: "50%",
                                top: "50%",
                              }}
                              initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                              animate={{
                                scale: [0, 1.2, 0.8],
                                x: Math.cos((i * Math.PI * 2) / 8) * 80,
                                y: Math.sin((i * Math.PI * 2) / 8) * 80,
                                opacity: [1, 1, 0],
                              }}
                              transition={{
                                duration: 0.8,
                                delay: i * 0.05,
                                ease: "easeOut",
                              }}
                            >
                              <Heart
                                className="w-5 h-5 text-rose-400 fill-rose-400"
                              />
                            </motion.div>
                          ))}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.3, 1, 0] }}
                            transition={{ duration: 0.6 }}
                          >
                            <Heart className="w-16 h-16 text-rose-500 fill-rose-500" />
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                    <img
                      src={currentStyle.image}
                      alt={`${currentStyle.name} portrait`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-wrap gap-3">
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full font-body bg-primary hover:bg-amber-700 text-primary-foreground">
                        <motion.div
                          whileTap={{ y: 3 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Download className="w-4 h-4 mr-2 inline" />
                        </motion.div>
                        Download
                      </Button>
                    </motion.div>
                    <Button variant="outline" className="font-body">
                      <Gift className="w-4 h-4 mr-2" />
                      Gift
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreatePortrait;

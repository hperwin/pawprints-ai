import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const InteractiveDemo = () => {
  const [phase, setPhase] = useState<"idle" | "generating" | "done">("idle");
  const [progress, setProgress] = useState(0);

  const handleTry = () => {
    if (phase === "done") {
      setPhase("idle");
      setProgress(0);
      return;
    }
    setPhase("generating");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setPhase("done");
    }, 3000);
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            See the magic in real time
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            Click "Try it" and watch a photo transform into a Renaissance
            masterpiece -- live, right here.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="aspect-square rounded-2xl overflow-hidden relative bg-card border border-border">
            {/* Original photo (always visible underneath) */}
            <img
              src="/images/hero-before-after.png"
              alt="Pet photo"
              className="w-full h-full object-cover absolute inset-0"
            />

            {/* Portrait overlaid with blur-to-sharp animation */}
            <AnimatePresence>
              {(phase === "generating" || phase === "done") && (
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src="/images/style-renaissance.png"
                    alt="Renaissance portrait"
                    className="w-full h-full object-cover"
                    animate={{
                      filter:
                        phase === "generating"
                          ? `blur(${Math.max(0, 20 - progress * 0.2)}px)`
                          : "blur(0px)",
                    }}
                    transition={{ duration: 0.1 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress overlay */}
            {phase === "generating" && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <p className="font-body text-sm text-white mb-2">
                  Painting your portrait...
                </p>
                <div className="h-1.5 rounded-full bg-white/30 overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-400 rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
            )}

            {/* Frame overlay on completion */}
            {phase === "done" && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-full h-full portrait-frame-gold" />
              </motion.div>
            )}
          </div>

          {/* CTA button */}
          <div className="flex justify-center mt-6">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleTry}
                size="lg"
                disabled={phase === "generating"}
                className={`font-body text-base px-8 py-6 ${
                  phase === "done"
                    ? "bg-muted text-foreground hover:bg-muted/80"
                    : "bg-primary hover:bg-amber-700 text-primary-foreground"
                } shadow-lg shadow-amber-600/20`}
              >
                {phase === "idle" && (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Try it -- watch the transformation
                  </>
                )}
                {phase === "generating" && (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                    Painting...
                  </>
                )}
                {phase === "done" && (
                  <>
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Try again
                  </>
                )}
              </Button>
            </motion.div>
          </div>

          {phase === "done" && (
            <motion.p
              className="text-center font-body text-sm text-muted-foreground mt-3"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <a
                href="/signup"
                className="text-primary hover:underline font-medium"
              >
                Create one of your own pet -- it's free
              </a>
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;

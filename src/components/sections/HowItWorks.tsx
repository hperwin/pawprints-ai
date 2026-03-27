import { Upload, Palette, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload a photo",
    description: "Front-facing, good lighting. That one where they're looking right at you? Perfect.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Pick a style",
    description: "Renaissance noble? Anime hero? Pop art icon? Choose and we'll handle the rest.",
  },
  {
    icon: Download,
    number: "03",
    title: "Download your portrait",
    description: "High-res, print-ready, and frame-worthy. Ready in under 60 seconds.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Three steps. Sixty seconds. One masterpiece.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            No artistic skill required. No 2-week wait for commission art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100 border border-amber-200 mb-6 relative z-10">
                <step.icon className="w-7 h-7 text-amber-700" />
              </div>
              <div className="font-body text-xs font-medium text-amber-600 tracking-widest uppercase mb-2">
                Step {step.number}
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

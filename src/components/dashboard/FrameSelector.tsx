interface FrameSelectorProps {
  selected: string | null;
  onSelect: (id: string) => void;
}

const frames = [
  {
    id: "none",
    name: "No Frame",
    css: "",
    preview: "border border-border",
  },
  {
    id: "gold-ornate",
    name: "Gold Ornate",
    css: "portrait-frame-gold",
    preview: "border-4 border-amber-500 shadow-lg shadow-amber-600/20",
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    css: "portrait-frame-minimal",
    preview: "border-2 border-stone-400",
  },
  {
    id: "rustic-wood",
    name: "Rustic Wood",
    css: "portrait-frame-rustic",
    preview: "border-4 border-amber-800 shadow-md",
  },
  {
    id: "floating",
    name: "Floating",
    css: "portrait-frame-floating",
    preview: "shadow-xl shadow-black/15 rounded-sm",
  },
  {
    id: "gallery-mat",
    name: "Gallery Mat",
    css: "portrait-frame-lg",
    preview: "border-[8px] border-white shadow-md ring-1 ring-stone-200",
  },
];

const FrameSelector = ({ selected, onSelect }: FrameSelectorProps) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
      {frames.map((frame) => (
        <button
          key={frame.id}
          onClick={() => onSelect(frame.id)}
          className={`relative rounded-xl p-3 border-2 transition-all text-center ${
            selected === frame.id
              ? "border-primary bg-amber-50 ring-2 ring-primary/20"
              : "border-border bg-card hover:border-primary/50"
          }`}
        >
          <div className="mx-auto mb-2 w-14 h-14 bg-amber-100 flex items-center justify-center">
            <div className={`w-10 h-10 bg-amber-200 ${frame.preview}`} />
          </div>
          <span className="font-body text-[11px] font-medium text-foreground block">
            {frame.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export { frames };
export default FrameSelector;

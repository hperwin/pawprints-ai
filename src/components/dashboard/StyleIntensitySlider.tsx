import { Slider } from "@/components/ui/slider";
import { Paintbrush } from "lucide-react";

interface StyleIntensitySliderProps {
  value: number;
  onChange: (value: number) => void;
}

const StyleIntensitySlider = ({ value, onChange }: StyleIntensitySliderProps) => {
  const getLabel = () => {
    if (value < 25) return "Subtle";
    if (value < 50) return "Light";
    if (value < 75) return "Medium";
    return "Bold";
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Paintbrush className="w-4 h-4 text-amber-700" />
          <span className="font-body text-sm font-medium text-foreground">
            Style intensity
          </span>
        </div>
        <span className="font-body text-sm text-amber-700 font-medium">
          {getLabel()} ({value}%)
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-body text-xs text-muted-foreground w-16">Realistic</span>
        <Slider
          value={[value]}
          min={0}
          max={100}
          step={5}
          onValueChange={([v]) => onChange(v)}
          className="flex-1"
        />
        <span className="font-body text-xs text-muted-foreground w-16 text-right">Stylized</span>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-1">
          {[0, 25, 50, 75, 100].map((tick) => (
            <div
              key={tick}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                value >= tick ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleIntensitySlider;

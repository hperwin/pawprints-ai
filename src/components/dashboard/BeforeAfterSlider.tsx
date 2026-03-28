import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Original",
  afterLabel = "Portrait",
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragging) updatePosition(e.clientX);
  }, [dragging, updatePosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square rounded-xl overflow-hidden cursor-ew-resize select-none border border-border"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: containerRef.current?.offsetWidth || "100%" }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-2 border-amber-400 flex items-center justify-center">
          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3">
        <span className="font-body text-xs font-medium bg-black/60 text-white px-2 py-1 rounded-full">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute bottom-3 right-3">
        <span className="font-body text-xs font-medium bg-primary/90 text-white px-2 py-1 rounded-full">
          {afterLabel}
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

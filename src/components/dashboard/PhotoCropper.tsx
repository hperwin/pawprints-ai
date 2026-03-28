import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ZoomIn, ZoomOut, Check, RotateCcw } from "lucide-react";

interface PhotoCropperProps {
  imageUrl: string;
  onCropComplete: (croppedUrl: string) => void;
  onCancel: () => void;
}

const PhotoCropper = ({ imageUrl, onCropComplete, onCancel }: PhotoCropperProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      setImageLoaded(true);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 400;
    canvas.width = size;
    canvas.height = size;

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "hsl(30 33% 97%)";
    ctx.fillRect(0, 0, size, size);

    const scale = Math.max(size / img.width, size / img.height) * zoom;
    const w = img.width * scale;
    const h = img.height * scale;
    const x = (size - w) / 2 + offset.x;
    const y = (size - h) / 2 + offset.y;

    ctx.drawImage(img, x, y, w, h);

    // Draw circular guide overlay
    ctx.save();
    ctx.globalCompositeOperation = "destination-in";
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Draw border ring
    ctx.strokeStyle = "hsl(38 55% 65%)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 8, 0, Math.PI * 2);
    ctx.stroke();
  }, [zoom, offset, imageLoaded]);

  useEffect(() => {
    draw();
  }, [draw]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setDragging(false);

  const handleCrop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    onCropComplete(url);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="font-display text-lg text-foreground mb-1">
          Focus on your pet's face
        </h3>
        <p className="font-body text-sm text-muted-foreground">
          Zoom and drag to center the best part of the photo.
        </p>
      </div>

      <div className="flex justify-center">
        <div
          className="relative cursor-grab active:cursor-grabbing rounded-full overflow-hidden"
          style={{ width: 400, height: 400, maxWidth: "100%" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%" }}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 max-w-xs mx-auto">
        <ZoomOut className="w-4 h-4 text-muted-foreground shrink-0" />
        <Slider
          value={[zoom * 100]}
          min={100}
          max={300}
          step={5}
          onValueChange={([v]) => setZoom(v / 100)}
          className="flex-1"
        />
        <ZoomIn className="w-4 h-4 text-muted-foreground shrink-0" />
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button variant="outline" onClick={onCancel} className="font-body">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
        <Button
          onClick={handleCrop}
          className="font-body bg-primary hover:bg-amber-700 text-primary-foreground"
        >
          <Check className="w-4 h-4 mr-2" />
          Use this crop
        </Button>
      </div>
    </div>
  );
};

export default PhotoCropper;

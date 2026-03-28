import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Printer } from "lucide-react";

const printSizes = [
  { id: "5x7", label: '5" x 7"', pixels: "1500 x 2100", dpi: 300, popular: false },
  { id: "8x10", label: '8" x 10"', pixels: "2400 x 3000", dpi: 300, popular: true },
  { id: "11x14", label: '11" x 14"', pixels: "3300 x 4200", dpi: 300, popular: false },
  { id: "16x20", label: '16" x 20"', pixels: "4800 x 6000", dpi: 300, popular: true },
  { id: "square", label: "Square (1:1)", pixels: "3000 x 3000", dpi: 300, popular: false },
];

interface PrintReadyDownloadProps {
  onDownload: (sizeId: string) => void;
  isPro: boolean;
  onUpgrade: () => void;
}

const PrintReadyDownload = ({ onDownload, isPro, onUpgrade }: PrintReadyDownloadProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Printer className="w-5 h-5 text-amber-700" />
        <h3 className="font-display text-lg text-foreground">Print-Ready Download</h3>
        <Badge className="bg-amber-100 text-amber-800 border border-amber-200 font-body text-[10px]">
          300 DPI
        </Badge>
      </div>
      <p className="font-body text-sm text-muted-foreground">
        Download in standard frame sizes, ready for your local print shop or online printer.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {printSizes.map((size) => (
          <button
            key={size.id}
            onClick={() => isPro ? onDownload(size.id) : onUpgrade()}
            className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group"
          >
            <div className="text-left">
              <span className="font-body text-sm font-medium text-foreground block">
                {size.label}
              </span>
              <span className="font-body text-xs text-muted-foreground">
                {size.pixels} @ {size.dpi} DPI
              </span>
            </div>
            <div className="flex items-center gap-2">
              {size.popular && (
                <Badge variant="outline" className="font-body text-[10px] border-amber-200 text-amber-700">
                  Popular
                </Badge>
              )}
              {isPro ? (
                <Download className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              ) : (
                <Badge className="bg-primary text-primary-foreground font-body text-[10px]">Pro</Badge>
              )}
            </div>
          </button>
        ))}
      </div>

      {!isPro && (
        <div className="text-center pt-2">
          <Button
            onClick={onUpgrade}
            className="font-body bg-primary hover:bg-amber-700 text-primary-foreground"
          >
            Upgrade to Pro for print-ready downloads
          </Button>
        </div>
      )}
    </div>
  );
};

export default PrintReadyDownload;

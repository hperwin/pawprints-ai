import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Printer, Check, Download, Frame, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUserStore } from "@/lib/stores/user-store";
import ProGate from "@/components/pro/ProGate";

const printSizes = [
  { id: "5x7", label: '5" x 7"', price: "Free", priceNum: 0, description: "Desk size" },
  { id: "8x10", label: '8" x 10"', price: "Free", priceNum: 0, description: "Standard frame" },
  { id: "11x14", label: '11" x 14"', price: "$4.99", priceNum: 4.99, description: "Gallery size" },
  { id: "16x20", label: '16" x 20"', price: "$9.99", priceNum: 9.99, description: "Statement piece" },
  { id: "24x36", label: '24" x 36"', price: "$14.99", priceNum: 14.99, description: "Full wall art" },
];

const roomBackgrounds = [
  { id: "living-room", label: "Living Room", color: "bg-amber-50" },
  { id: "bedroom", label: "Bedroom", color: "bg-blue-50" },
  { id: "office", label: "Office", color: "bg-gray-50" },
  { id: "hallway", label: "Hallway", color: "bg-stone-50" },
];

const PrintShop = () => {
  const { portraits, plan } = useUserStore();
  const [selectedPortrait, setSelectedPortrait] = useState<string | null>(
    portraits[0]?.id || null
  );
  const [selectedSize, setSelectedSize] = useState("8x10");
  const [selectedRoom, setSelectedRoom] = useState("living-room");

  const portrait = portraits.find((p) => p.id === selectedPortrait);
  const size = printSizes.find((s) => s.id === selectedSize);

  const content = (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <motion.h1
        className="font-display text-3xl md:text-4xl text-foreground mb-2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Print Shop
      </motion.h1>
      <p className="font-body text-muted-foreground mb-8">
        Download print-ready files at 300 DPI. Frame and hang your masterpiece.
      </p>

      {portraits.length === 0 ? (
        <div className="text-center py-16">
          <Printer className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" strokeWidth={1} />
          <p className="font-body text-muted-foreground mb-4">
            Create a portrait first, then come back to print it.
          </p>
          <Button variant="outline" className="font-body" asChild>
            <a href="/app/create">Create a portrait</a>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Portrait selection + room preview */}
          <div className="space-y-6">
            {/* Portrait selector */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-3 block">
                Select a portrait
              </label>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {portraits.map((p) => (
                  <motion.button
                    key={p.id}
                    onClick={() => setSelectedPortrait(p.id)}
                    className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedPortrait === p.id
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-primary/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={p.imageUrl} alt={p.style} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Room preview mockup */}
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-3 block">
                Preview in room
              </label>
              <div
                className={`aspect-[16/10] rounded-xl ${
                  roomBackgrounds.find((r) => r.id === selectedRoom)?.color
                } border border-border flex items-center justify-center relative overflow-hidden`}
              >
                {/* Wall texture */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.05),transparent_60%)]" />
                {/* Portrait on wall */}
                {portrait && (
                  <motion.div
                    className="portrait-frame-gold"
                    animate={{
                      width: selectedSize === "5x7" ? "20%" : selectedSize === "8x10" ? "28%" : selectedSize === "11x14" ? "36%" : selectedSize === "16x20" ? "45%" : "55%",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <img
                      src={portrait.imageUrl}
                      alt={portrait.style}
                      className="w-full aspect-[4/5] object-cover"
                    />
                  </motion.div>
                )}
                {/* Room label */}
                <div className="absolute bottom-3 right-3">
                  <Badge variant="outline" className="font-body text-[10px] bg-white/80 backdrop-blur-sm">
                    {roomBackgrounds.find((r) => r.id === selectedRoom)?.label}
                  </Badge>
                </div>
              </div>
              {/* Room selector */}
              <div className="flex gap-2 mt-3">
                {roomBackgrounds.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room.id)}
                    className={`px-3 py-1.5 rounded-full font-body text-xs transition-all ${
                      selectedRoom === room.id
                        ? "bg-amber-100 text-amber-800 font-medium"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {room.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Size selection + download */}
          <div className="space-y-6">
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-3 block">
                Print size
              </label>
              <div className="space-y-2">
                {printSizes.map((s) => (
                  <motion.button
                    key={s.id}
                    onClick={() => setSelectedSize(s.id)}
                    className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                      selectedSize === s.id
                        ? "border-primary bg-amber-50 ring-2 ring-primary/20"
                        : "border-border hover:border-primary/50"
                    }`}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="flex items-center gap-3">
                      {selectedSize === s.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                        >
                          <Check className="w-4 h-4 text-primary" />
                        </motion.div>
                      )}
                      <div>
                        <span className="font-body text-sm font-medium text-foreground block">
                          {s.label}
                        </span>
                        <span className="font-body text-xs text-muted-foreground">
                          {s.description}
                        </span>
                      </div>
                    </div>
                    <span className="font-body text-sm font-semibold text-foreground">
                      {s.price}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Download */}
            <Card className="border border-amber-200 bg-amber-50">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      {size?.label} print-ready file
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      300 DPI, ready for professional printing
                    </p>
                  </div>
                  <span className="font-display text-2xl text-foreground">
                    {size?.price}
                  </span>
                </div>
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button className="w-full font-body bg-primary hover:bg-amber-700 text-primary-foreground">
                    <motion.div whileTap={{ y: 3 }} transition={{ duration: 0.15 }}>
                      <Download className="w-4 h-4 mr-2 inline" />
                    </motion.div>
                    Download print file
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );

  if (plan === "free") {
    return (
      <div className="container mx-auto px-6 py-8 max-w-5xl">
        <motion.h1
          className="font-display text-3xl md:text-4xl text-foreground mb-2"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Print Shop
        </motion.h1>
        <p className="font-body text-muted-foreground mb-8">
          Download print-ready files at 300 DPI. Frame and hang your masterpiece.
        </p>
        <ProGate
          feature="Print-Ready Downloads"
          description="Get 300 DPI files sized for professional printing, from 5x7 desk frames to 24x36 statement pieces."
          className="min-h-[400px] rounded-xl"
        >
          {content}
        </ProGate>
      </div>
    );
  }

  return content;
};

export default PrintShop;

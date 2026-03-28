import { motion } from "framer-motion";
import { Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyGiftsProps {
  onCreateGift: () => void;
}

const EmptyGifts = ({ onCreateGift }: EmptyGiftsProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-24 h-24 rounded-full bg-amber-50 flex items-center justify-center mb-6 relative">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Gift className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
        </motion.div>
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
        </motion.div>
      </div>
      <h3 className="font-display text-2xl text-foreground mb-2">
        Share the love
      </h3>
      <p className="font-body text-muted-foreground max-w-sm mb-6">
        Know someone who adores their pet? Send them a portrait gift card --
        they choose the style, you get the credit.
      </p>
      <Button
        onClick={onCreateGift}
        className="font-body bg-primary hover:bg-amber-700 text-primary-foreground"
      >
        <Gift className="w-4 h-4 mr-2" />
        Send your first gift
      </Button>
    </motion.div>
  );
};

export default EmptyGifts;

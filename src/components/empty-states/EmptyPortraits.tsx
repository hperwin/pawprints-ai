import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImagePlus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmptyPortraits = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-24 h-24 rounded-full bg-amber-50 flex items-center justify-center mb-6">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <ImagePlus className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
        </motion.div>
      </div>
      <h3 className="font-display text-2xl text-foreground mb-2">
        Your gallery awaits
      </h3>
      <p className="font-body text-muted-foreground max-w-sm mb-6">
        Every masterpiece starts with a single photo. Upload a picture of your
        pet and watch the magic happen.
      </p>
      <Link to="/app/create">
        <Button className="font-body bg-primary hover:bg-amber-700 text-primary-foreground">
          <Sparkles className="w-4 h-4 mr-2" />
          Create your first portrait
        </Button>
      </Link>
    </motion.div>
  );
};

export default EmptyPortraits;

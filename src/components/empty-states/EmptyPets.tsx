import { motion } from "framer-motion";
import { PawPrint, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyPetsProps {
  onAddPet: () => void;
}

const EmptyPets = ({ onAddPet }: EmptyPetsProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-24 h-24 rounded-full bg-amber-50 flex items-center justify-center mb-6 relative">
        <motion.div
          animate={{ rotate: [0, 10, -10, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <PawPrint className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
        </motion.div>
        {/* Small paw prints scattered */}
        {[
          { x: -30, y: -20, scale: 0.4, delay: 0 },
          { x: 25, y: -15, scale: 0.3, delay: 0.5 },
          { x: -15, y: 25, scale: 0.35, delay: 1 },
        ].map((paw, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `calc(50% + ${paw.x}px)`, top: `calc(50% + ${paw.y}px)` }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: paw.delay,
              ease: "easeInOut",
            }}
          >
            <PawPrint
              className="text-amber-300"
              style={{ width: `${paw.scale * 40}px`, height: `${paw.scale * 40}px` }}
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </div>
      <h3 className="font-display text-2xl text-foreground mb-2">
        Add your best friend
      </h3>
      <p className="font-body text-muted-foreground max-w-sm mb-6">
        Save your pet's details and photo for faster portrait creation. Name,
        breed, age -- everything in one place.
      </p>
      <Button
        onClick={onAddPet}
        className="font-body bg-primary hover:bg-amber-700 text-primary-foreground"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add your first pet
      </Button>
    </motion.div>
  );
};

export default EmptyPets;

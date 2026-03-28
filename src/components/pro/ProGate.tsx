import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Crown, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/stores/user-store";
import { Link } from "react-router-dom";

interface ProGateProps {
  children: React.ReactNode;
  feature: string;
  description?: string;
  /** Allow one free trial use */
  allowTrial?: boolean;
  onTrialUse?: () => void;
  className?: string;
}

const ProGate = ({
  children,
  feature,
  description,
  allowTrial = true,
  onTrialUse,
  className = "",
}: ProGateProps) => {
  const plan = useUserStore((s) => s.plan);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [trialUsed, setTrialUsed] = useState(false);

  if (plan === "pro" || trialUsed) {
    return <>{children}</>;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Blurred content */}
      <div className="pointer-events-none select-none">
        <div className="blur-[3px] opacity-60">{children}</div>
      </div>

      {/* Lock overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center cursor-pointer rounded-xl bg-gradient-to-b from-amber-50/40 to-amber-100/60 backdrop-blur-[1px]"
        onClick={() => setShowUpgrade(true)}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-center p-4"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.4 }}
          >
            <Lock className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
          </motion.div>
          <span className="font-body text-sm font-medium text-amber-800">
            {feature}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-body text-xs font-medium">
            <Crown className="w-3 h-3" />
            Pro
          </span>
        </motion.div>
      </div>

      {/* Upgrade panel */}
      <AnimatePresence>
        {showUpgrade && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-2xl border border-amber-200 shadow-xl shadow-amber-600/10 p-6 max-w-xs w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-amber-600" />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowUpgrade(false);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h4 className="font-display text-lg text-foreground mb-1">
                Unlock {feature}
              </h4>
              {description && (
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {description}
                </p>
              )}

              <div className="space-y-2">
                <Link to="/app/pricing">
                  <Button className="w-full font-body bg-primary hover:bg-amber-700 text-primary-foreground">
                    <Crown className="w-4 h-4 mr-2" />
                    Upgrade to Pro -- $14.99/mo
                  </Button>
                </Link>

                {allowTrial && (
                  <Button
                    variant="outline"
                    className="w-full font-body border-amber-200 text-amber-700 hover:bg-amber-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTrialUsed(true);
                      setShowUpgrade(false);
                      onTrialUse?.();
                    }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Try once free
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProGate;

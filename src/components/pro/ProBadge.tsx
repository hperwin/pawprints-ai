import { Crown } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "@/lib/stores/user-store";

interface ProBadgeProps {
  className?: string;
}

const ProBadge = ({ className = "" }: ProBadgeProps) => {
  const plan = useUserStore((s) => s.plan);

  if (plan !== "pro") return null;

  return (
    <motion.span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-body text-xs font-medium bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border border-amber-300 ${className}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Crown className="w-3 h-3" />
      Pro
    </motion.span>
  );
};

export default ProBadge;

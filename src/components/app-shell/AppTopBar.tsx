import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Crown,
  LogOut,
  Settings,
  User,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUserStore } from "@/lib/stores/user-store";

const routeLabels: Record<string, string> = {
  "/app/create": "Create Portrait",
  "/app/gallery": "My Portraits",
  "/app/gifts": "Gift Center",
  "/app/print-shop": "Print Shop",
  "/app/pets": "Pet Profiles",
  "/app/settings": "Settings",
  "/app/pricing": "Pricing",
  "/app/help": "Help",
  "/app/changelog": "Changelog",
};

const AppTopBar = () => {
  const location = useLocation();
  const { plan, creditsRemaining, displayName } = useUserStore();

  const pageLabel = routeLabels[location.pathname] || "Dashboard";

  return (
    <header className="sticky top-0 z-30 h-14 bg-card/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-sm">
        <Link
          to="/app/create"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          PawPrints
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
        <span className="text-foreground font-medium">{pageLabel}</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Credits / Plan badge */}
        {plan === "free" ? (
          <Link to="/app/pricing">
            <Badge
              variant="outline"
              className="font-body text-xs border-amber-200 text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer"
            >
              {creditsRemaining} portrait{creditsRemaining !== 1 ? "s" : ""}{" "}
              left
            </Badge>
          </Link>
        ) : (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Badge className="font-body text-xs bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border border-amber-300 shadow-[0_0_8px_rgba(217,119,6,0.2)]">
              <Crown className="w-3 h-3 mr-1" />
              Pro
            </Badge>
          </motion.div>
        )}

        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-muted/50 transition-colors">
              <Avatar className="w-7 h-7">
                <AvatarFallback className="bg-amber-100 text-amber-700 font-body text-xs">
                  {displayName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 font-body">
            <DropdownMenuItem asChild>
              <Link to="/app/settings" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/app/pricing" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Subscription
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/app/settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/app/help" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Help
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/" className="flex items-center gap-2 text-destructive">
                <LogOut className="w-4 h-4" />
                Log out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppTopBar;

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, Images, Gift, User, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Printer, PawPrint, Settings, HelpCircle, CreditCard } from "lucide-react";

const tabs = [
  { to: "/app/create", icon: Palette, label: "Create" },
  { to: "/app/gallery", icon: Images, label: "Gallery" },
  { to: "/app/gifts", icon: Gift, label: "Gifts" },
  { to: "/app/pets", icon: User, label: "Profile" },
];

const MobileNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const active = isActive(tab.to);
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className="flex flex-col items-center gap-0.5 py-1 min-w-[56px]"
            >
              <div className="relative">
                <tab.icon
                  className={`w-5 h-5 transition-colors ${
                    active ? "text-amber-600" : "text-muted-foreground"
                  }`}
                  strokeWidth={active ? 2 : 1.5}
                />
                {active && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"
                    layoutId="mobile-tab-indicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
              <span
                className={`font-body text-[10px] ${
                  active
                    ? "text-amber-700 font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}

        {/* More menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex flex-col items-center gap-0.5 py-1 min-w-[56px]">
              <MoreHorizontal className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
              <span className="font-body text-[10px] text-muted-foreground">
                More
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top" className="w-48 font-body mb-2">
            <DropdownMenuItem asChild>
              <Link to="/app/print-shop" className="flex items-center gap-2">
                <Printer className="w-4 h-4" />
                Print Shop
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/app/pets" className="flex items-center gap-2">
                <PawPrint className="w-4 h-4" />
                Pet Profiles
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/app/pricing" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Pricing
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default MobileNav;

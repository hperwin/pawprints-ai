import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Images,
  Gift,
  Printer,
  PawPrint,
  Settings,
  Crown,
  PanelLeftClose,
  PanelLeft,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUserStore } from "@/lib/stores/user-store";

const navItems = [
  { to: "/app/create", icon: Palette, label: "Create Portrait" },
  { to: "/app/gallery", icon: Images, label: "My Portraits" },
  { to: "/app/gifts", icon: Gift, label: "Gift Center" },
  { to: "/app/print-shop", icon: Printer, label: "Print Shop" },
  { to: "/app/pets", icon: PawPrint, label: "Pet Profiles" },
  { to: "/app/settings", icon: Settings, label: "Settings" },
];

const AppSidebar = () => {
  const location = useLocation();
  const { plan, displayName, email, sidebarCollapsed, setSidebarCollapsed } =
    useUserStore();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.aside
      className="hidden md:flex flex-col h-screen sticky top-0 border-r border-border bg-card z-40"
      animate={{ width: sidebarCollapsed ? 72 : 256 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 h-16 border-b border-border shrink-0">
        <span className="text-2xl shrink-0">🐾</span>
        <AnimatePresence>
          {!sidebarCollapsed && (
            <motion.span
              className="font-display text-lg text-foreground whitespace-nowrap"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.15 }}
            >
              PawPrints AI
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.to);
          return (
            <Link key={item.to} to={item.to}>
              <motion.div
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm transition-colors group ${
                  active
                    ? "bg-amber-50 text-amber-800 font-medium"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
              >
                {active && (
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                    layoutId="sidebar-active"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon
                    className={`w-5 h-5 shrink-0 ${
                      active ? "text-amber-600" : ""
                    }`}
                    strokeWidth={active ? 2 : 1.5}
                  />
                </motion.div>
                <AnimatePresence>
                  {!sidebarCollapsed && (
                    <motion.span
                      className="whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Upgrade card (free users) */}
      <AnimatePresence>
        {plan === "free" && !sidebarCollapsed && (
          <motion.div
            className="mx-3 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/app/pricing">
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 hover:shadow-md hover:shadow-amber-600/10 transition-all duration-200">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-4 h-4 text-amber-600" />
                  <span className="font-body text-sm font-semibold text-amber-800">
                    Upgrade to Pro
                  </span>
                </div>
                <p className="font-body text-xs text-amber-700/80 mb-3">
                  Unlimited portraits, all styles, print-ready quality.
                </p>
                <Button
                  size="sm"
                  className="w-full font-body text-xs bg-primary hover:bg-amber-700 text-primary-foreground"
                >
                  $14.99/mo
                </Button>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapse toggle + user */}
      <div className="border-t border-border p-3 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <Avatar className="w-8 h-8 shrink-0">
              <AvatarFallback className="bg-amber-100 text-amber-700 font-body text-xs">
                {displayName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <AnimatePresence>
              {!sidebarCollapsed && (
                <motion.div
                  className="min-w-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <p className="font-body text-sm font-medium text-foreground truncate">
                    {displayName}
                  </p>
                  <p className="font-body text-xs text-muted-foreground truncate">
                    {email}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors shrink-0"
          >
            {sidebarCollapsed ? (
              <PanelLeft className="w-4 h-4" />
            ) : (
              <PanelLeftClose className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </motion.aside>
  );
};

export default AppSidebar;

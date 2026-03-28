import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown } from "lucide-react";

interface PaywallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const perks = [
  "Unlimited portraits in all 8 styles",
  "Print-ready 300 DPI downloads in 5 frame sizes",
  "No watermarks + full commercial rights",
  "Multi-pet portraits, backgrounds, frame options",
  "Gift cards, favorites gallery, new styles monthly",
];

const PaywallModal = ({ open, onOpenChange }: PaywallModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200">
              <Crown className="w-7 h-7 text-amber-700" />
            </div>
          </div>
          <DialogTitle className="font-display text-2xl text-foreground text-center">
            Your free portrait is ready!
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground text-center mt-2">
            You've used your free generation. Subscribe for unlimited portraits
            of every pet you love.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
          <div className="flex items-center justify-between mb-3">
            <span className="font-display text-lg text-foreground">Pro</span>
            <Badge className="bg-primary text-primary-foreground font-body text-xs">
              Most Popular
            </Badge>
          </div>
          <div className="mb-4">
            <span className="font-display text-3xl text-foreground">$8.99</span>
            <span className="font-body text-sm text-muted-foreground">/month</span>
          </div>
          <ul className="space-y-2.5">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-body text-sm text-foreground">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 space-y-3">
          <Button className="w-full font-body bg-primary hover:bg-amber-700 text-primary-foreground">
            Subscribe to Pro — $8.99/mo
          </Button>
          <Button
            variant="ghost"
            className="w-full font-body text-muted-foreground"
            onClick={() => onOpenChange(false)}
          >
            Maybe later
          </Button>
        </div>

        <p className="text-center font-body text-xs text-muted-foreground mt-2">
          Cancel anytime. No long-term commitment.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PaywallModal;

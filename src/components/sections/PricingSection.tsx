import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  const proPrice = annual ? "$7.19" : "$8.99";
  const proPeriod = annual ? "/mo, billed yearly" : "/month";

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Try it out with your favorite pet photo.",
      cta: "Get Started",
      ctaVariant: "outline" as const,
      highlight: false,
      features: [
        { text: "1 portrait", included: true },
        { text: "Standard resolution", included: true },
        { text: "All 5 styles", included: true },
        { text: "Watermark-free", included: false },
        { text: "New monthly styles", included: false },
        { text: "Priority generation", included: false },
      ],
    },
    {
      name: "Pro",
      price: proPrice,
      period: proPeriod,
      description: "Unlimited portraits. Every style. No watermarks.",
      cta: "Start Free Trial",
      ctaVariant: "default" as const,
      highlight: true,
      features: [
        { text: "Unlimited portraits", included: true },
        { text: "High-res downloads (2048x2048)", included: true },
        { text: "All 5 styles + new monthly styles", included: true },
        { text: "Watermark-free", included: true },
        { text: "Priority generation", included: true },
        { text: "Portrait history (30 days)", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            One portrait free. Unlimited for less than a coffee.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            No credit card required to start. Cancel anytime.
          </p>
        </div>

        {/* Annual toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={`font-body text-sm ${
              !annual ? "font-semibold text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
          <Switch checked={annual} onCheckedChange={setAnnual} />
          <span
            className={`font-body text-sm ${
              annual ? "font-semibold text-foreground" : "text-muted-foreground"
            }`}
          >
            Annual
          </span>
          {annual && (
            <Badge className="bg-amber-100 text-amber-800 border border-amber-200 font-body text-xs">
              Save 20%
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? "border-2 border-primary shadow-lg shadow-amber-600/10 scale-[1.02]"
                  : "border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-foreground">
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <Badge className="bg-primary text-primary-foreground font-body text-xs">
                      Most Popular
                    </Badge>
                  )}
                </div>
                <div className="mt-3">
                  <span className="font-display text-4xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="font-body text-sm text-muted-foreground ml-1">
                    {plan.period}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                      )}
                      <span
                        className={`font-body text-sm ${
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground/60"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to="/signup">
                  <Button
                    variant={plan.ctaVariant}
                    className={`w-full font-body ${
                      plan.highlight
                        ? "bg-primary hover:bg-amber-700 text-primary-foreground"
                        : ""
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  const proPrice = annual ? "$12.42" : "$14.99";
  const proPeriod = annual ? "/mo, billed yearly" : "/month";

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "See the quality for yourself. 3 portraits, no credit card.",
      cta: "Create Your Free Portrait",
      ctaVariant: "outline" as const,
      highlight: false,
      features: [
        { text: "3 portraits", included: true },
        { text: "3 styles (Renaissance, Watercolor, Anime)", included: true },
        { text: "Web resolution (1024x1024)", included: true },
        { text: "Print-ready 300 DPI", included: false },
        { text: "Custom backgrounds & frames", included: false },
        { text: "Multi-pet portraits", included: false },
        { text: "Gift cards", included: false },
        { text: "No watermark", included: false },
      ],
    },
    {
      name: "Pro",
      price: proPrice,
      period: proPeriod,
      description: "Unlimited portraits. All 8 styles. Print-ready quality. Full creative control.",
      cta: "Start Free Trial",
      ctaVariant: "default" as const,
      highlight: true,
      features: [
        { text: "Unlimited portraits", included: true },
        { text: "All 8 styles + new monthly drops", included: true },
        { text: "Print-ready downloads (300 DPI)", included: true },
        { text: "Custom backgrounds & frames", included: true },
        { text: "Multi-pet portraits (up to 4)", included: true },
        { text: "Gift cards & sharing", included: true },
        { text: "Style intensity slider", included: true },
        { text: "No watermark + priority generation", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            One free portrait. Unlimited for less than a latte.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            No credit card to start. Cancel anytime. Less than what you'd pay for a single commission sketch.
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
              Save 17%
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

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { Check, X, Crown, Sparkles, Shield, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useUserStore } from "@/lib/stores/user-store";
import { useRef, useEffect } from "react";

// Animated counter component
function AnimatedPrice({ value, prefix = "$" }: { value: number; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const display = useTransform(springValue, (v) =>
    `${prefix}${v.toFixed(2)}`
  );

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const faqs = [
  {
    q: "Can I really try it free?",
    a: "Yes! You get 3 free portraits with no credit card required. See the quality for yourself before deciding.",
  },
  {
    q: "What makes Pro worth it?",
    a: "Pro gives you unlimited portraits, all 8 art styles, print-ready 300 DPI downloads, custom backgrounds, frame options, multi-pet portraits, gift cards, and priority generation. For less than a single portrait from Crown & Paw ($60+).",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel from your Settings page with one click. No cancellation fees, no questions asked. Your portraits remain yours forever.",
  },
  {
    q: "Will my portraits look like my actual pet?",
    a: "Yes. Unlike generic breed templates, we analyze your specific photo. The nose, the eyes, the personality -- it's all your pet, transformed into art.",
  },
  {
    q: "What's the print quality like?",
    a: "Pro downloads are 300 DPI -- the same resolution professional print shops require. Perfect for sizes up to 24x36 inches.",
  },
  {
    q: "Can I use my portraits commercially?",
    a: "Pro subscribers get full commercial rights. Use your portraits on products, in your business, or anywhere you like.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "I was skeptical, but the portrait looks EXACTLY like my golden retriever. Framed it above the fireplace -- everyone asks where I got it.",
    role: "Dog mom",
  },
  {
    name: "Jake R.",
    text: "Bought Pro after my first free portrait. I've made 20+ portraits of my cats in different styles. The Renaissance ones are hilarious.",
    role: "Cat dad",
  },
  {
    name: "Emily T.",
    text: "Made a memorial portrait of my childhood dog who passed. Cried happy tears. Worth every penny.",
    role: "Pet memorial",
  },
];

const AppPricing = () => {
  const [annual, setAnnual] = useState(false);
  const { setPlan } = useUserStore();

  const proMonthly = 14.99;
  const proAnnual = 12.42;
  const currentPrice = annual ? proAnnual : proMonthly;

  const features = [
    { text: "Portraits", free: "3 total", pro: "Unlimited" },
    { text: "Art styles", free: "3 styles", pro: "All 8 styles" },
    { text: "Resolution", free: "Web (1024px)", pro: "300 DPI print-ready" },
    { text: "Watermark", free: "Yes", pro: "None" },
    { text: "Custom backgrounds", free: false, pro: true },
    { text: "Frame options", free: false, pro: true },
    { text: "Multi-pet portraits", free: false, pro: true },
    { text: "Gift cards", free: false, pro: true },
    { text: "Style intensity slider", free: false, pro: true },
    { text: "Priority generation", free: false, pro: true },
  ];

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <motion.h1
          className="font-display text-3xl md:text-5xl text-foreground mb-4"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          One plan. Unlimited art.
        </motion.h1>
        <motion.p
          className="font-body text-lg text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Less than a single portrait from Crown & Paw. Unlimited portraits, all styles, print-ready quality.
        </motion.p>
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className={`font-body text-sm ${!annual ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
          Monthly
        </span>
        <Switch checked={annual} onCheckedChange={setAnnual} />
        <span className={`font-body text-sm ${annual ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
          Annual
        </span>
        <AnimatePresence>
          {annual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Badge className="bg-green-100 text-green-800 border border-green-200 font-body text-xs">
                Save 17%
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Free */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border border-border h-full">
            <CardHeader>
              <h3 className="font-display text-2xl text-foreground">Free</h3>
              <div className="mt-2">
                <span className="font-display text-4xl text-foreground">$0</span>
                <span className="font-body text-sm text-muted-foreground ml-1">forever</span>
              </div>
              <p className="font-body text-sm text-muted-foreground mt-2">
                See the quality for yourself. No credit card.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {features.map((f) => {
                  const freeVal = typeof f.free === "string" ? f.free : f.free;
                  return (
                    <li key={f.text} className="flex items-center gap-3">
                      {freeVal ? (
                        <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                      )}
                      <span className={`font-body text-sm ${freeVal ? "text-foreground" : "text-muted-foreground/60"}`}>
                        {f.text}
                        {typeof freeVal === "string" && (
                          <span className="text-muted-foreground ml-1">({freeVal})</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <Button variant="outline" className="w-full font-body">
                Current plan
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-2 border-primary shadow-lg shadow-amber-600/10 relative h-full">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-foreground">Pro</h3>
                <Badge className="bg-primary text-primary-foreground font-body text-xs">
                  Most Popular
                </Badge>
              </div>
              <div className="mt-2">
                <span className="font-display text-4xl text-foreground">
                  <AnimatedPrice value={currentPrice} />
                </span>
                <span className="font-body text-sm text-muted-foreground ml-1">
                  /mo{annual && ", billed yearly"}
                </span>
              </div>
              {annual && (
                <p className="font-body text-xs text-green-700 mt-1">
                  $149/year -- less than a single West & Willow portrait
                </p>
              )}
              <p className="font-body text-sm text-muted-foreground mt-2">
                Unlimited portraits. Print-ready quality. Full creative control.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {features.map((f) => {
                  const proVal = typeof f.pro === "string" ? f.pro : f.pro;
                  return (
                    <li key={f.text} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-body text-sm text-foreground">
                        {f.text}
                        {typeof proVal === "string" && (
                          <span className="text-amber-700 font-medium ml-1">({proVal})</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button
                  onClick={() => setPlan("pro")}
                  className="w-full font-body bg-primary hover:bg-amber-700 text-primary-foreground py-6 text-base"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Start free trial
                </Button>
              </motion.div>
              <p className="font-body text-xs text-center text-muted-foreground mt-3">
                7-day free trial. Cancel anytime.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Trust signals */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-16 py-8 border-y border-border">
        {[
          { icon: Shield, text: "7-day money-back guarantee" },
          { icon: Zap, text: "Cancel anytime, one click" },
          { icon: Heart, text: "50,000+ portraits created" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 font-body text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <item.icon className="w-4 h-4 text-amber-600" />
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="font-display text-2xl text-foreground text-center mb-8">
          Pet parents love PawPrints
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Card className="border border-border h-full">
                <CardContent className="p-5">
                  <p className="font-body text-sm text-foreground mb-4 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="font-body text-xs font-semibold text-amber-700">
                        {t.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">
                        {t.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl text-foreground text-center mb-8">
          Common questions
        </h2>
        <Accordion type="single" defaultValue="item-0" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="font-body text-sm font-medium text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AppPricing;

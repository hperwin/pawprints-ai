import { motion } from "framer-motion";
import {
  HelpCircle,
  Upload,
  Palette,
  Download,
  CreditCard,
  Gift,
  Printer,
  MessageCircle,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const helpTopics = [
  {
    icon: Upload,
    title: "Uploading photos",
    items: [
      {
        q: "What kind of photos work best?",
        a: "Front-facing photos with good lighting work best. Clear face, minimal blur. Phone photos are fine -- no DSLR required.",
      },
      {
        q: "What file types are accepted?",
        a: "JPEG, PNG, and WEBP. Up to 20MB per photo.",
      },
      {
        q: "Can I use a photo with multiple pets?",
        a: "For multi-pet portraits (Pro feature), upload separate photos of each pet. We'll compose them into one scene.",
      },
    ],
  },
  {
    icon: Palette,
    title: "Styles & customization",
    items: [
      {
        q: "Which styles are free?",
        a: "Renaissance, Watercolor, and Anime are available on the free plan. All 8 styles are unlocked with Pro.",
      },
      {
        q: "What does the style intensity slider do?",
        a: "It controls how strongly the art style is applied. Lower values keep more photorealism; higher values create a more dramatic artistic effect.",
      },
    ],
  },
  {
    icon: Download,
    title: "Downloads & quality",
    items: [
      {
        q: "What resolution are the portraits?",
        a: "Free plan: 1024x1024 (web quality). Pro plan: up to 4096x4096 at 300 DPI (print-ready).",
      },
      {
        q: "Can I print my portrait?",
        a: "Pro portraits are print-ready at 300 DPI. Visit the Print Shop to download files sized for specific frame sizes (5x7 through 24x36).",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Billing & subscription",
    items: [
      {
        q: "How do I cancel Pro?",
        a: "Go to Settings > Subscription > Cancel subscription. One click, no questions asked. Your portraits remain yours.",
      },
      {
        q: "Is there a refund policy?",
        a: "Yes. 7-day money-back guarantee on Pro. Email support@pawprints.ai within 7 days of subscribing.",
      },
    ],
  },
];

const Help = () => {
  return (
    <div className="container mx-auto px-6 py-8 max-w-3xl">
      <motion.h1
        className="font-display text-3xl md:text-4xl text-foreground mb-2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Help Center
      </motion.h1>
      <p className="font-body text-muted-foreground mb-8">
        Find answers to common questions or get in touch.
      </p>

      {/* Contact */}
      <Card className="border border-amber-200 bg-amber-50 mb-10">
        <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-amber-600" />
            <div>
              <p className="font-body text-sm font-medium text-foreground">
                Need help?
              </p>
              <p className="font-body text-xs text-muted-foreground">
                We usually respond within a few hours.
              </p>
            </div>
          </div>
          <Button variant="outline" className="font-body text-sm border-amber-200 text-amber-700 hover:bg-amber-100">
            <Mail className="w-3.5 h-3.5 mr-1.5" />
            support@pawprints.ai
          </Button>
        </CardContent>
      </Card>

      {/* Topics */}
      <div className="space-y-8">
        {helpTopics.map((topic, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <topic.icon className="w-4 h-4 text-amber-600" />
              <h2 className="font-display text-lg text-foreground">
                {topic.title}
              </h2>
            </div>
            <Accordion type="single" collapsible>
              {topic.items.map((item, j) => (
                <AccordionItem key={j} value={`${i}-${j}`}>
                  <AccordionTrigger className="font-body text-sm font-medium text-foreground">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Help;

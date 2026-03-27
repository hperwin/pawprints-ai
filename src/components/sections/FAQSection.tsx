import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does PawPrints AI work?",
    answer:
      "Upload a clear photo of your pet, choose an art style (Renaissance, anime, superhero, watercolor, or pop art), and we generate a high-resolution portrait in under 60 seconds. No artistic skill required.",
  },
  {
    question: "Is the first portrait really free?",
    answer:
      "Yes. Sign up, upload a photo, pick a style, and download your first portrait — no credit card needed. After that, Pro is $8.99/month for unlimited portraits.",
  },
  {
    question: "What kinds of pets can I use?",
    answer:
      "Dogs, cats, rabbits, birds, horses, hamsters, reptiles — if you have a clear photo, we can create a portrait. The best results come from front-facing photos with good lighting.",
  },
  {
    question: "What resolution are the portraits?",
    answer:
      "Pro portraits are 2048x2048 pixels minimum — that's print-ready quality for an 8x8 inch print at 256 DPI. Perfect for framing. Free tier portraits are standard resolution (1024x1024).",
  },
  {
    question: "Can I use the portrait commercially?",
    answer:
      "Pro members have full commercial rights to their generated portraits. Use them on merchandise, social media, print products — they're yours.",
  },
  {
    question: "What if I don't like the result?",
    answer:
      "Generate as many times as you'd like with Pro. Each generation is slightly different, so you can pick the one you love most. Different photos of the same pet will also produce different results — try a few angles.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Questions? We've got answers.
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" defaultValue="item-0" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-body text-base font-medium text-foreground hover:text-primary text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

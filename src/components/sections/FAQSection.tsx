import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will it actually look like MY pet, or just a generic version of the breed?",
    answer:
      "This is the #1 thing we obsess over. PawPrints AI analyzes the specific features of your pet — their unique markings, coloring, facial structure, and expression. You'll get a portrait of your actual pet, not a stock image of 'a golden retriever.' That said, a clear, front-facing photo with decent lighting gives us the most to work with.",
  },
  {
    question: "What kind of photo works best?",
    answer:
      "A front-facing photo where you can clearly see your pet's face and eyes. Good lighting helps — natural daylight is ideal. Phone photos work great, you don't need a professional camera. Avoid heavily cropped images, photos where your pet is far away, or very dark/blurry shots. That photo where they're looking right at you? That's the one.",
  },
  {
    question: "Is the first portrait really free?",
    answer:
      "Yes — sign up, upload a photo, pick any of our 8 styles, and download your portrait. No credit card, no catch. We want you to see the quality before you commit to anything. After that, Pro is $8.99/month for unlimited portraits.",
  },
  {
    question: "How long does it take?",
    answer:
      "About 60 seconds from upload to download. No 2-week wait for a commission artist, no back-and-forth emails. Upload, pick a style, and your portrait is ready almost immediately.",
  },
  {
    question: "Can I print and frame the portrait?",
    answer:
      "Absolutely — that's what most people do. Pro portraits are 2048x2048 pixels minimum, which is print-ready for an 8x8 inch frame at 256 DPI. Many of our users print at their local print shop or upload to services like Shutterfly or Canvera. Free tier portraits are 1024x1024 (still good for digital sharing).",
  },
  {
    question: "Do you have a memorial style for pets who've passed?",
    answer:
      "Yes. Our Memorial style is designed for pets who've crossed the rainbow bridge. It features soft, warm light, gentle angel wings, and a peaceful atmosphere. Many customers tell us it's become a cherished keepsake. We built this style because we know how much these portraits mean.",
  },
  {
    question: "Can I create a portrait with multiple pets?",
    answer:
      "Not yet in a single portrait, but it's on our roadmap. For now, you can create individual portraits of each pet and display them as a gallery wall — which honestly looks incredible. We'll announce multi-pet support when it's ready.",
  },
  {
    question: "What if I don't like the result?",
    answer:
      "With Pro, you can generate as many portraits as you want — each generation is slightly different, so you can pick the one that nails the likeness best. Different photos of the same pet will produce different results too. Try a few angles and styles to find your favorite.",
  },
  {
    question: "What kinds of pets can I use?",
    answer:
      "Dogs, cats, rabbits, birds, horses, hamsters, reptiles, ferrets — if you have a clear photo of their face, we can create a portrait. Dogs and cats get the best results since our AI has the most training data for them, but we've seen some truly stunning rabbit and bird portraits too.",
  },
  {
    question: "Can I use the portrait commercially?",
    answer:
      "Pro members have full commercial rights to their generated portraits. Print them on mugs, t-shirts, greeting cards, or sell prints — they're yours. Free tier portraits are for personal use only.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Every question pet parents ask, answered.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            We've talked to thousands of pet owners. These are the things they
            want to know before uploading.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" defaultValue="item-0" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border"
              >
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

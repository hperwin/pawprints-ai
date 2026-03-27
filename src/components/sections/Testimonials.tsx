import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    title: "Dog mom, golden retriever owner",
    initials: "SK",
    rating: 5,
    quote:
      "I uploaded a photo of my golden Cooper and picked Renaissance. Genuinely gasped. He looks like a 17th-century duke. It's framed above our fireplace now.",
  },
  {
    name: "Marcus T.",
    title: "Bought it as a gift for his sister",
    initials: "MT",
    rating: 5,
    quote:
      "My sister's cat passed last year. I made a watercolor portrait of Mochi and gave it to her for Christmas. She cried. Best $9 I've ever spent.",
  },
  {
    name: "Jess P.",
    title: "Three cats, zero regrets",
    initials: "JP",
    rating: 5,
    quote:
      "I have all three of my cats in superhero style hanging in my home office. My Zoom background? A gallery of cat Avengers. Coworkers love it.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Pet owners are obsessed. Their pets remain indifferent.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border border-border bg-card hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="font-body text-foreground leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 bg-amber-100 border border-amber-200">
                    <AvatarFallback className="bg-amber-100 text-amber-800 font-body text-sm font-medium">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {t.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

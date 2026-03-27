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
      "I uploaded a photo of my golden Cooper and picked Renaissance. Genuinely gasped. He looks like a 17th-century duke and it captures HIM — not just 'a golden retriever.' It's framed above our fireplace now.",
  },
  {
    name: "Marcus T.",
    title: "Bought it as a Christmas gift",
    initials: "MT",
    rating: 5,
    quote:
      "My sister's cat Mochi passed last year. I used the Memorial style and gave her a watercolor portrait for Christmas. She cried. It's now the centerpiece of her living room. Best $9 I've ever spent.",
  },
  {
    name: "Jess P.",
    title: "Three cats, zero regrets",
    initials: "JP",
    rating: 5,
    quote:
      "I have all three of my cats in different styles — Pop Art, Anime, and Oil Painting — hanging in my home office. My Zoom background is a gallery of cat art. Coworkers keep asking where I got them.",
  },
  {
    name: "David R.",
    title: "Rescue dad, adopted two pit mixes",
    initials: "DR",
    rating: 5,
    quote:
      "I was worried it wouldn't capture their brindle markings but it nailed them. Both dogs, in watercolor, framed side by side for our gotcha day anniversary. My wife teared up when she saw them.",
  },
  {
    name: "Priya M.",
    title: "Gift for her mom's birthday",
    initials: "PM",
    rating: 5,
    quote:
      "My mom talks about her Shih Tzu more than she talks about me. I made a Renaissance portrait of Coco as a birthday gift and now it's the first thing she shows every visitor. She's ordered three more for friends.",
  },
  {
    name: "Tom L.",
    title: "Senior cat owner, first-time user",
    initials: "TL",
    rating: 5,
    quote:
      "My 16-year-old tabby Felix is slowing down. I wanted something beautiful to remember him by while he's still here. The oil painting style is so dignified — it looks like a real commissioned painting. 60 seconds. Unreal.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            The gift that makes pet lovers cry happy tears.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            Real stories from pet parents who turned their favorite photo into
            something worth framing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

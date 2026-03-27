import { ImageIcon, Star, Users, Gift } from "lucide-react";

const stats = [
  { icon: ImageIcon, value: "50,000+", label: "pet portraits created" },
  { icon: Users, value: "12,000+", label: "happy pet parents" },
  { icon: Star, value: "4.9", label: "average rating" },
  { icon: Gift, value: "#1", label: "gift pet lovers actually frame" },
];

const SocialProof = () => {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="container mx-auto px-6 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100">
                <stat.icon className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <p className="font-display text-xl text-foreground">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

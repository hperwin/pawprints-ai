import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

interface SEOPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  ctaText?: string;
}

const SEOPageLayout = ({
  title,
  description,
  children,
  ctaText = "Create your pet's portrait -- it's free",
}: SEOPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-6">
          {title}
        </h1>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
          {description}
        </p>

        <article className="prose prose-amber max-w-none font-body text-foreground leading-relaxed space-y-8">
          {children}
        </article>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-amber-50 border border-amber-200 text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">
            Ready to see your pet as a masterpiece?
          </h2>
          <Link to="/signup">
            <Button
              size="lg"
              className="font-body text-base px-8 py-6 bg-primary hover:bg-amber-700 text-primary-foreground shadow-lg shadow-amber-600/20"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            No credit card required. First portrait free.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SEOPageLayout;

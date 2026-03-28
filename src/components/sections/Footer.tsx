import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="font-display text-xl text-foreground">
                PawPrints AI
              </span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Custom pet portraits from your photo in 60 seconds.
              Watercolor, renaissance, oil painting, memorial, and more.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#styles" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Styles
                </a>
              </li>
              <li>
                <a href="#pricing" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/alternatives" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Alternatives
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4">
              Use Cases
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/for/dog-owners" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dog Portraits
                </Link>
              </li>
              <li>
                <Link to="/for/cat-owners" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cat Portraits
                </Link>
              </li>
              <li>
                <Link to="/for/gifts" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Gift Ideas
                </Link>
              </li>
              <li>
                <Link to="/blog/pet-photo-renaissance-masterpiece" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="font-body text-sm text-muted-foreground">
                  Privacy
                </span>
              </li>
              <li>
                <span className="font-body text-sm text-muted-foreground">
                  Terms
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PawPrints AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs text-muted-foreground">
              Made with love for pets everywhere
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

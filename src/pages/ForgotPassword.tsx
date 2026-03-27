import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-3xl">🐾</span>
            <span className="font-display text-2xl text-foreground">
              PawPrints AI
            </span>
          </Link>
          <h1 className="font-display text-3xl text-foreground">
            Reset your password
          </h1>
          <p className="mt-2 font-body text-muted-foreground">
            Enter your email and we'll send you a reset link.
          </p>
        </div>

        <Card className="border border-border">
          <CardHeader className="pb-0" />
          <CardContent>
            {sent ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-4">📬</div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  Check your inbox
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  If an account exists for {email}, we've sent a password reset
                  link.
                </p>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="font-body"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to sign in
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="font-body"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full font-body bg-primary hover:bg-amber-700 text-primary-foreground"
                  >
                    Send reset link
                  </Button>
                </form>

                <p className="mt-6 text-center font-body text-sm text-muted-foreground">
                  Remember your password?{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:text-amber-700 font-medium transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth integration placeholder
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
            Create your account
          </h1>
          <p className="mt-2 font-body text-muted-foreground">
            Your first pet portrait is on us. No credit card needed.
          </p>
        </div>

        <Card className="border border-border">
          <CardHeader className="pb-0" />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="font-body"
                  required
                />
              </div>
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
              <div className="space-y-2">
                <Label htmlFor="password" className="font-body text-sm">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-body"
                  minLength={8}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full font-body bg-primary hover:bg-amber-700 text-primary-foreground"
              >
                Create account
              </Button>
            </form>

            <p className="mt-6 text-center font-body text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:text-amber-700 font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;

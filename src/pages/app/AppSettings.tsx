import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  CreditCard,
  Palette,
  Download,
  Crown,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useUserStore } from "@/lib/stores/user-store";
import { Link } from "react-router-dom";

const artStyles = [
  { id: "renaissance", name: "Renaissance" },
  { id: "watercolor", name: "Watercolor" },
  { id: "anime", name: "Anime" },
  { id: "pop-art", name: "Pop Art" },
  { id: "memorial", name: "Memorial" },
  { id: "oil-painting", name: "Oil Painting" },
  { id: "cartoon", name: "Cartoon" },
  { id: "impressionist", name: "Impressionist" },
];

const AppSettings = () => {
  const {
    plan,
    displayName,
    email,
    defaultStyle,
    setDefaultStyle,
    setUserInfo,
    portraits,
  } = useUserStore();

  const [nameInput, setNameInput] = useState(displayName);
  const [saved, setSaved] = useState(false);

  const handleSaveName = () => {
    setUserInfo({ displayName: nameInput, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-3xl">
      <motion.h1
        className="font-display text-3xl md:text-4xl text-foreground mb-8"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Settings
      </motion.h1>

      <Tabs defaultValue="account">
        <TabsList className="bg-muted/50 mb-8">
          <TabsTrigger value="account" className="font-body text-sm">
            <User className="w-3.5 h-3.5 mr-1.5" />
            Account
          </TabsTrigger>
          <TabsTrigger value="subscription" className="font-body text-sm">
            <CreditCard className="w-3.5 h-3.5 mr-1.5" />
            Subscription
          </TabsTrigger>
          <TabsTrigger value="preferences" className="font-body text-sm">
            <Palette className="w-3.5 h-3.5 mr-1.5" />
            Preferences
          </TabsTrigger>
          <TabsTrigger value="data" className="font-body text-sm">
            <Download className="w-3.5 h-3.5 mr-1.5" />
            Data
          </TabsTrigger>
        </TabsList>

        {/* Account */}
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="font-display text-lg text-foreground">Profile</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                  Display name
                </label>
                <div className="flex gap-2">
                  <Input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="font-body max-w-xs"
                  />
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button onClick={handleSaveName} className="font-body bg-primary hover:bg-amber-700 text-primary-foreground">
                      {saved ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        "Save"
                      )}
                    </Button>
                  </motion.div>
                </div>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <Input value={email} disabled className="font-body max-w-xs bg-muted/30" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Subscription */}
        <TabsContent value="subscription" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">
                    Current plan
                  </h3>
                  <div className="flex items-center gap-2">
                    {plan === "pro" ? (
                      <Badge className="font-body text-xs bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border border-amber-300">
                        <Crown className="w-3 h-3 mr-1" />
                        Pro
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="font-body text-xs">
                        Free
                      </Badge>
                    )}
                    {plan === "pro" && (
                      <span className="font-body text-sm text-muted-foreground">
                        $14.99/month
                      </span>
                    )}
                  </div>
                </div>
                {plan === "free" && (
                  <Link to="/app/pricing">
                    <Button className="font-body bg-primary hover:bg-amber-700 text-primary-foreground">
                      <Crown className="w-4 h-4 mr-2" />
                      Upgrade to Pro
                    </Button>
                  </Link>
                )}
              </div>

              {plan === "pro" && (
                <>
                  <Separator className="my-4" />
                  <div className="space-y-3">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Next billing date</span>
                      <span className="text-foreground">April 27, 2026</span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Portraits this month</span>
                      <span className="text-foreground">{portraits.length}</span>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <Button variant="outline" size="sm" className="font-body text-sm text-destructive border-destructive/30 hover:bg-destructive/10">
                    Cancel subscription
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="font-display text-lg text-foreground">
                Default style
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Pre-select this style when creating new portraits.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {artStyles.map((style) => (
                  <motion.button
                    key={style.id}
                    onClick={() => setDefaultStyle(style.id)}
                    className={`px-3 py-1.5 rounded-full font-body text-sm transition-all ${
                      defaultStyle === style.id
                        ? "bg-amber-100 text-amber-800 font-medium border border-amber-300"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted border border-transparent"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {style.name}
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data */}
        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="font-display text-lg text-foreground">
                Export your data
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Download all your portraits and account data.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button variant="outline" className="font-body">
                  <Download className="w-4 h-4 mr-2" />
                  Export all portraits (ZIP)
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button variant="outline" className="font-body">
                  <Download className="w-4 h-4 mr-2" />
                  Export account data (JSON)
                </Button>
              </motion.div>
              <Separator />
              <div>
                <h4 className="font-body text-sm font-medium text-destructive mb-2">
                  Danger zone
                </h4>
                <Button variant="outline" size="sm" className="font-body text-sm text-destructive border-destructive/30 hover:bg-destructive/10">
                  Delete account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AppSettings;

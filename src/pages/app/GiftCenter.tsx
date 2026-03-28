import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Send, Check, Crown, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useUserStore } from "@/lib/stores/user-store";
import ProGate from "@/components/pro/ProGate";
import EmptyGifts from "@/components/empty-states/EmptyGifts";

const giftAmounts = [
  { value: 9.99, label: "$9.99", description: "1 portrait" },
  { value: 24.99, label: "$24.99", description: "3 portraits" },
  { value: 49.99, label: "$49.99", description: "1 month Pro" },
];

const GiftCenter = () => {
  const { plan, giftCards, addGiftCard } = useUserStore();
  const [showCreate, setShowCreate] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(24.99);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!recipientName || !recipientEmail) return;
    setSending(true);
    setTimeout(() => {
      addGiftCard({
        id: `gift-${Date.now()}`,
        amount: selectedAmount,
        recipientName,
        recipientEmail,
        message,
        sentAt: new Date().toLocaleDateString(),
        redeemed: false,
      });
      setSending(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setShowCreate(false);
        setRecipientName("");
        setRecipientEmail("");
        setMessage("");
      }, 2000);
    }, 1500);
  };

  const content = (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          className="font-display text-3xl md:text-4xl text-foreground"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Gift Center
        </motion.h1>
        {giftCards.length > 0 && (
          <Button
            onClick={() => setShowCreate(true)}
            className="font-body bg-primary hover:bg-amber-700 text-primary-foreground"
          >
            <Gift className="w-4 h-4 mr-2" />
            Create gift card
          </Button>
        )}
      </div>

      <Tabs defaultValue="create">
        <TabsList className="bg-muted/50 mb-8">
          <TabsTrigger value="create" className="font-body text-sm">
            Create Gift
          </TabsTrigger>
          <TabsTrigger value="sent" className="font-body text-sm">
            Sent Gifts
            {giftCards.length > 0 && (
              <Badge variant="secondary" className="ml-1.5 text-[10px] px-1.5 py-0">
                {giftCards.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="create">
          {!showCreate && giftCards.length === 0 ? (
            <EmptyGifts onCreateGift={() => setShowCreate(true)} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border border-border">
                <CardHeader>
                  <h3 className="font-display text-xl text-foreground">
                    Send a portrait gift card
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    They choose the photo and style. You give the gift of art.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Amount selector */}
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-3 block">
                      Gift amount
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {giftAmounts.map((amount) => (
                        <motion.button
                          key={amount.value}
                          onClick={() => setSelectedAmount(amount.value)}
                          className={`p-4 rounded-xl border text-center transition-all ${
                            selectedAmount === amount.value
                              ? "border-primary bg-amber-50 ring-2 ring-primary/20"
                              : "border-border hover:border-primary/50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="font-display text-xl text-foreground block">
                            {amount.label}
                          </span>
                          <span className="font-body text-xs text-muted-foreground">
                            {amount.description}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Recipient */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                        Recipient's name
                      </label>
                      <Input
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="Their name"
                        className="font-body"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                        Recipient's email
                      </label>
                      <Input
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        placeholder="their@email.com"
                        className="font-body"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                      Personal message (optional)
                    </label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your pet deserves a masterpiece..."
                      className="font-body resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Send button */}
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      onClick={handleSend}
                      disabled={!recipientName || !recipientEmail || sending}
                      className="w-full font-body bg-primary hover:bg-amber-700 text-primary-foreground py-6"
                    >
                      <AnimatePresence mode="wait">
                        {sent ? (
                          <motion.span
                            key="sent"
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <Check className="w-5 h-5" />
                            Gift sent!
                          </motion.span>
                        ) : sending ? (
                          <motion.span
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="default"
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <Send className="w-4 h-4" />
                            Send ${selectedAmount.toFixed(2)} gift card
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="sent">
          {giftCards.length === 0 ? (
            <div className="text-center py-16">
              <Gift className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" strokeWidth={1} />
              <p className="font-body text-muted-foreground">
                No gifts sent yet.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {giftCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Card className="border border-border">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                          <Gift className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-body text-sm font-medium text-foreground">
                            ${card.amount.toFixed(2)} to {card.recipientName}
                          </p>
                          <p className="font-body text-xs text-muted-foreground">
                            {card.recipientEmail} -- {card.sentAt}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`font-body text-xs ${
                          card.redeemed
                            ? "border-green-200 text-green-700 bg-green-50"
                            : "border-amber-200 text-amber-700 bg-amber-50"
                        }`}
                      >
                        {card.redeemed ? "Redeemed" : "Pending"}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );

  // Wrap in ProGate for free users
  if (plan === "free") {
    return (
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <motion.h1
          className="font-display text-3xl md:text-4xl text-foreground mb-8"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Gift Center
        </motion.h1>
        <ProGate
          feature="Gift Cards"
          description="Send portrait gift cards to friends and family. They choose the photo and style."
          className="min-h-[400px] rounded-xl"
        >
          {content}
        </ProGate>
      </div>
    );
  }

  return content;
};

export default GiftCenter;

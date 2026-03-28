import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Gift, Send, PartyPopper } from "lucide-react";

interface GiftCardCreatorProps {
  portraitStyleName: string;
  onSend: (data: { recipientEmail: string; message: string; senderName: string }) => void;
}

const GiftCardCreator = ({ portraitStyleName, onSend }: GiftCardCreatorProps) => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    if (!recipientEmail || !senderName) return;
    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSent(true);
      onSend({ recipientEmail, message, senderName });
    }, 1500);
  };

  if (sent) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="relative inline-block">
          <div className="w-20 h-20 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto animate-bounce">
            <PartyPopper className="w-10 h-10 text-amber-700" />
          </div>
        </div>
        <h3 className="font-display text-xl text-foreground">Gift sent!</h3>
        <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto">
          We sent a beautifully wrapped gift card to {recipientEmail}. They'll get to
          unwrap it with a fun animation.
        </p>
        <Button variant="outline" onClick={() => setSent(false)} className="font-body">
          Send to someone else
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Gift className="w-5 h-5 text-amber-700" />
        <h3 className="font-display text-lg text-foreground">Send as a Gift</h3>
        <Badge className="bg-amber-100 text-amber-800 border border-amber-200 font-body text-[10px]">
          Free
        </Badge>
      </div>

      {/* Preview card */}
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-amber-200/60 border-2 border-amber-300 flex items-center justify-center">
          <span className="font-display text-sm text-amber-700">{portraitStyleName}</span>
        </div>
        <p className="font-body text-sm text-amber-800 italic">
          {message || '"A portrait of your favorite furry friend, made with love."'}
        </p>
        <p className="font-body text-xs text-amber-600 mt-2">
          From {senderName || "A pet-loving friend"}
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="font-body text-sm">Your name</Label>
          <Input
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Your name"
            className="font-body"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-body text-sm">Recipient's email</Label>
          <Input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            placeholder="friend@example.com"
            className="font-body"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-body text-sm">Personal message (optional)</Label>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Happy birthday! This is Max as a Renaissance duke."
            className="font-body"
          />
        </div>
      </div>

      <Button
        onClick={handleSend}
        disabled={!recipientEmail || !senderName || sending}
        className="w-full font-body bg-primary hover:bg-amber-700 text-primary-foreground"
      >
        {sending ? (
          <>
            <Gift className="w-4 h-4 mr-2 animate-spin" />
            Wrapping your gift...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send gift card
          </>
        )}
      </Button>
    </div>
  );
};

export default GiftCardCreator;

import { MessageCircle, Send, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "254701165121";
const quickTopics = ["Kenya safari", "Tanzania safari", "Zambia journey", "Beach holiday", "Custom trip"];
const budgetRanges = ["Under $2,500", "$2,500–$5,000", "$5,000–$10,000", "$10,000–$20,000", "$20,000+"];

export function WhatsAppBooking() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState(quickTopics[0]);
  const [budget, setBudget] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const clean = (key: string, max: number) => String(form.get(key) ?? "").trim().slice(0, max);
    const lines = [
      "Hello C&C Tour Company, I'd like to book a trip.",
      `Name: ${clean("name", 80)}`,
      `Interested in: ${topic}`,
      clean("date", 20) && `Travel date: ${clean("date", 20)}`,
      `Travelers: ${clean("travelers", 3) || "1"}`,
      `Budget (USD): ${budget}`,
      clean("message", 500) && `Message: ${clean("message", 500)}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {open && (
        <div role="dialog" aria-label="WhatsApp booking" className="w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl bg-background shadow-2xl">
          <div className="flex items-center justify-between bg-whatsapp px-4 py-3 text-whatsapp-foreground">
            <div>
              <p className="font-semibold">C&C Tour Company</p>
              <p className="text-xs opacity-90">Typically replies within minutes</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close"><X className="size-5" /></button>
          </div>
          <form onSubmit={submit} className="space-y-3 p-4">
            <p className="text-sm text-muted-foreground">Fill in a few details — we'll prepare the message for you.</p>
            <div className="flex flex-wrap gap-2">
              {quickTopics.map((t) => (
                <button key={t} type="button" onClick={() => setTopic(t)} className={`rounded-full border px-3 py-1 text-xs transition-colors ${topic === t ? "border-whatsapp bg-whatsapp text-whatsapp-foreground" : "border-border hover:border-whatsapp"}`}>{t}</button>
              ))}
            </div>
            <Input name="name" required maxLength={80} placeholder="Your name" autoComplete="name" />
            <div className="grid grid-cols-2 gap-2">
              <Input name="date" type="date" aria-label="Travel date" />
              <Input name="travelers" type="number" min={1} max={50} defaultValue={2} aria-label="Travelers" />
            </div>
            <Select name="budget" required value={budget} onValueChange={setBudget}>
              <SelectTrigger aria-label="Your budget in US dollars"><SelectValue placeholder="Your budget (USD)" /></SelectTrigger>
              <SelectContent>{budgetRanges.map((range) => <SelectItem key={range} value={range}>{range}</SelectItem>)}</SelectContent>
            </Select>
            <Textarea name="message" maxLength={500} placeholder="Anything else? (optional)" className="min-h-20" />
            <Button type="submit" className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp-hover"><Send className="size-4" />Send on WhatsApp</Button>
          </form>
        </div>
      )}
      <Button size="xl" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="WhatsApp booking" className="h-14 rounded-full bg-whatsapp px-4 text-whatsapp-foreground shadow-xl hover:bg-whatsapp-hover sm:px-5">
        <MessageCircle className="size-5" /><span className="hidden sm:inline">WhatsApp booking</span>
      </Button>
    </div>
  );
}

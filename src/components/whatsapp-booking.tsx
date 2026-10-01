import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappUrl = "https://wa.me/254700123456?text=Hello%20C%26C%20Tour%20Company%2C%20I%27d%20like%20to%20plan%20a%20journey.";

export function WhatsAppBooking() {
  return <Button asChild size="xl" className="fixed bottom-5 right-5 z-40 h-14 rounded-full px-4 shadow-xl sm:bottom-7 sm:right-7 sm:px-5">
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Book on WhatsApp using the sample contact number"><MessageCircle className="size-5"/><span className="hidden sm:inline">WhatsApp booking</span></a>
  </Button>;
}
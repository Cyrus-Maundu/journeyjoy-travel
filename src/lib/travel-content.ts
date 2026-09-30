import amboseliImage from "@/assets/amboseli-elephants.jpg";
import heroImage from "@/assets/cc-safari-hero.jpg";
import dianiImage from "@/assets/diani-dhow.jpg";
import maraImage from "@/assets/mara-camp.jpg";
import lionessImage from "@/assets/mara-lioness.jpg";
import gorillaImage from "@/assets/rwanda-gorilla.jpg";
import giraffeImage from "@/assets/samburu-giraffes.jpg";
import zanzibarImage from "@/assets/zanzibar-coast.jpg";

export const destinations = [
  { name: "Kenya", strapline: "The original safari", image: lionessImage, description: "Big skies, celebrated wildlife and landscapes that change at every turn." },
  { name: "Tanzania", strapline: "Wild without end", image: heroImage, description: "Great migration plains, volcanic highlands and the spice-scented coast." },
  { name: "Rwanda", strapline: "Land of a thousand hills", image: gorillaImage, description: "Ancient rainforest, rare primates and deeply personal encounters." },
  { name: "The Indian Ocean", strapline: "Barefoot horizons", image: zanzibarImage, description: "Dhow sails, coral gardens and unhurried days by impossibly blue water." },
] as const;

export const safariStyles = [
  { name: "Classic Safaris", detail: "Private game drives, exceptional guides and storied camps.", image: maraImage },
  { name: "Family Adventures", detail: "Flexible days, engaging guides and space for every generation.", image: giraffeImage },
  { name: "Bush & Beach", detail: "Wildlife-rich plains followed by the warm Indian Ocean.", image: dianiImage },
  { name: "Conservation Journeys", detail: "Travel that connects you with people protecting wild places.", image: amboseliImage },
] as const;

export const galleryGroups = [
  { name: "Maasai Mara", cover: lionessImage, images: [lionessImage, maraImage, heroImage] },
  { name: "Amboseli & Samburu", cover: giraffeImage, images: [giraffeImage, amboseliImage, heroImage] },
  { name: "Rwanda Highlands", cover: gorillaImage, images: [gorillaImage, maraImage, giraffeImage] },
  { name: "Indian Ocean", cover: zanzibarImage, images: [zanzibarImage, dianiImage, heroImage] },
] as const;
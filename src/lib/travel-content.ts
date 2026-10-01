import amboseliImage from "@/assets/amboseli-elephants.jpg";
import heroImage from "@/assets/cc-safari-hero.jpg";
import dianiImage from "@/assets/diani-dhow.jpg";
import maraImage from "@/assets/mara-camp.jpg";
import lionessImage from "@/assets/mara-lioness.jpg";
import gorillaImage from "@/assets/rwanda-gorilla.jpg";
import giraffeImage from "@/assets/samburu-giraffes.jpg";
import zanzibarImage from "@/assets/zanzibar-coast.jpg";
import serengetiImage from "@/assets/serengeti-crossing.jpg";
import ngorongoroImage from "@/assets/ngorongoro-crater.jpg";
import southLuangwaImage from "@/assets/south-luangwa-leopard.jpg";
import victoriaFallsImage from "@/assets/victoria-falls.jpg";

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

export type TravelArea = {
  slug: string;
  name: string;
  strapline: string;
  image: string;
  introduction: string;
  description: string;
  bestFor: string;
  suggestedStay: string;
  gallery: readonly string[];
};

export type TravelCountry = {
  slug: string;
  name: string;
  eyebrow: string;
  introduction: string;
  description: string;
  image: string;
  areas: readonly TravelArea[];
};

export const countryDestinations: readonly TravelCountry[] = [
  {
    slug: "kenya",
    name: "Kenya",
    eyebrow: "The original safari",
    introduction: "Iconic wildlife, generous cultures and an Indian Ocean finale.",
    description: "Kenya brings extraordinary variety into one seamless journey—from dry northern wilderness and elephant country to the Maasai Mara and palm-fringed coast.",
    image: lionessImage,
    areas: [
      { slug: "maasai-mara", name: "Maasai Mara", strapline: "Big skies, close encounters", image: lionessImage, introduction: "Follow lion prides and migrating herds across one of Africa’s most celebrated landscapes.", description: "The Mara’s open grasslands reward patient days in the field. Private conservancies add night drives, guided walks and intimate camps beyond the busier reserve routes.", bestFor: "Big cats, migration season and first safaris", suggestedStay: "3–5 nights", gallery: [lionessImage, maraImage, heroImage] },
      { slug: "samburu", name: "Samburu", strapline: "Wild northern frontiers", image: giraffeImage, introduction: "A rugged landscape of doum palms, riverine forest and rare northern wildlife.", description: "Samburu feels wonderfully remote. Look for reticulated giraffe, Grevy’s zebra and elephants along the Ewaso Nyiro, then spend time with guides whose knowledge is rooted in this land.", bestFor: "Rare species, culture and uncrowded game drives", suggestedStay: "3–4 nights", gallery: [giraffeImage, amboseliImage, maraImage] },
      { slug: "amboseli", name: "Amboseli", strapline: "Giants beneath Kilimanjaro", image: amboseliImage, introduction: "Watch famous elephant families cross open plains beneath Africa’s highest mountain.", description: "Seasonal wetlands draw remarkable wildlife into view while Kilimanjaro creates an unforgettable horizon. Early mornings offer the clearest mountain light and superb photography.", bestFor: "Elephants, landscapes and photography", suggestedStay: "2–3 nights", gallery: [amboseliImage, heroImage, giraffeImage] },
      { slug: "mombasa-coast", name: "Mombasa Coast", strapline: "Swahili shores", image: dianiImage, introduction: "Trade safari dust for warm water, coral gardens and slow dhow sunsets.", description: "Kenya’s coast blends long white beaches with layered Swahili history. Unwind in a private beachfront stay, snorkel the reef or explore the old town’s carved doors and spice-filled lanes.", bestFor: "Bush-and-beach journeys and family time", suggestedStay: "3–6 nights", gallery: [dianiImage, zanzibarImage, heroImage] },
    ],
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    eyebrow: "Wild without end",
    introduction: "Great migration plains, volcanic highlands and spice-island shores.",
    description: "Tanzania’s vast northern circuit and wild southern reserves invite a slower, expansive safari, beautifully paired with Zanzibar’s beaches and historic Stone Town.",
    image: serengetiImage,
    areas: [
      { slug: "serengeti", name: "Serengeti", strapline: "The endless plains", image: serengetiImage, introduction: "Enter a living landscape shaped by the movement of millions of animals.", description: "Each season reveals a different Serengeti. Calving herds gather in the south, river crossings animate the north and resident predators make every region rewarding throughout the year.", bestFor: "The migration, predators and classic safari scale", suggestedStay: "4–6 nights", gallery: [serengetiImage, lionessImage, heroImage] },
      { slug: "ngorongoro", name: "Ngorongoro", strapline: "A world within a crater", image: ngorongoroImage, introduction: "Descend from misty highlands into a wildlife-rich volcanic caldera.", description: "The crater floor gathers an exceptional concentration of animals beneath steep green walls. Pair a private descent with highland walks and time in the quieter landscapes beyond the rim.", bestFor: "Wildlife variety, scenery and short stays", suggestedStay: "1–2 nights", gallery: [ngorongoroImage, serengetiImage, heroImage] },
      { slug: "zanzibar", name: "Zanzibar", strapline: "Spice-scented shores", image: zanzibarImage, introduction: "Slow down between turquoise water, coral reefs and centuries of Swahili history.", description: "Zanzibar is more than a beach stay. Explore Stone Town with a local storyteller, sail in a traditional dhow and retreat to a quiet coast where the tides set the rhythm.", bestFor: "Honeymoons, culture and post-safari rest", suggestedStay: "4–7 nights", gallery: [zanzibarImage, dianiImage, ngorongoroImage] },
      { slug: "tarangire", name: "Tarangire", strapline: "Baobabs and elephants", image: heroImage, introduction: "Discover a quieter northern landscape defined by ancient trees and a life-giving river.", description: "During the dry season, wildlife gathers along the Tarangire River in impressive numbers. The park’s wooded valleys and baobab-studded hills feel distinct from the open Serengeti.", bestFor: "Elephants, birdlife and quieter camps", suggestedStay: "2–3 nights", gallery: [heroImage, amboseliImage, giraffeImage] },
    ],
  },
  {
    slug: "zambia",
    name: "Zambia",
    eyebrow: "Africa on foot",
    introduction: "Wild rivers, exceptional guiding and a powerful sense of remoteness.",
    description: "Zambia rewards curious travellers with pioneering walking safaris, intimate bush camps and dramatic waterways where each day feels spontaneous and deeply connected to nature.",
    image: southLuangwaImage,
    areas: [
      { slug: "south-luangwa", name: "South Luangwa", strapline: "Where walking safaris began", image: southLuangwaImage, introduction: "Read the bush at ground level with some of Africa’s finest walking guides.", description: "Leopard-rich woodland, oxbow lagoons and seasonal rivers make South Luangwa endlessly engaging. Combine drives with guided walks and nights in small, remote bush camps.", bestFor: "Walking safaris, leopards and seasoned travellers", suggestedStay: "4–6 nights", gallery: [southLuangwaImage, lionessImage, giraffeImage] },
      { slug: "lower-zambezi", name: "Lower Zambezi", strapline: "Safari by river", image: heroImage, introduction: "Drift past elephants and hippos beneath the escarpment of the Zambezi Valley.", description: "Here the river expands the safari beyond the vehicle. Canoe quiet channels, cruise at sunset, fish for tigerfish and explore inland by foot with an expert private guide.", bestFor: "Canoeing, river life and varied activities", suggestedStay: "3–5 nights", gallery: [heroImage, victoriaFallsImage, amboseliImage] },
      { slug: "kafue", name: "Kafue", strapline: "Vast and untamed", image: serengetiImage, introduction: "Travel far from familiar circuits into one of Africa’s largest protected areas.", description: "Kafue’s Busanga Plains fill with wildlife and birdlife as seasonal floodwaters recede. Its scale, few vehicles and adventurous camps create a genuine wilderness experience.", bestFor: "Remote wilderness, birdlife and repeat visitors", suggestedStay: "3–5 nights", gallery: [serengetiImage, southLuangwaImage, ngorongoroImage] },
      { slug: "victoria-falls", name: "Victoria Falls", strapline: "The smoke that thunders", image: victoriaFallsImage, introduction: "Feel the spray and scale of one of the world’s great natural spectacles.", description: "Follow rainforest paths beside the falls, take a sunset river cruise or add a scenic flight for the full perspective. Water levels transform the experience through the year.", bestFor: "Natural wonder, adventure and safari finales", suggestedStay: "2–3 nights", gallery: [victoriaFallsImage, southLuangwaImage, zanzibarImage] },
    ],
  },
] as const;

export function getCountry(countrySlug: string) {
  return countryDestinations.find((country) => country.slug === countrySlug);
}

export function getTravelArea(countrySlug: string, areaSlug: string) {
  const country = getCountry(countrySlug);
  const area = country?.areas.find((item) => item.slug === areaSlug);
  return country && area ? { country, area } : undefined;
}
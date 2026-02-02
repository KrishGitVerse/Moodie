import cute from "../assets/CuteGem.jpg";
import sparkle from "../assets/LittleSparkle.jpg";
import saycheese from "../assets/SayCheese.jpg";
import soft from "../assets/SoftandSweet.jpg";
import sundar from "../assets/SundarApsara.jpeg";
import reeva from "../assets/ReevaWithKwity.jpeg"
import reeva2 from "../assets/ReevaWithKwity2.jpeg"
import didi from "../assets/Didi.jpeg"
import garba from "../assets/garbaQueen.jpeg"
import reeva3 from "../assets/Reeva.jpeg";


export interface Photo {
  url: string;
  alt: string;
  title: string;
}

export const photos: Photo[] = [
  {
    url: cute,
    alt: "A cutie",
    title: "Cute Gem"
  },
  {
    url: sparkle,
    alt: "Fluffy cat lounging",
    title: "Cozy Kitty"
  },
  {
    url: saycheese,
    alt: "Adorable brown puppy",
    title: "Sweet Pup"
  },
  {
    url: reeva3,
    alt: "Peaceful sunrise over mountain",
    title: "Beautiful Dawn"
  },
  {
    url: sundar,
    alt: "Colorful rainbow in nature",
    title: "After the Storm"
  },
  {
    url: reeva,
    alt: "Playful golden retriever",
    title: "Happy Dog"
  },
  {
    url: reeva2,
    alt: "Cute orange kitten",
    title: "Purrfect"
  },
  {
    url: didi,
    alt: "Serene forest path",
    title: "Peace & Calm"
  },
  {
    url: garba,
    alt: "Happy smiling dog",
    title: "Pure Joy"
  }
];

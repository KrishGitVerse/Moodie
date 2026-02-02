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
    alt: "છોટા પેકેટ બડા ધમાકા",
    title: "ઢીંગલુ"
  },
  {
    url: sparkle,
    alt: "Maar khavo che tare😅",
    title: "મીની Kwity"
  },
  {
    url: saycheese,
    alt: "Cheese Mne Bau Bhave🧀",
    title: "બોલો Cheese"
  },
  {
    url: reeva3,
    alt: "Reeva: Kwity, Chuk chuk Ghadi",
    title: "7th Heaven"
  },
  {
    url: sundar,
    alt: "",
    title: "Hein! Yeh Kya Hui"
  },
  {
    url: reeva,
    alt: "",
    title: "Two-Beautiful"
  },
  {
    url: reeva2,
    alt: "માજા આવે છે kwity, હાજી ઊંચું",
    title: "ઉદીબાબા"
  },
  {
    url: didi,
    alt: "Sister's Love",
    title: "ડબલ ધમાલ"
  },
  {
    url: garba,
    alt: "હાશ! મેં તો થક ગઈ",
    title: "ગરબાQueen"
  }
];

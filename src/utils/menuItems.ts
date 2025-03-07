import { Menus } from "../types/menu";
import { Bundle } from "../types/menu";

import chocolate from "../assets/images/menu/chocolate.jpg";
import strawberry from "../assets/images/menu/strawberry.jpg";
import blueberry from "../assets/images/menu/strawberry.jpg";
import original from "../assets/images/menu/original.jpg";
import sosis from "../assets/images/menu/sosis.jpg";

import bombolone from "../assets/images/menu/bombolonibundle.jpg";

export const menuBundle: Bundle[] = [
  {
    id: 1,
    name: "Paket Mix and Match",
    price: 30000,
    image: bombolone,
    variant: [
      { name: "Chocolate", color: "#B77B57" },
      { name: "Strawberry", color: "#D17BA0" },
      { name: "Blueberry", color: "#6A5CB2" },
      { name: "Original", color: "#D2B48C" },
      { name: "Custom", color: "" }, // Kosong untuk Custom
    ],
  },
];

export const menuDonat: Menus[] = [
  {
    id: 1,
    name: "Chocolate",
    image: chocolate,
    color: "#B77B57",
    price: 2500,
  },
  {
    id: 2,
    name: "Strawberry",
    image: strawberry,
    color: "#D17BA0",
    price: 2500,
  },
  {
    id: 3,
    name: "Blueberry",
    image: blueberry,
    color: "#6A5CB2",
    price: 2500,
  },
  { id: 4, name: "Original", image: original, color: "#D2B48C", price: 2500 },
  { id: 5, name: "Sosis", image: sosis, color: "#F8A488", price: 3000 },
];

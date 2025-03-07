export interface Menus {
  id: number;
  name: string;
  image: string;
  color: string;
  price: number;
}

export interface Bundle {
  id: number;
  name: string;
  price: number;
  image: string;
  variant?: { name: string; color: string }[];
}

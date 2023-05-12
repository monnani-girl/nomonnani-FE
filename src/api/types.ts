export type Products = {
  id: number;
  product: string;
  type: string;
  name: string;
  price: number;
  place: string;
  image: string;
  site: string;
};

export interface ResultProps {
  type: string;
  products: Products[];
  nickname: string;
  quote: string;
}

export interface SelectedProps {
  season: string;
  weather: string;
  feel: string;
  travel: string;
  photo: string;
}

export interface Visitor {
  session_count: number;
}

export type Sales = {
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
  sales: Sales[];
}

export interface SelectedProps {
  season: string;
  weather: string;
  feel: string;
  travel: string;
  photo: string;
}

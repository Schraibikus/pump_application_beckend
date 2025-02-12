export interface Products {
  products: Product[];
}
export interface Product {
  id: number;
  src: string;
  width: number;
  path: string;
  name: string;
  drawing: number;
  parts: LinkItem[];
}

export interface LinkItem {
  id: number;
  position: number;
  name: string;
  description?: string;
  designation?: string;
  quantity?: number;
  drawing?: number;
  positioning: {
    top?: number | string;
    left?: number | string;
    top2?: number | string;
    left2?: number | string;
    top3?: number | string;
    left3?: number | string;
    top4?: number | string;
    left4?: number | string;
    top5?: number | string;
    left5?: number | string;
  };
}

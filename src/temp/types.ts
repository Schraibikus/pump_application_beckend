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
  parts: PartItem[];
}

export interface PartItem {
  id: number;
  position: number;
  name: string;
  description?: string;
  designation?: string;
  quantity?: number;
  drawing?: number;
  positioning_top?: number | string;
  positioning_left?: number | string;
  positioning_top2?: number | string;
  positioning_left2?: number | string;
  positioning_top3?: number | string;
  positioning_left3?: number | string;
  positioning_top4?: number | string;
  positioning_left4?: number | string;
  positioning_top5?: number | string;
  positioning_left5?: number | string;
}

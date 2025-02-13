export interface Product {
  id: number;
  src: string;
  width: number;
  path: string;
  name: string;
  drawing?: number | null;
  parts: PartItem[];
}

export interface PartItem {
  id: number;
  parentProductId: Product["id"];
  productName: Product["name"];
  productDrawing?: Product["drawing"];
  position: number;
  name: string;
  description?: string;
  designation?: string;
  quantity: number;
  drawing?: number | null;
  positioning_top?: number | null;
  positioning_left?: number | null;
  positioning_top2?: number | null;
  positioning_left2?: number | null;
  positioning_top3?: number | null;
  positioning_left3?: number | null;
  positioning_top4?: number | null;
  positioning_left4?: number | null;
  positioning_top5?: number | null;
  positioning_left5?: number | null;
}

export interface Order {
  orderId: number;
  createdAt: string;
  parts: PartItem[];
}

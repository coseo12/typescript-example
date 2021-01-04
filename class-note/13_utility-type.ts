interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

//* 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  return null;
}

type PickItem = Pick<Product, 'id' | 'name' | 'price'>;
function pickType(pickItem: PickItem): void {
  pickItem.id;
  pickItem.name;
  pickItem.price;
}

type OmitItem = Omit<Product, 'stock' | 'brand'>;
function omitType(omitItem: OmitItem): void {
  omitItem.id;
  omitItem.name;
  omitItem.price;
}

type PartialItem = Partial<Product>;
function PartialType(partialItem: PartialItem): void {
  partialItem.id;
  partialItem.name;
  partialItem.price;
}

// TODO: 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhtoUrl: string;
}

type Subset<T> = {
  [p in keyof T]?: T[p];
};

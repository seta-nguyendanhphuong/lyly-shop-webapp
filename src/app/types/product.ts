export type Product = {
  id: string;
  name: string;
  productImage: { url: string }[];
  productRetailPrice: number;
  productRentalPrice: number;
  productCategory: string;
  productDescription?: string; // Optional nếu có
};

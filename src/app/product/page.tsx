import ProductCard from "../components/ProductCard";

interface Products {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  rentalPrice: number;
}

export const products = [
  {
    id: "1",
    name: "Áo dài Việt Nam",
    imageUrl: "/images/aodai.jpg",
    price: 300000,
    rentalPrice: 50000,
  },
  {
    id: "2",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
  },
  {
    id: "3",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
  },
  {
    id: "4",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
  },
  {
    id: "5",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
  },
  {
    id: "6",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
  },
  {
    id: "7",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
  },
  {
    id: "8",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
  },
];

export default function Products() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Danh sách sản phẩm
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

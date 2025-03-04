"use client";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

interface Products {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  rentalPrice: number;
  category: string;
}

export const products = [
  {
    id: "1",
    name: "Áo dài Việt Nam",
    imageUrl: "/images/aodai.jpg",
    price: 300000,
    rentalPrice: 50000,
    category: "aodai",
  },
  {
    id: "2",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
    category: "aodai",
  },
  {
    id: "3",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
    category: "aodai",
  },
  {
    id: "4",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
    category: "aodai",
  },
  {
    id: "5",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
    category: "aodai",
  },
  {
    id: "6",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
    category: "aodai",
  },
  {
    id: "7",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
    category: "aodai",
  },
  {
    id: "8",
    name: "Vest Nam",
    imageUrl: "/images/aodai.jpg",
    price: 600000,
    rentalPrice: 100000,
    category: "aodai",
  },
];
const categories: string[] = ["Tất cả", "aodai", "Vest", "Dạ hội"];
const sortOptions = [
  { value: "price-asc", label: "Giá bán: Thấp → Cao" },
  { value: "price-desc", label: "Giá bán: Cao → Thấp" },
  { value: "rental-asc", label: "Giá thuê: Thấp → Cao" },
  { value: "rental-desc", label: "Giá thuê: Cao → Thấp" },
  { value: "name-asc", label: "Tên: A → Z" },
  { value: "name-desc", label: "Tên: Z → A" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [sortOption, setSortOption] = useState<string>("");

  // Lọc sản phẩm theo danh mục
  let filteredProducts =
    selectedCategory === "Tất cả"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Sắp xếp sản phẩm theo bộ lọc
  if (sortOption) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rental-asc":
          return a.rentalPrice - b.rentalPrice;
        case "rental-desc":
          return b.rentalPrice - a.rentalPrice;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Danh sách sản phẩm
      </h1>

      {/* Bộ lọc danh mục */}
      <div className="flex justify-center space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-lg ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Bộ lọc sắp xếp */}
      <div className="flex justify-end mb-6">
        <select
          className="border px-4 py-2 rounded-lg"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sắp xếp theo</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Danh sách sản phẩm
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

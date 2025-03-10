"use client";

import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useSearch } from "@/app/components/SearchContext";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  rentalPrice: number;
  category: string;
}

export const products: Product[] = [
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
    imageUrl: "/images/vest.jpg",
    price: 600000,
    rentalPrice: 100000,
    category: "vest",
  },
];

const categories: string[] = ["Tất cả", "aodai", "vest", "dahoi"];
const sortOptions = [
  { value: "price-asc", label: "Giá bán: Thấp → Cao" },
  { value: "price-desc", label: "Giá bán: Cao → Thấp" },
  { value: "rental-asc", label: "Giá thuê: Thấp → Cao" },
  { value: "rental-desc", label: "Giá thuê: Cao → Thấp" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [sortOption, setSortOption] = useState<string>("");
  const { searchQuery } = useSearch();

  // **Lọc sản phẩm theo danh mục & tìm kiếm**
  let filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "Tất cả" ||
        product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // **Sắp xếp sản phẩm**
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

        default:
          return 0;
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Danh sách sản phẩm
      </h1>

      {/* Bộ lọc */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-lg transition-all ${
                selectedCategory === category
                  ? "bg-[#F27121] text-white"
                  : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

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

      {/* Hiển thị sản phẩm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Không tìm thấy sản phẩm.
          </p>
        )}
      </div>
    </div>
  );
}

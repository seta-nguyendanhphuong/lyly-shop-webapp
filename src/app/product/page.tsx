"use client";

import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useSearch } from "@/app/components/SearchContext";
import { fetchProduct } from "@/app/components/FetchProduct";
import { fetchCategories } from "@/app/components/FetchCategories";
import { Product } from "@/app/types/product";

const sortOptions = [
  { value: "price-asc", label: "Giá bán: Thấp → Cao" },
  { value: "price-desc", label: "Giá bán: Cao → Thấp" },
  { value: "rental-asc", label: "Giá thuê: Thấp → Cao" },
  { value: "rental-desc", label: "Giá thuê: Cao → Thấp" },
];

export default function Products() {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [sortOption, setSortOption] = useState<string>("");
  const { searchQuery } = useSearch();

  // **Fetch danh mục từ API**
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await fetchCategories();
        console.log("Danh mục API:", response);

        if (response?.data) {
          const categoryList = response.data.map((c: any) => ({
            id: c.id,
            name: c.name,
          }));
          setCategories([{ id: 0, name: "Tất cả" }, ...categoryList]);
        }
      } catch (error) {
        console.error("Lỗi khi fetch danh mục:", error);
      }
    };

    loadCategories();
  }, []);

  // **Fetch sản phẩm từ API**
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProduct();
        console.log("Sản phẩm API:", response);

        if (response?.data) {
          const products = response.data.map((item: any) => ({
            id: item.id,
            name: item.name,
            productImage: item.productImage || [],
            productRentalPrice: item.productRentalPrice,
            productRetailPrice: item.productRetailPrice,
            productCategory:
              item.categories.length > 0 ? item.categories[0].id : 0,
          }));

          setListProduct(products);
        }
      } catch (error) {
        console.error("Lỗi khi fetch sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // **Lọc sản phẩm theo danh mục & tìm kiếm**
  let filteredProducts = listProduct.filter(
    (product) =>
      (selectedCategory === 0 ||
        product.productCategory === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // **Sắp xếp sản phẩm**
  if (sortOption) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.productRetailPrice - b.productRetailPrice;
        case "price-desc":
          return b.productRetailPrice - a.productRetailPrice;
        case "rental-asc":
          return a.productRentalPrice - b.productRentalPrice;
        case "rental-desc":
          return b.productRentalPrice - a.productRentalPrice;
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
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-lg transition-all ${
                selectedCategory === category.id
                  ? "bg-[#F27121] text-white"
                  : "bg-gray-200"
              }`}
            >
              {category.name}
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
      {loading ? (
        <p className="text-center text-gray-500">Đang tải sản phẩm...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              productImage={
                product.productImage.length > 0
                  ? `http://127.0.0.1:1337${product.productImage[0].url}`
                  : "/default-image.jpg"
              }
              productRetailPrice={product.productRetailPrice}
              productRentalPrice={product.productRentalPrice}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          Không có sản phẩm trong danh mục này.
        </p>
      )}
    </div>
  );
}

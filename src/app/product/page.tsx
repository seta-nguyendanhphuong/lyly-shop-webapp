"use client";

import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useSearch } from "@/app/components/SearchContext";
import { Product } from "@/app/types/product";
import { fetchCategories } from "../components/FetchCategories";
import { fetchProduct } from "../components/FetchProduct";
interface FetchProductParams {
  page: number;
  pageSize: number;
  category?: number;
  search?: string;
  sort?: string;
}
export default function Products() {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { searchQuery } = useSearch();
  const [sortOption, setSortOption] =
    useState<FetchProductParams["sort"]>(undefined);

  const pageSize = 12; // Số sản phẩm mỗi trang
  const sortProducts = (
    products: Product[],
    sortOption: string | undefined
  ) => {
    if (!sortOption) return products;

    return [...products].sort((a, b) => {
      switch (sortOption) {
        case "productRentalPrice:asc":
          return a.productRentalPrice - b.productRentalPrice;
        case "productRentalPrice:desc":
          return b.productRentalPrice - a.productRentalPrice;
        case "productRetailPrice:asc":
          return a.productRetailPrice - b.productRetailPrice;
        case "productRetailPrice:desc":
          return b.productRetailPrice - a.productRetailPrice;
        default:
          return 0;
      }
    });
  };

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value.trim();
    setSortOption(value === "" ? undefined : value);
    setCurrentPage(1);
  };

  // Fetch danh mục
  useEffect(() => {
    const loadCategories = async () => {
      try {
        console.log("Fetch với sort:", sortOption);
        const response = await fetchCategories();
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

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchProduct({
          page: currentPage,
          pageSize,
          category: selectedCategory,
          search: searchQuery || "",
          sort: sortOption || undefined,
        });

        if (response?.data) {
          let products = response.data.map((item) => ({
            id: item.id,
            name: item.name,
            productImage: item.productImage || [],
            productRentalPrice: item.productRentalPrice,
            productRetailPrice: item.productRetailPrice,
            productCategory: item.categories?.[0]?.id || 0,
          }));
          products = sortProducts(products, sortOption);
          setListProduct(products);
          setTotalPages(response.meta.pagination.pageCount);
          console.log(
            response.meta.pagination,
            response.meta.pagination.pageCount
          );
        }
      } catch (error) {
        console.error("Lỗi khi fetch sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [currentPage, selectedCategory, searchQuery, sortOption]);
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
              onClick={() => handleCategoryChange(category.id)}
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

        {/* Sắp xếp */}
        <select
          className="px-4 py-2 rounded-lg border bg-white shadow-sm"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="">Mặc định</option>
          <option value="productRentalPrice:asc">Giá thuê thấp → cao</option>
          <option value="productRentalPrice:desc">Giá thuê cao → thấp</option>
          <option value="productRetailPrice:asc">Giá bán thấp → cao</option>
          <option value="productRetailPrice:desc">Giá bán cao → thấp</option>
        </select>
      </div>

      {/* Hiển thị sản phẩm */}
      {loading ? (
        <p className="text-center text-gray-500">Đang tải sản phẩm...</p>
      ) : listProduct.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listProduct.map((product) => (
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
        <p className="text-center text-gray-500">
          Không có sản phẩm trong danh mục này.
        </p>
      )}

      {/* Phân trang - Hiển thị luôn cả khi lọc danh mục */}
      <div className="flex justify-center mt-6">
        <button
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === 1 ? "bg-gray-300" : "bg-[#F27121] text-white"
          }`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Trước
        </button>
        <span className="px-4 py-2 mx-2 text-lg font-bold">
          {currentPage} / {totalPages}
        </span>
        <button
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-[#F27121] text-white"
          }`}
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Sau
        </button>
      </div>
    </div>
  );
}

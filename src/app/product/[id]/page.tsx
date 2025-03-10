"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { products } from "../page";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  rentalPrice: number;
  // description: string;
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-center text-2xl font-bold text-gray-600 mt-10">
        Không tìm thấy sản phẩm
      </h2>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        {product.name}
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Hình ảnh sản phẩm */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="text-xl font-semibold text-gray-700">
            Giá thuê:{" "}
            <span className="text-red-500 font-bold">
              {product.rentalPrice.toLocaleString("vi-VN")}đ
            </span>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Mô tả chi tiết:
            </h2>
            {/* <p className="text-gray-600 mt-2">{product.description}</p> */}
          </div>

          <div className="flex justify-center md:justify-start mt-6">
            <Link href="/contact">
              <button className="px-6 py-3 bg-[#F27121] text-white font-bold rounded-lg shadow-md hover:opacity-80 transition duration-300">
                Thuê ngay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <h2 className="text-center text-2xl font-bold">
        Không tìm thấy sản phẩm
      </h2>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">{product.name}</h1>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Phần ảnh sản phẩm */}
        <div className="flex-1">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full max-w-[400px] rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 md:ml-6 space-y-4">
          <div className="md:text-left font-bold text-xl">
            Giá thuê: {product.rentalPrice.toLocaleString("vi-VN")}đ
          </div>
          <div className="flex-1 md:ml-6 space-y-4">
            <h2 className="md:text-left font-bold text-xl">Mô tả chi tiết:</h2>
            {/* <p className="mt-2">{product.description}</p> */}
          </div>

          <div className="text-center mt-6">
            <Link href="/contact">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Thuê ngay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

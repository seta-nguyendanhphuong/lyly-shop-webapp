"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const productId = Array.isArray(id) ? id[0] : id;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    async function fetchProduct() {
      try {
        const res = await fetch(
          `http://localhost:1337/api/products/${productId}`
        );
        if (!res.ok) {
          throw new Error(`Lỗi HTTP! Status: ${res.status}`);
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Lỗi khi fetch sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  if (loading) return <p className="text-center text-lg mt-5">Đang tải...</p>;
  if (!product)
    return <p className="text-center text-lg mt-5">Không tìm thấy sản phẩm.</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        {product.name}
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
        {/* Hình ảnh sản phẩm */}
        <div className="w-full md:w-1/2">
          {product.productImage?.length > 0 ? (
            <img
              src={`http://localhost:1337${product.productImage[0].url}`}
              alt={product.productImage[0].alternativeText || product.name}
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          ) : (
            <div className="w-full h-60 flex items-center justify-center bg-gray-200 rounded-lg">
              <span className="text-gray-500">Không có hình ảnh</span>
            </div>
          )}
        </div>

        {/* Thông tin sản phẩm */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-gray-600">{product.productDescription}</p>

          <div className="text-lg font-semibold text-gray-700">
            Giá thuê:{" "}
            <span className="text-red-500 font-bold">
              {product.productRentalPrice.toLocaleString("vi-VN")} đ
            </span>
          </div>

          <div className="text-lg font-semibold text-gray-700">
            Giá bán:{" "}
            <span className="text-green-500 font-bold">
              {product.productRetailPrice.toLocaleString("vi-VN")} đ
            </span>
          </div>

          <button className="w-full md:w-auto px-6 py-3 bg-[#F27121] text-white font-bold rounded-lg shadow-md hover:opacity-80 transition duration-300">
            Thuê ngay
          </button>
        </div>
      </div>
    </div>
  );
}

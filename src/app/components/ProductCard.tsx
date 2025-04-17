"use client";
import Link from "next/link";

interface ProductProps {
  id: string;
  name: string;
  productImage: string;
  productRetailPrice?: number;
  productRentalPrice?: number;
}

export default function ProductCard({
  id,
  name,
  productImage,
  productRetailPrice,
  productRentalPrice,
}: ProductProps) {
  const imageUrl = productImage.startsWith("http")
    ? productImage
    : `http://127.0.0.1:1337${productImage}`;

  return (
    <Link href={`/product/${id}`} className="block">
      <div className="shadow-lg p-2 rounded-xl flex flex-col items-center hover:shadow-xl hover:cursor-pointer transition-transform transform hover:scale-105 relative overflow-hidden">
        <div className="relative w-full h-72 flex justify-center items-center bg-gray-100 rounded-[12px] overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
            Xem chi tiết
          </div>
        </div>
        <div className="w-full p-3 text-center">
          <h2 className="pb-2 pt-1 text-lg font-bold">{name}</h2>
          <div className="flex justify-between text-sm text-gray-600">
            <div>
              <span className="block">Giá bán</span>
              {productRetailPrice ? (
                <span className="text-lg font-medium text-gray-800">
                  {`${productRetailPrice.toLocaleString("vi-VN")} đ`}
                </span>
              ) : (
                <span className="text-gray-400">Liên hệ</span>
              )}
            </div>
            <div>
              <span className="block">Giá thuê</span>
              {productRentalPrice ? (
                <span className="text-lg font-medium text-gray-800">
                  {`${productRentalPrice.toLocaleString("vi-VN")} đ`}
                </span>
              ) : (
                <span className="text-gray-400">Liên hệ</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

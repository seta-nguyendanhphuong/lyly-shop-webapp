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
      <div className="shadow-lg p-1 rounded-xl flex flex-col items-center hover:shadow-xl hover:cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full rounded-[12px] hover:scale-110 transition ease-in-out"
          />
        </div>

        <div className="w-full p-3">
          <h2 className="text-center pb-2 pt-1 text-lg font-bold">{name}</h2>
          <div className="flex justify-between">
            <div>
              <div className="text-sm font-medium text-gray-500">Giá bán</div>
              <div className="text-lg font-medium flex items-center">
                {`${productRetailPrice?.toLocaleString("vi-VN")} đ`}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 text-right">
                Giá thuê
              </div>
              <div className="text-lg font-medium flex items-center">
                {`${productRentalPrice?.toLocaleString("vi-VN")} đ`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

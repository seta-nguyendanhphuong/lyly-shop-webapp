"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams(); // Lấy productId từ URL
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}?populate=*`
        );

        if (!res.ok) {
          throw new Error(`Lỗi HTTP! Status: ${res.status}`);
        }

        const data = await res.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Lỗi khi fetch sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.productDescription}</p>
      <p>Giá thuê: {product.rentalPrice}</p>
      <p>Giá bán: {product.retailPrice}</p>
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}${product.productImage?.data?.url}`}
        alt={product.name}
      />
    </div>
  );
}

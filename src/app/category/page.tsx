"use client";

import Link from "next/link";

const categories = [
  { id: "aodai", name: "Áo dài", image: "/images/aodai.jpg" },
  // { id: "vest", name: "Vest", image: "/images/vest.jpg" },
  // { id: "vay", name: "Váy dạ hội", image: "/images/vay.jpg" },
  // { id: "suit", name: "Suit", image: "/images/suit.jpg" },
];

export default function CategoryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Danh mục sản phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <div className="shadow-lg p-3 rounded-xl flex flex-col items-center hover:shadow-xl hover:cursor-pointer">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-lg font-bold mt-2">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

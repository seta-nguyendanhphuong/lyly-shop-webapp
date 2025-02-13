// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { IoSearchOutline } from "react-icons/io5";
// import { FaBars } from "react-icons/fa6";
// import { products } from "@/app/product/page";

// export default function Header() {
//   const pathname = usePathname(); // Lấy đường dẫn hiện tại

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Category", path: "/category" },
//     { name: "Policy", path: "/policy" },
//     { name: "Product", path: "/product" },
//   ];

//   return (
//     <header className="flex items-center justify-between px-10 py-3 max-w-[1440px] mx-auto">
//       <div className="italic text-[20px] font-title">LyLy</div>

//       <nav className="flex">
//         <ul className="flex justify-center w-full font-bold text-[#003459]">
//           {menuItems.map((item) => (
//             <li key={item.path}>
//               <Link href={item.path}>
//                 <p
//                   className={`p-4 ${
//                     pathname === item.path ? "text-[#ff4d4f]" : "text-[#003459]"
//                   }`}
//                 >
//                   {item.name}
//                 </p>
//               </Link>
//             </li>
//           ))}
//           {products &&
//             products.map((product) => (
//               <li key={product.id}>
//                 <Link href={`/product/${product.id}`}>
//                   <p
//                     className={`p-4 ${
//                       pathname.startsWith(`/product/${product.id}`)
//                         ? "text-[#ff4d4f]"
//                         : "text-[#003459]"
//                     }`}
//                   >
//                     {/* {product.name} */}
//                   </p>
//                 </Link>
//               </li>
//             ))}
//         </ul>
//       </nav>

//       <div className="flex items-center">
//         <div className="flex items-center mr-8 bg-white pl-3 rounded-3xl">
//           <IoSearchOutline />
//           <input
//             type="text"
//             placeholder="Search something here!"
//             className="rounded-3xl py-1.5 pl-3 pr-10 outline-none text-[14px]"
//           />
//         </div>
//         <div>
//           <img src="https://flagcdn.com/vn.svg" width="30" alt="Vietnam Flag" />
//         </div>
//       </div>

//       <div className="sm:block hidden">
//         <FaBars />
//       </div>
//     </header>
//   );
// }
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Category", path: "/category" },
    { name: "Policy", path: "/policy" },
    { name: "Product", path: "/product" }, // Link tới trang sản phẩm
  ];

  return (
    <header className="flex items-center justify-between px-10 py-3 max-w-[1440px] mx-auto">
      <div className="italic text-[20px] font-title">LyLy</div>

      <nav className="flex">
        <ul className="flex justify-center w-full font-bold text-[#003459]">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <p
                  className={`p-4 ${
                    pathname === item.path ? "text-[#ff4d4f]" : "text-[#003459]"
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center">
        <div className="flex items-center mr-8 bg-white pl-3 rounded-3xl">
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Search something here!"
            className="rounded-3xl py-1.5 pl-3 pr-10 outline-none text-[14px]"
          />
        </div>
        <div>
          <img src="https://flagcdn.com/vn.svg" width="30" alt="Vietnam Flag" />
        </div>
      </div>

      <div className="sm:block hidden">
        <FaBars />
      </div>
    </header>
  );
}

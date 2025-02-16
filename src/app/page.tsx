"use client";
import Image from "next/image";
import Banner from "./components/common/Banner";
import BannerImageSrc from "../../public/images/lyly_banner.jpg";
import ProductCard from "./components/ProductCard";
import { products } from "./product/page";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbHours24 } from "react-icons/tb";
import { IoIosSwap } from "react-icons/io";

// import { useEffect, useState } from "react";

export default function Home() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await
  //     }
  //   }
  // }, [])

  const renderBanner = () => {
    return (
      <>
        <Banner imgSrc={BannerImageSrc.src} />
      </>
    );
  };

  const renderTypeProduct = (type: string) => {
    return (
      <>
        <div className="flex justify-between items-center pt-[30px] pb-[20px]">
          <h2 className="font-bold text-2xl text-[#003459]">{type}</h2>

          <div className="border-solid border-2 pt-2 pb-2 pr-6 pl-6 rounded-[32px] border-[#003459] text-[#003459] font-medium hover:cursor">
            Xem thêm
          </div>
        </div>
      </>
    );
  };

  const renderProducts = () => {
    return (
      <div className="grid xl:grid-cols-4 gap-[20px] lg:grid-cols-3 grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  };

  const renderService = () => {
    return (
      <div className="min-h-[100px] py-14">
        <div className="flex w-[81%] mx-auto justify-around items-stretch">
          <div className="flex flex-col items-center min-h-2">
            <CiDeliveryTruck fontSize={"60px"} />
            <div className="text-[20px] font-medium text-gray-500 mt-3">
              Vân chuyển nhanh
            </div>
          </div>

          <div className="flex flex-col max-h-[200px] pl-[1px] bg-gray-300 border-1 border-black border-solid"></div>

          <div className="flex flex-col items-center min-h-2">
            <IoChatbubblesOutline fontSize={"60px"} />
            <div className="text-[20px] font-medium text-gray-500 mt-3">
              Tư vấn nhiệt tình
            </div>
          </div>

          <div className="flex flex-col max-h-[200px] pl-[1px] bg-gray-300 border-1 border-black border-solid"></div>

          <div className="flex flex-col items-center min-h-2">
            <TbHours24 fontSize={"60px"} />
            <div className="text-[20px] font-medium text-gray-500 mt-3">
              Hộ Trợ 24/7
            </div>
          </div>

          <div className="flex flex-col max-h-[200px] pl-[1px] bg-gray-300 border-1 border-black border-solid"></div>

          <div className="flex flex-col items-center min-h-2">
            <IoIosSwap fontSize={"60px"} />
            <div className="text-[20px] font-medium text-gray-500 mt-3">
              Đổi & Trả
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderBanner()}

      {/* Body */}
      <div className="min-h-[900px] w-full max-w-[1440px] mx-auto">
        <div className="w-[81%] mx-auto">
          {renderTypeProduct("Sản phẩm được thuê nhiều")}
          {renderProducts()}
        </div>
      </div>
      <div className="min-h-[900px] w-full max-w-[1440px] mx-auto">
        <div className="w-[81%] mx-auto">
          {renderTypeProduct("Sản phẩm của chúng tôi")}
          {renderProducts()}
        </div>
        {renderService()}
      </div>
    </div>
  );
}

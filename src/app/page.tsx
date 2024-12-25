import Image from "next/image";
import Banner from "./components/common/Banner";
import BannerImageSrc from "../../public/images/lyly_banner.jpg";
import ProductCard from "./components/ProductCard";
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

  const renderPopularProductIntro = () => {
    return (
      <>
        <div className="flex justify-between items-center pt-[30px] pb-[20px]">
          <h2 className="font-bold text-2xl text-[#003459]">
            Sản phẩm được thuê nhiều
          </h2>

          <div className="border-solid border-2 pt-2 pb-2 pr-6 pl-6 rounded-[32px] border-[#003459] text-[#003459] font-semibold hover:cursor">
            Xem thêm{" "}
          </div>
        </div>
      </>
    );
  };

  const renderProducts = () => {
    return (
      <div className="grid grid-cols-4 gap-[20px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    );
  };

  const renderService = () => {
    return <div className="min-h-[100px] border-[1px]"></div>;
  };

  return (
    <div>
      {renderBanner()}

      {/* Body */}
      <div className="min-h-[900px] w-[81%] mx-auto">
        {renderPopularProductIntro()}
        {renderProducts()}
      </div>
      {renderService()}
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Banner from "./components/common/Banner";
import BannerImageSrc from "../../public/images/lyly_banner1.jpg";
import ProductCard from "./components/ProductCard";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbHours24 } from "react-icons/tb";
import { IoIosSwap } from "react-icons/io";
import AdvertisementBanner from "./components/AdvertisementBanner";
import { fetchProductHome } from "@/app/components/FetchProduct";
import Link from "next/link";
import { Product } from "@/app/types/product";

export default function Home() {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProductHome();
        if (response?.data) {
          setListProduct(
            response.data.map((item: any) => ({
              id: item.id,
              name: item.name,
              productImage: item.productImage || [],
              productRentalPrice: item.productRentalPrice,
              productRetailPrice: item.productRetailPrice,
              productCategory: item.productCategory,
            }))
          );
        }
      } catch (error) {
        console.error("Lỗi khi fetch sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const renderBanner = () => {
    return <Banner imgSrc={BannerImageSrc.src} />;
  };

  const renderPopularCategory = () => {
    const fashionTypes = [
      {
        name: "Áo Dài",
        url: "/images/popu_cate1.jpg",
      },
      {
        name: "Dân Gian",
        url: "/images/popu_cate2.jpg",
      },
      {
        name: "Váy Bồng",
        url: "/images/popu_cate3.jpg",
      },
    ];

    return (
      <div className="grid grid-cols-3 gap-4 h-[250px]">
        {fashionTypes.map((type, index) => (
          <div
            key={index}
            className="relative h-full flex items-center justify-center group rounded-lg cursor-pointer overflow-hidden"
          >
            {/* Background image layer with blur */}
            <div
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url('${type.url}')` }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content layer */}
            <div className="relative z-10 text-white text-center w-full h-full flex justify-center items-end pb-10">
              <span className="text-2xl font-semibold block">{type.name}</span>
              <Link href="/product">
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg text-blue-200">
                  Xem thêm
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTypeProduct = (type: string) => {
    return (
      <div className="flex justify-between items-center pt-[30px] pb-[20px]">
        <h2 className="font-bold text-2xl text-[#003459]">{type}</h2>
        <Link href="/product">
          <div className="border-solid border-2 px-6 py-2 rounded-[32px] border-[#003459] text-[#003459] font-medium cursor-pointer hover:bg-[#003459] hover:text-white transition">
            Xem thêm
          </div>
        </Link>
      </div>
    );
  };

  const renderProducts = () => {
    if (loading) {
      return <p className="text-center text-lg">Đang tải sản phẩm...</p>;
    }

    if (listProduct.length === 0) {
      return (
        <p className="text-center text-lg text-gray-500">
          Không có sản phẩm nào.
        </p>
      );
    }

    return (
      <div className="grid xl:grid-cols-4 gap-[20px] lg:grid-cols-3 grid-cols-2">
        {listProduct?.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            productImage={
              product.productImage.length > 0
                ? `http://127.0.0.1:1337${product.productImage[0].url}`
                : "/default-image.jpg"
            }
            productRetailPrice={product.productRetailPrice}
            productRentalPrice={product.productRentalPrice}
          />
        ))}{" "}
      </div>
    );
  };

  const renderSponsor = () => {
    const sponsorImages = [
      "https://ntthnue.edu.vn/uploads/Images/2023/V3/Logo_Web_Bo%20tr%E1%BA%AFng.png",
      "https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG",
      "https://thcs-doanthidiem.edu.vn/site/upload/generals/vietsmart_logo.jpg",
      "https://www.vnu.edu.vn/upload/2015/01/17449/image/Logo-VNU-1995.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/LogoUTC.jpg/500px-LogoUTC.jpg",
      "https://i3.connections.vn/huc.edu.vn/img/logo/logohuc.png?fit=194,200&quality=100&pv=29",
      "https://mariecuriehanoischool.com/images/GIAOVU/logo-MC-anh.jpg",
      "https://cdn.haitrieu.com/wp-content/uploads/2021/12/Logo-DH-San-Khau-Dien-Anh-Ha-Noi-SKDA-Wh.png",
    ];
    return (
      <div className="min-h-[100px] py-10">
        <h1 className="text-center pb-10 text-2xl font-bold text-[#003459]">
          Proud to sponsor for{" "}
        </h1>
        <div className="flex w-[81%] mx-auto justify-around items-stretch">
          {sponsorImages.map((e, i) => (
            <div
              key={i}
              className="transition-transform duration-300 transform hover:-translate-y-2"
            >
              <img src={e} alt="" width={"65px"} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderService = () => {
    return (
      <div className="min-h-[100px] py-14">
        <div className="flex w-[81%] mx-auto justify-around items-stretch">
          <div className="flex flex-col items-center min-h-2">
            <CiDeliveryTruck fontSize={"60px"} color={"gray"} />
            <div className="text-[20px] font-medium text-gray-500 mt-3">
              Vân chuyển nhanh
            </div>
          </div>

          <div className="flex flex-col max-h-[200px] pl-[1px] bg-gray-300 border-1 border-black border-solid"></div>

          <div className="flex flex-col items-center min-h-2">
            <IoChatbubblesOutline fontSize={"60px"} color={"gray"} />
            <div className="text-[20px] font-medium text-gray-500 mt-3">
              Tư vấn nhiệt tình
            </div>
          </div>

          <div className="flex flex-col max-h-[200px] pl-[1px] bg-gray-300 border-1 border-black border-solid"></div>

          <div className="flex flex-col items-center min-h-2">
            <TbHours24 fontSize={"60px"} color={"gray"} />
            <div className="text-[20px] font-medium text-gray-500 mt-3">
              Hộ Trợ 24/7
            </div>
          </div>

          <div className="flex flex-col max-h-[200px] pl-[1px] bg-gray-300 border-1 border-black border-solid"></div>

          <div className="flex flex-col items-center min-h-2">
            <IoIosSwap fontSize={"60px"} color={"gray"} />
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
      {/* <Slideshow /> */}
      <div className="min-h-[900px] w-full max-w-[1440px] mx-auto">
        <div className="w-[81%] mx-auto pt-5">
          {renderSponsor()}
          <AdvertisementBanner
            discount={50}
            advertiseImage={
              "https://images.pexels.com/photos/5622859/pexels-photo-5622859.jpeg?auto=compress&cs=tinysrgb&w=1200"
            }
            startDate="30/04"
            endDate="01/05"
          />
          {renderTypeProduct("Loại sản phẩm nổi bật")}
          {renderPopularCategory()}
          {renderTypeProduct("Sản phẩm được thuê nhiều")}
          {renderProducts()}
        </div>
      </div>

      <div className="min-h-[200px] w-full max-w-[1440px] mx-auto">
        <div className="w-[81%] mx-auto">
          {/* {renderTypeProduct("Sản phẩm của chúng tôi")} */}
          {/* {renderProducts()} */}
          {renderService()}
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Banner from "./components/common/Banner";
import BannerImageSrc from "../../public/images/lyly_banner.jpg";
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
        {listProduct.map((product) => (
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
    return (
      <div className="min-h-[100px] py-14">
        <h1 className="text-center pb-10 text-2xl font-bold text-[#003459]">
          Proud to sponsor for{" "}
        </h1>
        <div className="flex w-[81%] mx-auto justify-around items-stretch">
          <div>
            <img
              src="https://ntthnue.edu.vn/uploads/Images/2023/V3/Logo_Web_Bo%20tr%E1%BA%AFng.png"
              alt=""
              width={"65px"}
            />
          </div>

          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG"
              alt=""
              width={"65px"}
            />
          </div>

          <div>
            <img
              src="https://ntthnue.edu.vn/uploads/Images/2023/V3/Logo_Web_Bo%20tr%E1%BA%AFng.png"
              alt=""
              width={"65px"}
            />
          </div>

          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG"
              alt=""
              width={"65px"}
            />
          </div>

          <div>
            <img
              src="https://ntthnue.edu.vn/uploads/Images/2023/V3/Logo_Web_Bo%20tr%E1%BA%AFng.png"
              alt=""
              width={"65px"}
            />
          </div>

          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG"
              alt=""
              width={"65px"}
            />
          </div>

          <div>
            <img
              src="https://ntthnue.edu.vn/uploads/Images/2023/V3/Logo_Web_Bo%20tr%E1%BA%AFng.png"
              alt=""
              width={"65px"}
            />
          </div>

          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG"
              alt=""
              width={"65px"}
            />
          </div>
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
      <div className="min-h-[900px] w-full max-w-[1440px] mx-auto">
        <div className="w-[81%] mx-auto">
          {/* <AdvertisementBanner /> */}
          {renderTypeProduct("Sản phẩm được thuê nhiều")}
          {renderProducts()}
          {renderSponsor()}
        </div>
      </div>

      <div className="min-h-[200px] w-full max-w-[1440px] mx-auto">
        <div className="w-[81%] mx-auto">
          {/* {renderTypeProduct("Sản phẩm của chúng tôi")} */}
          {/* {renderProducts()} */}
          {/* {renderProducts()} */}
          {renderService()}
        </div>
      </div>
    </div>
  );
}

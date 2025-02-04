import Image from 'next/image';
import Banner from './components/common/Banner';
import BannerImageSrc from '../../public/images/lyly_banner.jpg';
import ProductCard from './components/ProductCard';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { TbHours24 } from 'react-icons/tb';
import { IoIosSwap } from 'react-icons/io';
import AdvertisementBanner from './components/AdvertisementBanner';

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
        <div className='flex justify-between items-center pt-[30px] pb-[20px]'>
          <h2 className='font-bold text-2xl text-[#003459]'>
            Sản phẩm được thuê nhiều
          </h2>

          <div className='border-solid border-2 pt-2 pb-2 pr-6 pl-6 rounded-[32px] border-[#003459] text-[#003459] font-medium hover:cursor'>
            Xem thêm{' '}
          </div>
        </div>
      </>
    );
  };

  const renderProducts = () => {
    return (
      <div className='grid xl:grid-cols-4 gap-[20px] lg:grid-cols-3 grid-cols-2'>
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

  const renderSponsor = () => {
    return (
      <div className='min-h-[100px] py-14'>
        <h1 className='text-center pb-10 text-2xl font-bold text-[#003459]'>
          Proud to sponsor for{' '}
        </h1>
        <div className='flex w-[81%] mx-auto justify-around items-stretch'>
          <div>
            <img
              src='https://ntthnue.edu.vn/uploads/Images/2023/V3/Logo_Web_Bo%20tr%E1%BA%AFng.png'
              alt=''
              width={'65px'}
            />
          </div>

          <div>
            <img
              src='https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG'
              alt=''
              width={'65px'}
            />
          </div>

          <div>
            <img
              src='https://ntthnue.edu.vn/uploads/Images/2023/V3/Logo_Web_Bo%20tr%E1%BA%AFng.png'
              alt=''
              width={'65px'}
            />
          </div>

          <div>
            <img
              src='https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG'
              alt=''
              width={'65px'}
            />
          </div>

          <div>
            <img
              src='https://ntthnue.edu.vn/uploads/Images/2023/V3/Logo_Web_Bo%20tr%E1%BA%AFng.png'
              alt=''
              width={'65px'}
            />
          </div>

          <div>
            <img
              src='https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG'
              alt=''
              width={'65px'}
            />
          </div>

          <div>
            <img
              src='https://ntthnue.edu.vn/uploads/Images/2023/V3/Logo_Web_Bo%20tr%E1%BA%AFng.png'
              alt=''
              width={'65px'}
            />
          </div>

          <div>
            <img
              src='https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG'
              alt=''
              width={'65px'}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderService = () => {
    return (
      <div className='min-h-[100px] py-14'>
        <div className='flex w-[81%] mx-auto justify-around items-stretch'>
          <div className='flex flex-col items-center min-h-2'>
            <CiDeliveryTruck fontSize={'60px'} color={'gray'} />
            <div className='text-[20px] font-medium text-gray-500 mt-3'>
              Vân chuyển nhanh
            </div>
          </div>

          <div className='flex flex-col max-h-[200px] pl-[1px] bg-gray-300 border-1 border-black border-solid'></div>

          <div className='flex flex-col items-center min-h-2'>
            <IoChatbubblesOutline fontSize={'60px'} color={'gray'} />
            <div className='text-[20px] font-medium text-gray-500 mt-3'>
              Tư vấn nhiệt tình
            </div>
          </div>

          <div className='flex flex-col max-h-[200px] pl-[1px] bg-gray-300 border-1 border-black border-solid'></div>

          <div className='flex flex-col items-center min-h-2'>
            <TbHours24 fontSize={'60px'} color={'gray'} />
            <div className='text-[20px] font-medium text-gray-500 mt-3'>
              Hộ Trợ 24/7
            </div>
          </div>

          <div className='flex flex-col max-h-[200px] pl-[1px] bg-gray-300 border-1 border-black border-solid'></div>

          <div className='flex flex-col items-center min-h-2'>
            <IoIosSwap fontSize={'60px'} color={'gray'} />
            <div className='text-[20px] font-medium text-gray-500 mt-3'>
              Đổi & Trả
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAdvertisement = () => {
    return (
      <div className='my-10'>
        <AdvertisementBanner />
      </div>
    );
  };

  return (
    <div>
      {renderBanner()}

      {/* Body */}
      <div className='min-h-[900px] w-full max-w-[1440px] mx-auto'>
        <div className='w-[81%] mx-auto'>
          {renderPopularProductIntro()}
          {renderProducts()}
          {renderAdvertisement()}
          {renderProducts()}
        </div>
        {renderSponsor()}
        {renderService()}
      </div>
    </div>
  );
}

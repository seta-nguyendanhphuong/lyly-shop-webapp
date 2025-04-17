import React from 'react';

export type Advertisement = {
  width?: string;
  height?: string;
  advertiseType?: 'sale off' | 'end year' | 'new model';
  discount?: number;
  advertiseImage?: string;
  startDate?: string;
  endDate?: string;
};

function AdvertisementBanner(props: Advertisement) {
  const { width, height, advertiseType, discount } = props;

  return (
    <div className='w-full bg-red-500 p-5 text-white'>
      <div>
        <div></div>
        <div className='text-6xl font-bold text-center'>SALE</div>
        <div></div>
      </div>

      <div className='text-4xl text-center my-2'>UP TO 50% OFF</div>

      <div className='text-center'>
        00/00 - 00/00
      </div>
    </div>
  );
}

export default AdvertisementBanner;

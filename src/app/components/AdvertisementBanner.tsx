import React from "react";

export type Advertisement = {
  advertiseType?: "sale off" | "end year" | "new model";
  discount?: number;
  advertiseImage?: string;
  startDate?: string;
  endDate?: string;
};

function AdvertisementBanner(props: Advertisement) {
  const { startDate, endDate, discount, advertiseImage } = props;

  return (
    <div
      className="w-full p-5 text-white rounded-sm h-[450px] flex flex-col justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('${advertiseImage}')`,
      }}
    >
      <div className="text-6xl font-bold text-center">SALE</div>
      <div className="text-4xl text-center my-4">UP TO {discount}% OFF</div>
      <div className="text-center text-xl">
        {startDate} - {endDate}
      </div>
    </div>
  );
}

export default AdvertisementBanner;

import React from "react";

export type Advertisement = {
  width?: string;
  height?: string;
  advertiseType?: "sale off" | "end year" | "new model";
  discount?: number;
  advertiseImage?: string;
  startDate?: string;
  endDate?: string;
};

function AdvertisementBanner(props: Advertisement) {
  const { width, height, advertiseType, discount } = props;

  return (
    <div className="w-full bg-sky-300 p-5 text-white rounded-sm">
      <div>
        <div></div>
        <div className="text-6xl font-bold text-center">SALE</div>
        <div></div>
      </div>

      <div className="text-4xl text-center my-2">UP TO 50% OFF</div>

      <div className="text-center">30/04 - 01/05</div>
    </div>
  );
}

export default AdvertisementBanner;

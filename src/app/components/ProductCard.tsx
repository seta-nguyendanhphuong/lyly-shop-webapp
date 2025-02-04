import React from "react";
import { BsTelephone } from "react-icons/bs";

export default function ProductCard() {
  return (
    <div className="shadow-lg p-1 rounded-xl flex flex-col items-center hover:shadow-xl hover:cursor-pointer">
      <div className="overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2081332/pexels-photo-2081332.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full rounded-[12px] hover:scale-110 transition ease-in-out"
        />
      </div>

      <div className="w-full p-3">
        <h2 className="text-center pb-2 pt-1 text-lg text-gray-800 font-bold">
          Áo dài việt nam
        </h2>
        <div className="flex justify-between">
          <div>
            <div className="text-sm font-medium text-gray-500">Giá bán</div>
            <div className="text-lg font-medium flex items-center">
              <BsTelephone fontSize={"14px"} color="black"/>
              <span className="p-0.5 pt-1 pl-1 text-gray-800">Liên hệ</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 text-right">
              Giá thuê
            </div>
            <div className="font-bold text-xl pt-0.5 text-gray-800">
              50.000<span className="text-sm">đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

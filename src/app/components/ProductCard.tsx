import React from "react";
import { BsTelephone } from "react-icons/bs";

export default function ProductCard() {
  return (
    <div className="shadow-lg p-1 rounded-xl flex flex-col items-center hover:shadow-xl hover:cursor-pointer">
      <div className="overflow-hidden">
        <img
          src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/468276844_122128733684429925_4985192768641574527_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=7P8UzOyBagAQ7kNvgHk1aPT&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=ADssnwfp2BXsR-NgknSffHK&oh=00_AYAaaP6hxlfzF4JNrqddQs_HtNZ1vA5KUw2s1ksC8yNzLA&oe=678DBBD6"
          alt=""
          className="w-full rounded-[12px] hover:scale-110 transition ease-in-out"
        />
      </div>

      <div className="w-full p-3">
        <h2 className="text-center pb-2 pt-1 text-lg font-bold">
          Áo dài việt nam
        </h2>
        <div className="flex justify-between">
          <div>
            <div className="text-sm font-medium text-gray-500">Giá bán</div>
            <div className="text-lg font-medium flex items-center">
              <BsTelephone fontSize={"14px"} />
              <span className="p-0.5 pt-1 pl-1">Liên hệ</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 text-right">
              Giá thuê
            </div>
            <div className="font-bold text-xl pt-0.5">
              50.000<span className="text-sm">đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

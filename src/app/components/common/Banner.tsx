import React from "react";

export type BannerProps = {
  GimgSrc: string;
};

export default function Banner({ imgSrc }: BannerProps) {
  return (
    <div className="w-full h-[450px] overflow-hidden">
      <img
        src={imgSrc}
        alt=""
        className="filter brightness-100 backdrop-opacity-20 w-full"
      />
    </div>
  );
}
9;

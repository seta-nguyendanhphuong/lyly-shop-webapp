import React from "react";

export type BannerProps = {
  GimgSrc: string;
};

export default function Banner({ imgSrc }: BannerProps) {
  return (
    <div className="w-full">
      <img src={imgSrc} alt="" />
    </div>
  );
}
9
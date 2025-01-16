import React from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-3 max-w-[1440px] mx-auto">
      <div className="italic text-[20px] font-title">LyLy</div>
      <nav className="flex">
        <ul className="flex justify-center w-full font-bold text-[#003459]">
          <div>
            <Link href={"/"}>
              <p className="p-4 text-[#003459]">Home</p>
            </Link>
          </div>
          <div>
            <Link href={"/about"}>
              <p className="p-4 text-[#003459]">About Us</p>
            </Link>
          </div>
          <div>
            <Link href={"/contact"}>
              <p className="p-4 text-[#003459]">Contact</p>
            </Link>
          </div>
          <div>
            <Link href={"/blog"}>
              <p className="p-4 text-[#003459]">Blog</p>
            </Link>
          </div>
          <div>
            <Link href={"/policy"}>
              <p className="p-4 text-[#003459]">Policy</p>
            </Link>
          </div>
        </ul>
      </nav>
      <div className="flex items-center">
        <div className="flex items-center mr-8 bg-white pl-3 rounded-3xl">
          <IoSearchOutline className="bg-pink" />
          <input
            type="text"
            placeholder="Search something hear!"
            className="rounded-3xl py-1.5 pl-3 pr-10 outline-none text-[14px]"
          />
        </div>
        <div className="">
          <img src="https://flagcdn.com/vn.svg" width="30" alt="" />
        </div>
      </div>

      <div className="sm:block hidden">
        <FaBars />
      </div>
    </header>
  );
}

import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="min-h-[200px] bg-neutral-800 rounded-t-1xl pt-16 text-[#fff]">
      <div className="w-[80%] mx-auto">
        <div className="max-w-[1140px] flex border-b-[1px] border-b-[#CCD1D2] items-bottom justify-around m-auto">
          <div className="flex items-start pb-7">
            <div className="flex flex-col justify-start h-full">
              <img
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/451127066_122093094416429925_8870156925694781423_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxcfSpcK8-khcU-8DpB_PD-s2PwHPIjOL6zY_Ac8iM4gH6EAMM60fBTMKPno0jDAMgoobDDBckcPPxcYI6OsIS&_nc_ohc=v-PZpzRoCRAQ7kNvgEI_txd&_nc_oc=AdhLoV1oXt8N2REeUrqGnjloT4m4ByiHd0aY517jBMEcMQhLW508ra-aAgHcKOajvwg&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=AHDFaRkDFIlkEBEJYn0Lb16&oh=00_AYCL-PjVCPGgGPCRKG2V8EHIdwYq3ue8Ma8sZrFEBfYohg&oe=676FF350"
                alt=""
                className="h-20 rounded-lg"
              />
            </div>

            <div className="flex min-w-[120px] justify-between items-center flex-col">
              <a href="https://www.facebook.com/profile.php?id=61562897750382">
                <div className="p-2 rounded-full border-[#fff] border-[1px] hover:bg-orange-600 m-2	">
                  <FaFacebookSquare fontSize={"20px"} color="white" />
                </div>
              </a>
              <a href="">
                <div className="p-2 rounded-full border-[#fff] border-[1px] hover:bg-orange-600 m-2	">
                  <FaInstagram fontSize={"20px"} color="white" />
                </div>
              </a>
              <a href="">
                <div className="p-2 rounded-full border-[#fff] border-[1px] hover:bg-orange-600 m-2	">
                  <div className="border-[1px] p-0.5 rounded-md">
                    <SiZalo fontSize={"16px"} color="white" fontWeight={900} />
                  </div>
                </div>
              </a>
              <a href="">
                <div className="p-2 rounded-full border-[#fff] border-[1px] hover:bg-orange-600 m-2	">
                  <FaTiktok fontSize={"20px"} color="white" />
                </div>
              </a>

              <a href="">
                <div className="p-2 rounded-full border-[#fff] border-[1px] hover:bg-orange-600 m-2	">
                  <FaYoutube fontSize={"20px"} color="white" />
                </div>
              </a>
            </div>
          </div>

          <div className="flex justify-between flex-col">
            <div className="text-[14px] pr-16">
              <p className="flex items-start mb-2">
                <FaMapLocationDot fontSize={"18px"} />
                <span className="ml-3">
                  Số nhà 48, ngõ 107 Kẻ Vẽ, Phường Đông Ngạc, Quận Bắc Từ Liêm,
                  Hà Nội
                </span>
              </p>

              <p className="flex items-start  mb-2">
                <FaPhoneAlt fontSize={"18px"} />
                <span className="ml-3">0564 764 966</span>
              </p>

              <p className="flex items-start  mb-2">
                <MdEmail fontSize={"18px"} />
                <span className="ml-3">nguyendanhphuong0305@gmail.com</span>
              </p>
            </div>

            <div className="flex">
              <div className="m-5 ml-0">
                <h2 className="font-bold pb-2">ĐỊA CHỈ</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.66186076656382!2d105.77770055021777!3d21.089040645217352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455006a3e067d%3A0xdd33c7a112d8dbff!2zVHJhbmcgcGjhu6VjIGJp4buDdSBkaeG7hW4gTHkgTHk!5e0!3m2!1svi!2s!4v1735097153557!5m2!1svi!2s"
                  width="300"
                  height="150"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="m-5">
                <h2 className="font-bold pb-2">FANPAGE</h2>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61562897750382&tabs=timeline&width=320&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="300"
                  height="150"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#667479] py-5 text-center">
          <p>© 2024 Lyly. All rights r eserved.</p>
        </div>
      </div>
    </div>
  );
}

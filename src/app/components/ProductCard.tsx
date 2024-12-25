import React from "react";

export default function ProductCard() {
  return (
    <div className="shadow-lg p-1 rounded-xl flex flex-col items-center hover:shadow-xl hover:cursor-pointer">
      <img
        src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/469693216_122130925232429925_3317852380809124342_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEsLuY4eGk7KuUFF0ruyweTAkff-6M9hZ0CR9_7oz2FnZjWb7ApIIoiJpdfQZszz52gYP_4OS_TJ45uUU-Mih7e&_nc_ohc=sBaIAY9n-xEQ7kNvgEKsq6e&_nc_oc=AdgV1FpmVLF4gh3wmqa5xJBZ7erGFSF-ID6yCc1N5ymL1DqApUoKESLlieo9f8Gp1wA&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=AIjFaYHu-RHNAOgVFdhwznB&oh=00_AYBOW58W3mvHkR6fhC4wOaM82asJ8yInbyZUtMrTmTrh-Q&oe=676EE499"
        alt=""
        className="w-full rounded-[12px]"
      />

      <div className="w-full p-3 font-bold ">
        <h2 className="text-center pb-2 pt-1 text-lg">Áo dài việt nam</h2>
        <p>
          <span className="text-rose-700">Giá thuê:</span> 50.000 đ
        </p>
        <p>
          <span className="text-teal-800">Giá bán:</span> Liên hệ
        </p>
      </div>
    </div>
  );
}

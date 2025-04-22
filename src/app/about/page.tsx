import React from "react";
import avaImage from "../../../public/images/ava.jpg";

export default function About() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Main Content */}
        <main className="container mx-auto py-12 px-4">
          {/* Mission Statement */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-red-700 mb-6">
                Nhiệm vụ của chúng tôi
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Sứ mệnh của chúng tôi là cung cấp dịch vụ cho thuê trang phục
                biểu diễn chất lượng, đa dạng và phù hợp với mọi loại hình nghệ
                thuật.
                <br /> Chúng tôi mong muốn giúp khách hàng thể hiện bản thân một
                cách tự tin, chuyên nghiệp và ấn tượng trên sân khấu. Không chỉ
                là trang phục, đó còn là sự đồng hành cùng cảm xúc và đam mê
                biểu diễn. Chúng tôi cam kết mang đến trải nghiệm thuê đồ tiện
                lợi, tiết kiệm và trọn vẹn nhất cho từng khách hàng.
              </p>
              <div className="flex justify-center">
                <button className="bg-red-700 text-white py-2 px-6 rounded hover:bg-red-800 transition">
                  Tìm hiểu thêm về chất lượng
                </button>
              </div>
            </div>
          </section>

          {/* Key Facts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-10">
              TRANG PHỤC BIỂU DIỄN LY LY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-red-700 mb-2">2024</div>
                <p className="text-gray-700">Năm thành lập</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-red-700 mb-2">50+</div>
                <p className="text-gray-700">Các khách hàng từng thuê</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-red-700 mb-2">9</div>
                <p className="text-gray-700">Các khách hàng từng thuê</p>
              </div>
            </div>
          </section>

          {/* History */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <img
                  src={"/images/Banner_About.jpg"}
                  alt="Historic IU Campus"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-red-700 mb-4">
                  Lịch sử hình thành
                </h2>
                <p className="text-gray-700 mb-4">
                  Xuất thân là 1 sinh viên âm nhạc của trường sân khấu điện ảnh.
                  Tuy nhiên, ngoài âm nhạc, Ly rất quan tâm và có năng khiếu
                  biên đạo và nhảy múa. Cô ấy cũng đã có nhiều kinh nghiệm biên
                  đạo ở các trường học, các doanh nghiệp,...
                </p>
                <p className="text-gray-700 mb-4">
                  Sau 1 thời gian dài làm về nghệ thuật, Ly cũng đã mở rộng được
                  nhiều mối quan hệ. Hơn nữa, mong muốn và sở thích kinh doanh
                  của cô ấy đã ấp ủ từ rất lâu rồi. Đến tháng 06 năm 2024, với
                  những khát khao, quyết tâm và sự tìm hiểu, cô ấy đã chính thức
                  mở shop cho thuê trang phục biểu diễn
                </p>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-10">
              Thành viên của chúng tôi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                  <img
                    src={"/images/ava.jpg"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Chủ Shop Xinh Dep
                </h3>
                <p className="text-gray-600">Nguyen Huong Ly</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                  <img
                    src={"/images/ava.jpg"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Chủ Shop Xinh Dep
                </h3>
                <p className="text-gray-600">Nguyen Huong Ly</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                  <img
                    src={"/images/ava.jpg"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Nguyen Huong Ly
                </h3>
                <p className="text-gray-600">Nguyen Huong Ly</p>
              </div>
            </div>
          </section>

          {/* Campuses */}
          <section>
            <h2 className="text-3xl font-bold text-center text-red-700 mb-10">
              Bài viết nổi bất
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="max-h-400px overflow-hidden">
                  <img src={"/images/Feedback2.jpg"} />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Polo đoàn sắc xanh của Thanh niên Việt Nam
                  </h3>
                  <p className="text-gray-600 mb-4">
                    26/3 Thành lập Đoàn Cộng Sản Hồ Chí Minh
                  </p>
                  <a
                    href="#"
                    className="text-red-700 font-semibold hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="max-h-400px overflow-hidden">
                  <img src={"/images/Feedback3.jpg"} />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Áo dài nhà em siêu nhiều
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Những tà áo dài mang cảm từ vẻ đẹp của lá cờ tổ quốc chưa
                    bao giờ hết hot
                  </p>
                  <a
                    href="#"
                    className="text-red-700 font-semibold hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="max-h-400px overflow-hidden">
                  <img src={"/images/Feedback1.jpg"} />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Trang phục doanh nghiệp đa dạng
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nhà e
                  </p>
                  <a
                    href="#"
                    className="text-red-700 font-semibold hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
    </div>
  );
}

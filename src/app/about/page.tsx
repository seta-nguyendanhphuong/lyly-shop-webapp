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
              IU at a Glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-red-700 mb-2">1820</div>
                <p className="text-gray-700">Year Founded</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-red-700 mb-2">
                  90,000+
                </div>
                <p className="text-gray-700">Students Across All Campuses</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-red-700 mb-2">9</div>
                <p className="text-gray-700">Campuses Statewide</p>
              </div>
            </div>
          </section>

          {/* History */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <img
                  src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/484035618_1969217880269441_2994748902558079928_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEM0Gkj3BPNfqiQLLaqt75kVLd3IDT5LudUt3cgNPku562nmQMgsO0omghyjaImHnXYAju5G7WJQmNXCoXYX8kb&_nc_ohc=tbDMBUee27gQ7kNvwH3OmLy&_nc_oc=AdmRjTh-voU4h5vX2iylsCNBSPPzz7EqmYZ8k8d3HpRahJPP-Njjsr4halzZC14hrVA&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=bTdIkEdpm4KhElz2gsAnug&oh=00_AfF-O2RuUEyS7fH9524vvl9UkvzP9LluvsyBPWAJuG04iw&oe=6801CCF9"
                  alt="Historic IU Campus"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-red-700 mb-4">
                  Lịch sử hình thành
                </h2>
                <p className="text-gray-700 mb-4">
                  Indiana University was founded in 1820 as the Indiana State
                  Seminary. It is one of the oldest public universities in the
                  United States, with a legacy spanning over two centuries of
                  academic excellence and innovation.
                </p>
                <p className="text-gray-700 mb-4">
                  Throughout our history, we have been at the forefront of
                  research, arts, and education, producing Nobel laureates,
                  Pulitzer Prize winners, Olympic medalists, and leaders in
                  every field.
                </p>
                <a
                  href="#"
                  className="text-red-700 font-semibold hover:underline"
                >
                  Explore our timeline →
                </a>
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
                  <img src={avaImage} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Chủ Shop Xinh Dep
                </h3>
                <p className="text-gray-600">Nguyen Huong Ly</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                  <img
                    src="../../../public/images/ava.jpg"
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
                    src="/api/placeholder/200/200"
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
                <img
                  src="/api/placeholder/400/300"
                  alt="Bloomington Campus"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Bài viết 1
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our flagship campus, home to world-class research and arts.
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
                <img
                  src="/api/placeholder/400/300"
                  alt="Indianapolis Campus"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Bài viết 2
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Urban campus with strong medical and professional programs.
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
                <img
                  src="/api/placeholder/400/300"
                  alt="South Bend Campus"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Bài viết 3
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Serving the northern Indiana region with diverse programs.
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

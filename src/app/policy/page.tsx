import React from "react";
import Head from "next/head";

export default function policy() {
  return (
    <>
      <Head>
        <title>Chính Sách Cho Thuê Trang Phục Biểu Diễn</title>
        <meta
          name="description"
          content="Chính sách thuê trang phục biểu diễn tại [Tên cửa hàng]."
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Chính Sách Cho Thuê Trang Phục Biểu Diễn
        </h1>

        <Section title="1. Đối tượng áp dụng">
          Chính sách này áp dụng cho tất cả khách hàng sử dụng dịch vụ cho thuê
          trang phục biểu diễn tại <strong>LyLy</strong>.
        </Section>

        <Section title="2. Thời gian thuê">
          Thời gian thuê tiêu chuẩn là <strong>1 – 3 ngày</strong> tùy theo gói
          dịch vụ. Nếu có nhu cầu thuê dài hạn (trên 3 ngày), khách hàng cần
          thông báo trước và sẽ được tính thêm phí theo ngày.
        </Section>

        <Section title="3. Chi phí thuê và đặt cọc">
          <ul className="list-disc list-inside">
            <li>
              <strong>Giá thuê:</strong> Theo từng mẫu trang phục, được niêm yết
              rõ ràng.
            </li>
            <li>
              <strong>Tiền đặt cọc:</strong> Từ 300.000 – 1.000.000 VNĐ/trang
              phục.
            </li>
            <li>
              Hoàn trả đặt cọc 100% nếu trang phục được trả đúng hạn, nguyên
              vẹn.
            </li>
          </ul>
        </Section>

        <Section title="4. Hình thức thanh toán">
          Thanh toán bằng tiền mặt, chuyển khoản hoặc quét mã QR khi nhận trang
          phục. Yêu cầu thanh toán toàn bộ chi phí và đặt cọc trước.
        </Section>

        <Section title="5. Bảo quản và sử dụng">
          <ul className="list-disc list-inside">
            <li>Không cắt, chỉnh sửa khi chưa được phép.</li>
            <li>Không sử dụng trong môi trường dễ hư hỏng.</li>
            <li>Trang phục hỏng sẽ phải bồi thường theo mức độ.</li>
          </ul>
        </Section>

        <Section title="6. Chính sách đổi/trả">
          <ul className="list-disc list-inside">
            <li>Đổi trong 24h nếu chưa dùng và còn tem.</li>
            <li>Không hoàn tiền nếu khách tự ý hủy sau khi thanh toán.</li>
          </ul>
        </Section>

        <Section title="7. Trả trang phục">
          <ul className="list-disc list-inside">
            <li>Trả trước 18h00 ngày hẹn.</li>
            <li>Trễ hạn: Phạt 50.000 VNĐ/ngày.</li>
            <li>Trang phục bẩn/hư: Tính phí từ 50.000 – 300.000 VNĐ.</li>
          </ul>
        </Section>

        <Section title="8. Liên hệ & hỗ trợ">
          <p>
            - Hotline: <strong>0564 764 966</strong>
            <br />- Zalo/Facebook: <strong>Trang Phục Biểu Diễn LyLy</strong>
            <br />- Địa chỉ: <strong>[Địa chỉ cửa hàng]</strong>
          </p>
        </Section>

        <p className="mt-10 text-sm italic text-center text-gray-500">
          Việc thuê trang phục đồng nghĩa với việc bạn đã đọc và đồng ý với
          chính sách trên.
        </p>
      </main>
    </>
  );
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);

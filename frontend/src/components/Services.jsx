import React from "react";

const serviceData = [
  {
    icon: "🔧",
    title: "Tư Vấn Giải Pháp IT",
    desc: "Phân tích nhu cầu và đưa ra giải pháp công nghệ phù hợp nhất cho doanh nghiệp của bạn",
  },
  {
    icon: "🌐",
    title: "Thi Công Hạ Tầng Internet",
    desc: "Thiết kế và triển khai hệ thống mạng internet ổn định, tốc độ cao cho văn phòng",
  },
  {
    icon: "🖥️",
    title: "Thi Công Mạng LAN",
    desc: "Xây dựng hệ thống mạng LAN chuyên nghiệp, đảm bảo kết nối mượt mà trong nội bộ",
  },
  {
    icon: "📹",
    title: "Camera An Ninh",
    desc: "Lắp đặt hệ thống camera giám sát chất lượng cao, bảo vệ tài sản và con người",
  },
  {
    icon: "⚙️",
    title: "Bảo Trì Hệ Thống",
    desc: "Dịch vụ bảo trì, sửa chữa và nâng cấp hệ thống IT định kỳ",
  },
  {
    icon: "🔒",
    title: "Bảo Mật Mạng",
    desc: "Triển khai các giải pháp bảo mật mạng tiên tiến, bảo vệ dữ liệu khỏi các mối đe dọa",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Dịch Vụ Của Chúng Tôi</h2>
        <div className="services-grid">
          {serviceData.map((item, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

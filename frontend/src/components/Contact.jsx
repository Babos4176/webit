import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã gửi yêu cầu!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Liên Hệ Với Chúng Tôi</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Thông Tin Liên Hệ</h3>
            <p>
              <strong>Công ty:</strong> Công ty TNHH MTV Giải Pháp Công Nghệ
              NetCore Solutions
            </p>
            <p>
              <strong>Địa chỉ:</strong> Đường 617, thôn Vân Thạch, xã Núi Thành,
              Thành Phố Đà Nẵng
            </p>
            <p>
              <strong>Điện thoại:</strong> 0987 866 131
            </p>
            <p>
              <strong>Email:</strong> netcoresolutions.qnm@gmail.com
            </p>
            <p>
              <strong>Website:</strong> www.netcore-solutions.com
            </p>
            <p>
              <strong>Giờ làm việc:</strong> 8:00 - 18:00 (Thứ 2 - Thứ 7)
            </p>
          </div>
          <div className="contact-form">
            <h3>Gửi Yêu Cầu Tư Vấn</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Họ và Tên:</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Số Điện Thoại:</label>
                <input
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Nội Dung:</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button className="submit-button" type="submit">
                Gửi Yêu Cầu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

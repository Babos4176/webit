import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <Logo />
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-link">
              Trang Chủ
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Dịch Vụ
            </a>
          </li>
          <li>
            <a href="#products" className="nav-link">
              Sản Phẩm
            </a>
          </li>
          <li>
            <a href="#baohanh" className="nav-link">
              Chính Sách Bảo Hành
            </a>
          </li>
          <li>
            <a href="#doitac" className="nav-link">
              Đối Tác
            </a>
          </li>

          <li>
            <a href="#contact" className="nav-link">
              Liên Hệ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Logo component
const Logo = () => (
  <a href="#home" className="logo">
    <img
      src="/assets/images/logo-netcore.png"
      alt="NetCore Solutions"
      className="logo__image"
      loading="lazy"
      width="160"
      height="40"
    />
  </a>
);

export default Header;

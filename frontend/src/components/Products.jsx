import React from 'react';

const productData = [
  { icon: '💻', name: 'Laptop Dell XPS 13', desc: 'Laptop cao cấp cho doanh nhân', price: '25.990.000₫' },
  { icon: '🖥️', name: 'PC Workstation', desc: 'Máy tính để bàn hiệu năng cao', price: '18.500.000₫' },
  { icon: '📡', name: 'Router WiFi 6', desc: 'Thiết bị mạng thế hệ mới', price: '3.200.000₫' },
  { icon: '📹', name: 'Camera IP 4K', desc: 'Camera giám sát độ phân giải cao', price: '2.850.000₫' },
  { icon: '🖨️', name: 'Máy In Laser', desc: 'Máy in văn phòng chuyên nghiệp', price: '4.500.000₫' },
  { icon: '🔌', name: 'Switch 24 Port', desc: 'Thiết bị chuyển mạch mạng LAN', price: '1.800.000₫' },
];

const Products = () => {
  const handleAddToCart = (name) => alert(`Đã thêm "${name}" vào giỏ hàng!`);

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Sản Phẩm Nổi Bật</h2>
        <div className="products-grid">
          {productData.map((product, i) => (
            <div className="product-card" key={i}>
              <div className="product-image">{product.icon}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="product-price">{product.price}</div>
                <button className="product-button" onClick={() => handleAddToCart(product.name)}>
                  Thêm Vào Giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
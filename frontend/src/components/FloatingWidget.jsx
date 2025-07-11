import React from 'react';

const FloatingWidget = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="floating-widget" onClick={scrollToContact}>
      💬
    </div>
  );
};

export default FloatingWidget;
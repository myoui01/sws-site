import React, { useEffect, useState } from 'react';

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: isVisible ? 'block' : 'none',
      }}
    >
      <i className="fas fa-long-arrow-alt-up"></i>
    </button>
  );
};

export default ScrollTopButton;
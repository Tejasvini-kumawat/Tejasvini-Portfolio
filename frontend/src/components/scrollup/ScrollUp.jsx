import React, { useEffect } from 'react';
import './scrollup.css'; // Ensure you have the appropriate CSS for styling
const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector('.scrollup');
      // Check if the scroll position is greater than or equal to 560px
      if (window.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scrollup">
    <i className="uil uil-arrow-up scrollup__icon"></i>

    </a>
  );
};

export default ScrollUp;

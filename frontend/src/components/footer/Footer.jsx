import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Tejasvini</h1>
        
        <ul className="footer__list">
          <li><a href="#about" className="footer__link">About</a></li>
          <li><a href="#portfolio" className="footer__link">Projects</a></li>
          <li><a href="#skills" className="footer__link">Skills</a></li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/tejasvini_05_/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className='uil uil-instagram'></i>
          </a>
          <a href="https://www.linkedin.com/in/tejasvinikumawat05/" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Tejasvini-kumawat" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className='uil uil-github'></i>
          </a>
        </div>

        <span className="footer__copy">
        Built with React. Powered by Passion. © 2025 Tejasvini Kumawat
        </span>
      </div>
    </footer>
  );
};

export default Footer;

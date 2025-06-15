import React, { useState ,useEffect} from 'react';
import "./header.css";

const Header = () => {
    //change the header background on scroll
     useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('.header');
          // Check if the scroll position is greater than or equal to 200px
          if (window.scrollY >= 80) {
            header.classList.add('scroll-header');
          } else {
            header.classList.remove('scroll-header');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup on unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    const [Toggle, showMenu] = useState(false);
const [activeNav, setActiveNav] = useState('#home');
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className="nav__logo">Tejasvini</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === "#home" ?"nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
<a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === "#about" ?"nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                           <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === "#skills" ?"nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
 <a href="#qualification" onClick={()=>setActiveNav('#qualification')} className={activeNav === "#qualification" ?"nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                             <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === "#portfolio" ?"nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                           <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === "#contact" ?"nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;

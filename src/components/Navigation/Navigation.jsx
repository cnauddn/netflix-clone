import React, { useState, useEffect } from 'react';
import './Navigation.scss';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navigation__content">
        <div className="navigation__left">
          <img src="/logo.svg" alt="Logo" className="navigation__logo" />
          <ul className="navigation__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#series">Series</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#new">New & Popular</a></li>
          </ul>
        </div>

        <div className="navigation__right">
          <div className="navigation__search">
            <input type="text" placeholder="Search" />
            <i className="fas fa-search"></i>
          </div>
          <div className="navigation__profile">
            <img src="/avatar.png" alt="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

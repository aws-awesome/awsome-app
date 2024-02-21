import React from 'react';
import { Link } from 'react-router-dom';
import './cofooter.css'; // CSS 파일 임포트

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/about-us">About us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-conditions">Terms and Conditions</Link>
      </div>
      <p className="footer-rights">@ AWS cloud school 4th term 1. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

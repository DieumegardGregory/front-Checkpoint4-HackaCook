import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './Footer.scss';

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <BsFacebook className="social-icon"/>
      <BsInstagram className="social-icon"/>
      <BsTwitter className="social-icon"/>
      <p>Mentions légales</p>
    </div>
    </>
  );
};

export default Footer;
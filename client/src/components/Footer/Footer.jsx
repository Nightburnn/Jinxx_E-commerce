import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          At Jinxx, we're more than just a company; we're a symbol of innovation, style, and reliability. Our mission is to empower individuals and businesses with cutting-edge solutions that make life simpler and more enjoyable.
	  </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Our dedicated customer support team is here to help you. If you have any questions, concerns, or need assistance with our products or services, please don't hesitate to contact us.
<br/>
	  Email: contact@jinxx.com
	  Phone: +1 (555) 123-4567
	  </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

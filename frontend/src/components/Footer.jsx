import React from 'react';
import { TbBrandMailgun } from 'react-icons/tb';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaRegCopyright } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <div className="subscribe">
        <div className="sub-title">
          <span>Subscribe</span> us for gets news <br /> events and offers
        </div>
        <div className="sub-form">
          <input type="text" placeholder="Enter your email..." />
          <button>Submit</button>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-links-first">
          <div className="accounts">
            <p>
              <TbBrandMailgun />
              ShopO
            </p>
            <div>
              The home and elements needed to <br />
              to create beautiful products.
            </div>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '90px',
              }}
            >
              <FaFacebookSquare className="nav-icon-opt" />
              <RiInstagramFill className="nav-icon-opt" />
              <FaYoutube className="nav-icon-opt" />
            </div>
          </div>
          <div className="store-links">
            <nav style={{ listStyleType: 'none' }}>
              <p>Company</p>
              <li>Abou us</li>
              <li>Carees</li>
              <li>Store Locations</li>
              <li>Our Blog</li>
              <li>Reviews</li>
            </nav>
          </div>
          <div className="store-links">
            <nav style={{ listStyleType: 'none' }}>
              <p>Shop</p>
              <li>Game & Video</li>
              <li>phone & Tablets</li>
              <li>Computers & Laptops</li>
              <li>Sport Wacthes</li>
              <li>Event</li>
            </nav>
          </div>
          <div className="store-links">
            <nav style={{ listStyleType: 'none' }}>
              <p>Support</p>
              <li>FAQ</li>
              <li>Reviews</li>
              <li>Contacts Us</li>
              <li>Shipping</li>
              <li>Live chat</li>
            </nav>
          </div>
        </div>
        <div className="copyright">
          <div>
            <FaRegCopyright />
            2020 ShopO. All right reserved.
          </div>
          <div style={{ cursor: 'pointer' }}>Terms . Privacy Policy</div>
          <div className="copyright-img">
            <img src={require('../images/paypal.png')} alt="" />
            <img src={require('../images/visa.png')} alt="" />
            <img src={require('../images/mastercard.png')} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

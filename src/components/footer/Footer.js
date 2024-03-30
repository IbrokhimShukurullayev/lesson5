import React from 'react'
import footerLogo from "../../assets/images/footerLogo.png"
import './footer.scss'
import { BiLogoFacebook } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer__logo">
            <img src={footerLogo} alt="" />
            <h2 className="footer__title">
              Bespoke software solutions  
            </h2>
            <div className="footer__social-media">
              <BiLogoFacebook className='facebook'/>
              <FaYoutube className='youtube'/>
              <GrInstagram className='instagram'/>
              <FaTwitter className='twitter'/>
            </div>
          </div>
          <ul>
            <li><h2>Company</h2></li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li><h2>Connect</h2></li>
            <li>hi@finsweet.com</li>
            <li>+(123) 456-7890</li>
          </ul>
          <div className="footer__input">
            <h2>Join Newsletter</h2>
            <form action="">
              <input type="text" placeholder='Type email here' />
              <button className='about__button footer__button'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer__end">
          <h2>© All rights reserved – Finsweet</h2>
          <div>
            <h3>Privacy Policy</h3>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react';
import './footer.css';
import logo from '../../assets/Logo/tafach_logo_transparent.png';
import Instagram from '../../assets/icons/instagram-svgrepo-com.svg';
import Telegram from '../../assets/icons/telegram-svgrepo-com.svg';
import Tiktok from '../../assets/icons/tiktok-svgrepo-com.svg';

const footer = () => {
  return (
    <div className='footer'>
      <div className="top-footer">
        <div className="top-left-footer">
            <div className="social-media-links">
                <a href="https://www.instagram.com/tafachambassador/" target='_blank'><img className="social-media-icon" src={Instagram} alt="Instagram" /></a>
                <a href="#"><img className="social-media-icon" src={Telegram} alt="Telegram" /></a>
                <a href="https://www.tiktok.com/@tafach.ambassador?is_from_webapp=1&sender_device=pc" target='_blank'><img className="social-media-icon" src={Tiktok} alt="TikTok" /></a>
            </div>
        </div>

        <div className="top-right-footer">
            <div className="contact-info">
                <p>Email:  <a href="mailto:tafachambassador@gmail.com">tafachambassador@gmail.com</a></p>
                <p>Phone:  +251 29951146</p>
                <p>Address: (No shop), AA, Ethiopia, 1000</p>
            </div>

            <div className="newsletter-form">
                <input type="email" placeholder="Join Our Newsletter" />
                <button>Join</button>
            </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="bottom-left-footer">
            <div className="copyright">
                &copy; 2024 <img className='footer-logo' src={logo} alt="" /> <span>Tafach Ambassador.</span> All rights reserved.
            </div>
        </div>
        
        <div className="bottom-right-footer">
            <div className="legal-issues">
                <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer

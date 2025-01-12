import React from 'react'
import Instagram from '../assets/icons/instagram-svgrepo-com.svg';
import Telegram from '../assets/icons/telegram-svgrepo-com.svg';
import Tiktok from '../assets/icons/tiktok-svgrepo-com.svg';
import './css/contact.css';

const contact = () => {
  return (
    <div className='contact-page'>
      <h1>Stay in touch</h1>
      <div className="social-media-container">
        <a href="https://www.instagram.com/tafachambassador/" target='_blank'><img className="social-media-icon social-media-icon-contact" src={Instagram} alt="Instagram" /></a>
        <a href="#"><img className="social-media-icon social-media-icon-contact" src={Telegram} alt="Telegram" /></a>
        <a href="https://www.tiktok.com/@tafach.ambassador?is_from_webapp=1&sender_device=pc" target='_blank'><img className="social-media-icon social-media-icon-contact" src={Tiktok} alt="TikTok" /></a>
        {/* <a href="#"><img className="social-media-icon" src={Facebook} alt="Facebook" /></a> */}
        {/* <a href="#"><img className="social-media-icon" src={Twitter} alt="Twitter" /></a> */}
        {/* <a href="#"><img className="social-media-icon" src={YouTube} alt="YouTube" /></a> */}
      </div>
    </div>
  )
}

export default contact

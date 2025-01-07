import React from 'react'
import './firstBanner.css'
import rightArrow from '../../assets/icons/right-arrow-backup-2-svgrepo-com.svg'

const firstBanner = () => {
  return (
    <div className='banner-container'>
      <div className="links">
        <a className='link' href="#featured">
          <p>Shop Now</p> 
          <img className='right-arrow' src={rightArrow} alt="" />
        </a>
      </div>
    </div>
  )
}

export default firstBanner


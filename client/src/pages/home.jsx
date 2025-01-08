import React from 'react'
import FirstBanner from '../components/1st-banner/firstBanner.jsx'
import Featured from '../components/featured-section/featured.jsx';
import Products from '../components/products/products.jsx';

const home = () => {
  return (
    <div>
      <FirstBanner />
      <Featured  />
      <Products />
    </div>
  )
}

export default home

import React from 'react'
import './featured.css'
import sampleImg from '../../assets/images/product-img/blue-bead-caramel-flavored-toping.webp'

const featured = () => {
  return (
    <div>
      <h3>Featured</h3>
      {/* Add featured products */}
      <div className="product-container">
        <img src={sampleImg} alt="product image" />
        <div className="info">
            <h4>Product Name</h4>
            <div className="availability">
                In Stock
            </div>
        </div>
      </div>
    </div>
  )
}

export default featured

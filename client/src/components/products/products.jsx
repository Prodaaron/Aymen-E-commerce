import React from 'react';
import './products.css'; // Add your styles here
import productData from '../../../data/products.js';

const Products = () => {
  return (
    <div className="products-wrapper">
      <h3 id="productShowcase">Products</h3>
      <div className="products-list">
        {productData.map((product) => {
          let availabilityText;
          let color;

          // Determine the text and color based on stock
          if (product.productAvailability > 5) {
            availabilityText = 'In Stock';
            color = 'green';
          } else if (product.productAvailability >= 1) {
            availabilityText = `Only ${product.productAvailability} available`;
            color = 'orange';
          } else {
            availabilityText = 'Out of Stock';
            color = 'red';
          }

          return (
            <div className="product-container" key={product.productId}>
              <img src={product.productImage} alt={product.productName} />
              <div className="info">
                <h4>{product.productName}</h4>
                <div className="availability" style={{ color }}>
                  {availabilityText}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
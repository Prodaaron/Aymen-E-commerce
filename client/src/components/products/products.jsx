import React, { useEffect, useState } from 'react';
import './products.css'; // Add your styles here

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    fetch('http://localhost:5000/products') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
        <div className="products-wrapper">
            <h3 id='featured'>Products</h3>   

            {products.map((product) => (
                <div className="product-container" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="info">
                    <h4>{product.name}</h4>
                    <div
                    className={`availability ${
                        product.availability.toLowerCase() === 'in stock'
                        ? 'in-stock'
                        : 'out-of-stock'
                    }`}
                    >
                    {product.availability}
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
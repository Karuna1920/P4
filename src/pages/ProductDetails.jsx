import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    id: 1,
    name: 'Custom Mug 1',
    price: 15,
    description: 'This is a customizable mug.',
    shop: 'Shop A',
    deliveryDate: '2024-12-30',
  };

  return (
    <div className="container mt-5">
      <h1>Product Details</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p>Cost: ${product.price}</p>
          <p>Delivery Date: {product.deliveryDate}</p>
          <label htmlFor="preferences">Add Preferences:</label>
          <textarea id="preferences" className="form-control mb-3"></textarea>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

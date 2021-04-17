import React from 'react';

function Product({ product, handleAddToCart }) {
  return (
    <div className="Products-item">
      <img
        src={`https://localhost:1337${product.image[0].url}`}
        alt={product.title}
      />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>{`$ ${product.price}`}</span>
        </h2>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
}

export default Product;

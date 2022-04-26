import React from 'react'
import { Link } from 'react-router-dom';

export const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product, i) => (
        <Link to={product.id}>
          <li key={i}>
            <div>
              <img src={product.image} alt={`${product.brand} ${product.model}`} />
            </div>
            <div>{product.brand}</div>
            <div>{product.model}</div>
            <div>{product.price} €</div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
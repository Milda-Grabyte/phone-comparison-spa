import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product, i) => (
        <Link to={product.id}>
          <li key={i}>
            <p>
              <img src={product.image} alt={`${product.brand} ${product.model}`} />
            </p>
            <p>{product.brand}</p>
            <p>{product.model}</p>
            <p>{product.price} €</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default ProductList;
import { StyledCart } from '../../styles/cart';

const Cart = ({ total }) => {
  return (
    <StyledCart>
      <h4>Cart</h4>
      <h4>{total}</h4>
    </StyledCart>
  );
}

export default Cart;
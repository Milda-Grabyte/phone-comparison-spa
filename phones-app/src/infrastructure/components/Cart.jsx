import styled from 'styled-components';
import Image from './Image';
import cart from '../../assets/shopping-cart.png';

const Cart = ({ total }) => {
  return (
      <StyledCart>
      <Image image={ cart } alt='cart' className='cart-image' />
      <h4>{ total }</h4>
    </StyledCart>
  );
};

const StyledCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 3.2rem;
  padding: 0 2rem 0 0;
  margin-left: auto;
  align-items: center;

  h4 {
    font-family: 'Helvetica Neue';
    font-size: 1.4rem;
    line-height: 1.4rem;
    margin-block-start: 1.6em;
  }

  .cart-image {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
export default Cart;

import { Wrapper } from '../../styles/wrapper';
import Cart from './Cart';

const Header = ({cart}) => {
  return (
    <Wrapper primary>
      <h1>HEADER</h1>
      <Cart total={cart} />
    </Wrapper>
  );
}

export default Header;
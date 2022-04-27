import { Wrapper } from '../../styles/wrapper';
import Cart from './Cart';

const Header = () => {
  return (
    <Wrapper primary>
      <h1>HEADER</h1>
      <Cart total={4} />
    </Wrapper>
  );
}

export default Header;
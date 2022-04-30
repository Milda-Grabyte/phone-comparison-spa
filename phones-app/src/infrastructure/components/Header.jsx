import { Wrapper } from '../../styles/wrapper';
import Cart from './Cart';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const Header = ({ cart }) => {
  const location = useLocation();
  
  return (
    <Wrapper primary>
      <h1>HEADER</h1>
      <Cart total={cart} />
      <Breadcrumbs path={location.pathname}/>
    </Wrapper>
  );
}

export default Header;
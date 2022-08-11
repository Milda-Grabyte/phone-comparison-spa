import { StyledWrapper } from '../../styles/wrapper';
import Cart from './Cart';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import logo from '../../assets/eye-logo.png'
import styled, { ThemeProvider } from 'styled-components';
import { themeColors } from '../../styles/theme';
import Image from './Image';

const Header = ({ cart }) => {
  const location = useLocation();
  
  return (
    <ThemeProvider theme={themeColors}>
      <AdaptedWrapper primary>
        <Image image={logo} alt='logo' className='logo-image' />
        <h1>Phone Store</h1>
        <Cart total={cart} />
        <Breadcrumbs path={location.pathname} />
      </AdaptedWrapper>
    </ThemeProvider>
  );
}

const AdaptedWrapper = styled(StyledWrapper)`
  flex-wrap: wrap;
  height: 9.5rem;
  align-items: center;
  justify-content: flex-start;

  .logo-image {
    height: 60%;
    padding: 0 0 0 2rem;
  }

  h1 {
    font-family: 'Comfortaa', bold;
    font-size: 3em;
  }
`;
export default Header;
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Breadcrumbs from './Breadcrumbs';
import Cart from './Cart';
import Image from './Image';
import logo from '../../assets/eye-logo.png';
import { themeColors } from '../../styles/theme';
import { StyledWrapper } from '../../styles/wrapper';

const Header = ({ model, cart }) => {
  const location = useLocation();
  
  return (
      <ThemeProvider theme={ themeColors }>
      <AdaptedWrapper primary>
              <Link to='/' className='logo-link'>
            <Image image={ logo } alt='logo' className='logo-image'/>
        </Link>
              <h1>Phone Store</h1>
              <Cart total={ cart } />
              <Breadcrumbs model={ model } path={ location.pathname } />
          </AdaptedWrapper>
    </ThemeProvider>
  );
};

const AdaptedWrapper = styled(StyledWrapper)`
  flex-wrap: wrap;
  height: 9.5rem;
  align-items: center;
  justify-content: flex-start;

  a.logo-link {
    display: flex;
    align-items: center;
    height: 60%;
    cursor: pointer;
  }

  .logo-image {
    height: 100%;
    padding: 0 0 0 2rem;
  }

  h1 {
    font-family: 'Comfortaa', bold;
    font-size: 3em;
  }
`;
export default Header;

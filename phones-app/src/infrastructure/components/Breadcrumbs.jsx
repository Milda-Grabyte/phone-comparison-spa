import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { themeColors } from '../../styles/theme';

const Breadcrumbs = ({ path }) => {
  return (
    <ThemeProvider theme={themeColors}>
      <StyledWrapper>
        <Link to='/'>
          <p className='breadcrumbs-text'>home</p>
        </Link>
        {path.length > 1 && (
          <Link to={path}>
            <p className='breadcrumbs-chevron'>{'>'}</p>
            <p className='breadcrumbs-text'>model</p>
          </Link>
        )}
      </StyledWrapper>
    </ThemeProvider>
  );
}

const StyledWrapper = styled.div`
  flex-basis: 100%;
  height: 20%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.honey};

  p {
    display: inline-block;
    margin: 0 5px 0 0;
  }
`;
export default Breadcrumbs;
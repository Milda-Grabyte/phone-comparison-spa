import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themeColors } from '../../styles/theme';
import { StyledWrapper } from '../../styles/wrapper';
import ProductList  from '../components/ProductList';
import Search from '../components/Search';

function ProductListPage({ products }) {
  const [searchValue, setSearchValue] = useState('');
  
  const filteredProducts =
    products.filter( product => {
      if (searchValue === '') {
        return product;
      } else {
        const objectValues = Object.values(product);
        const lowerCaseValues = objectValues.map(value => value.toLowerCase());
        const cleanValue = lowerCaseValues.slice(1, -2).join(' ');
        return cleanValue.includes(searchValue.toLowerCase());
      }
    });
  
  return (
      <ThemeProvider theme={ themeColors }>
      <StyledPage>
              <Search setSearchValue={ setSearchValue } searchValue={ searchValue } />
              <ProductList products={ filteredProducts } />
          </StyledPage>
    </ThemeProvider>
  );
}

const StyledPage = styled(StyledWrapper)`
  padding: 0px;
  background: ${(props) => props.theme.darkTeal};
  min-height: 100vh;
  flex-wrap: no-wrap;
`;


export default ProductListPage;

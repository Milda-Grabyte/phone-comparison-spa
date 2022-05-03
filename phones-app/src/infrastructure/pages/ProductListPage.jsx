import React from 'react';
import { useState } from 'react';
import { StyledWrapper } from '../../styles/wrapper';
import ProductList  from '../components/ProductList';
import Search from '../components/Search';
import styled, { ThemeProvider } from 'styled-components';
import { themeColors } from '../../styles/theme';

function ProductListPage({ products }) {
  const [searchValue, setSearchValue] = useState('');
  
  const filteredProducts =
    products.filter(product => {
      if (searchValue === '') {
        return product;
      } else {
        const objectValues = Object.values(product);
        const lowerCaseValues = objectValues.map(value => value.toLowerCase());
        const cleanValues = lowerCaseValues.slice(1, -2)
        return cleanValues.some(clean => clean.includes(searchValue.toLowerCase()));
      }
    });
  
  return (
    <ThemeProvider theme={themeColors}>
      <StyledPage>
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
        <ProductList products={filteredProducts} />
      </StyledPage>
    </ThemeProvider>
  );
}

const StyledPage = styled(StyledWrapper)`
  padding: 0px;
  background: ${(props) => props.theme.darkTeal};
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
`;


export default ProductListPage;

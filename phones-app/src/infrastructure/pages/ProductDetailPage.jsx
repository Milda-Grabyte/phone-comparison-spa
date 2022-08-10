import React from 'react';
import Description from '../components/Description';
import Image from '../components/Image';
import { useGetService } from '../hooks/useGetService';
import { useParams, useNavigate } from 'react-router-dom';
import { StyledWrapper } from '../../styles/wrapper';
import Actions from '../components/Actions';
import styled, { ThemeProvider } from 'styled-components';
import { themeColors } from '../../styles/theme';
import Button from '../components/Button';

const ProductDetailPage = ({ cart, setCart }) => {
  const { productId } = useParams(); 
  const navigate = useNavigate();
  const item = useGetService('item', productId);
  const image = item.image;
  
  return (
    <ThemeProvider theme={themeColors}>
      <StyledPage primary>
        <Button className='detail__button back' onClick={() => navigate(-1)} text='Go back' />
        <Image image={image} alt='detail image' className='detail__image'/>
        <StyledWrapper className='detail__stats+actions'>
          <Description item={item} />
          <Actions item={item} productId={productId} cart={cart} setCart={setCart} />
        </StyledWrapper>
      </StyledPage>
    </ThemeProvider>
  );
}

const StyledPage = styled(StyledWrapper)`
  padding: 0px;
  background: ${(props) => props.theme.darkTeal};
  height: calc(100vh - 9.5rem);
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 5%;

  .detail__button.back {
    margin-left: calc(100% - 120px);
  }
  
  .detail__stats+actions > {
  }

  img {
    height: 70%;
    margin: auto 0;
  }
`;

export default ProductDetailPage;

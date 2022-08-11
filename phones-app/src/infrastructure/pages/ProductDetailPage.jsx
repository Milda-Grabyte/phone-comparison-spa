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
      <StyledPage>
        <Button className='detail__button back' onClick={() => navigate(-1)} text='Go back' />
        <StyledWrapper className='detail__contents'>
          <Image image={image} alt='detail image' className='detail__image'/>
          <StyledWrapper className='detail__stats+actions'>
            <Description item={item} />
            <Actions item={item} productId={productId} cart={cart} setCart={setCart} />
          </StyledWrapper>
        </StyledWrapper>
      </StyledPage>
    </ThemeProvider>
  );
}

const StyledPage = styled(StyledWrapper)`
  padding: 0px;
  background: ${(props) => props.theme.teal};
  height: calc(100vh - 9.5rem);

  .detail__contents {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 10% 5% 10%;;
  }

  .detail__button.back {
    margin: 1% 0 1% 85%;
  }
  
  .detail__stats+actions > {
    justify-content: space-between;
  }

  img {
    height: 80%;
    margin: auto 0;
  }
`;

export default ProductDetailPage;

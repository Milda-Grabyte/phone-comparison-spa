import React from 'react';
import Description from '../components/Description';
import Image from '../components/Image';
import { useGetService } from '../hooks/useGetService';
import { useParams, useNavigate } from 'react-router-dom';
import { Wrapper } from '../../styles/wrapper';
import Actions from '../components/Actions';

const ProductDetailPage = () => {
  const { productId } = useParams(); 
  const navigate = useNavigate();
  const item = useGetService('item', productId);
  const image = item.image;
  
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <Wrapper>
        <Image image={image} />
        <Description item={item} />
      </Wrapper>
      <Actions item={item} productId={productId} />
    </>
  );
}

export default ProductDetailPage;

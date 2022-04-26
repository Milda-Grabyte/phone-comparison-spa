import React from 'react';
import Description from '../components/Description';
import Image from '../components/Image';
import { useGetService } from '../hooks/useGetService';
import { useParams } from 'react-router-dom';
import { Wrapper } from '../../styles/wrapper';

const ProductDetailPage = () => {
  const { productId } = useParams(); 
  const item = useGetService('item', productId);
  const image = item.image;
  return (
    <Wrapper>
      <Image image={image} />
      <Description item={item} />
    </Wrapper>
  );
}

export default ProductDetailPage;

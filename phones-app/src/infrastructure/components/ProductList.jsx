import { Link } from 'react-router-dom';
import styled,{ ThemeProvider } from 'styled-components';
import { themeColors } from '../../styles/theme';
import Image from './Image';
import { helpers } from '../helpers/helpers';

const ProductList = ({ products }) => {
  
  const modelDOM = (modelString) => {
    const evaluatedString = helpers.splitString(modelString, 20);
    return Array.isArray(evaluatedString) ? (
      <>
        <p>{evaluatedString[0]}</p>
        <p>{evaluatedString[1]}</p>
      </>
    ) : (
      <p>{evaluatedString}</p>
    );
  }
  return (
    <ThemeProvider theme={themeColors}>
      <StyledList>
        {products.map((product, i) => (
          <li key={i}>
            <StyledCard>
              <div className='card'></div>
              <div className='card-info'>
                <div className='card-image'>
                  <Image image={product.image} alt={`${product.brand} ${product.model}`} />
                </div>
                <div className='card-text'>
                  <div className='card-text__description'>
                    <h4>{product.brand}</h4>
                    {modelDOM(product.model)}
                    <p className='card-text__description-price'>{product.price} €</p>
                  </div>
                  <div className='card-icon'>
                    <Link to={product.id}>
                      <svg viewBox='0 0 28 25'>
                        <path d='M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z'></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </StyledCard>
          </li>
        ))}
      </StyledList>
    </ThemeProvider>
  );
}

const StyledList = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 25%;
  }
`;

const StyledCard = styled.div`
  width: 250px;
  height: 350px;
  position: relative;
  background: ${(props) => props.theme.white};
  transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin: 10px;
  border-radius: 8px;

  .card {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.white};
    border-radius: 8px;
  }

  .card-info {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .card-image {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .card-text {
    flex: 0 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
  }

  .card-icon {
    opacity: 0;
    transform: translateX(-20%);
    width: 3em;
    height: 3em;
    transition: all 0.3s ease-in-out;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  p {
    line-height: 30%;
    color: ${(props) => props.theme.teal};
    font-weight: 500;
    font-size: 16px;
  }

  .card-text__description-price {
    font-weight: 700;
    font-size: 1.1rem;
  }

  &:hover {
    box-shadow: 5px 5px 20px 5px rgba(244, 162, 97, 0.5);
  }

  &:hover .card-icon {
    opacity: 1;
    transform: translateX(20%);
  }

  h4 {
    font-family: 'Comfortaa';
    font-weight: 700;
    font-size: 1.5rem;
    margin: 1.2rem 0;
  }
`;
export default ProductList;

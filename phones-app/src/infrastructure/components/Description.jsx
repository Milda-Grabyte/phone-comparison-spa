import styled from 'styled-components';
import { StyledWrapper } from '../../styles/wrapper';
import { helpers } from '../helpers/helpers';

const Description = ({ item }) => {
  const layout =
    Object.entries(item).map(([key, value]) => {
      const mapValues =
        Array.isArray(value)
        ? value.map(option => <p>{option}</p>)
        : value;

      if (key !== 'image' && key !== 'options') {
        return (
          <StyledWrapper primary className='description' key={key}>
            <p className='description__key'>{helpers.capitalizeWord(key, ['cpu', 'ram', 'os'])}:</p>
            <p className='description__value'>{mapValues ? mapValues : '-'}{key === 'price' ? ' €' : key === 'weight' && ' g'}</p>
          </StyledWrapper>
        );
      }
    });
  return <AdaptedWrapper className='description__wrapper'>{layout}</AdaptedWrapper>;
};

const AdaptedWrapper = styled(StyledWrapper)`
  max-height: 70%;

  p.description__key {
    display: inline-block;
    font-family: 'Comfortaa';
    font-weight: 700;
    font-size: 1rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
  }

  p.description__value {
    display: inline-block;
    color: ${(props) => props.theme.orange};
    font-weight: 500;
    font-size: 1rem;
    margin: 0.2rem 0;
  }

  .description {
    justify-content: flex-start;
  }
`;

export default Description;
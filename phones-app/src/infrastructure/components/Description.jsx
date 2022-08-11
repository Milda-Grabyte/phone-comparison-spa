import styled from 'styled-components';
import { StyledWrapper } from '../../styles/wrapper';
import { helpers } from '../helpers/helpers';

const Description = ({ item }) => {
  const layout =
    Object.entries(item).map(([key, value]) => {
      const mapValues =
        Array.isArray(value) && !value.includes(false)
        ? value.join(' ')
        : value;

      if (key !== 'image' && key !== 'options') {
        return (
          <StyledWrapper primary className='description' key={key}>
            <StyledSpec>{helpers.capitalizeWord(key, ['cpu', 'ram', 'os'])}:</StyledSpec>
            <StyledText>{mapValues ? mapValues : '-'}{key === 'price' ? ' €' : key === 'weight' && ' g'}</StyledText>
          </StyledWrapper>
        );
      }
    });
  return <AdaptedWrapper className='description__wrapper'>{layout}</AdaptedWrapper>;
};

const AdaptedWrapper = styled(StyledWrapper)`
  max-height: 70%;

  .description {
    justify-content: flex-start;
  }
`;

const StyledText = styled.p`
  display: inline-block; 
  font-size: 1rem; 
  color: ${(props) => props.theme.orange};
  font-weight: 500;
  font-size: 1rem;
  margin: 0.1rem 0 0.3rem 0;
`;

const StyledSpec = styled(StyledText)`
  font-family: 'Comfortaa';
  font-weight: 700;
  color: black;
  margin: 0.2rem 0.5rem 0.2rem 0;
`;

export default Description;
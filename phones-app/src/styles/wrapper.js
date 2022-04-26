import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${(props) => (props.primary ? 'row' : 'column')};
  flex-direction: column;
  padding: 1rem;
  border: black solid 0.2rem;
`;
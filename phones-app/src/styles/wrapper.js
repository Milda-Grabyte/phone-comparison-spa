import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.primary ? 'row' : 'column')};
  padding: 1rem;
  border: black solid 0.2rem;
  justify-content: ${(props) => (props.primary ? 'space-between' : 'inherit')};
`;
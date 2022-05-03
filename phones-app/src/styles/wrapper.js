import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.primary ? 'row' : 'column')};
  justify-content: ${(props) => (props.primary ? 'space-between' : 'inherit')};
`;
import styled, { ThemeProvider } from 'styled-components';
import { StyledWrapper } from '../../styles/wrapper';
import { themeColors } from '../../styles/theme';

const Search = ({ setSearchValue, searchValue }) => {
  return (
    <ThemeProvider theme={themeColors}>
      <StyledSearch primary>
        <label htmlFor='search-form'>
          <StyledText>Find your new phone</StyledText>
          <StyledInput
            type='search'
            name='search-form'
            id='search-form'
            className='search-input'
            placeholder='Search brand or model...'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
      </StyledSearch>
    </ThemeProvider>
  );
};

const StyledSearch = styled(StyledWrapper)`
  padding: 0 2rem 0 0;
  align-items: center;
  margin-left: auto;
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.darkTeal};
  background-repeat: no-repeat;
  background-position: 3px;
  background-size: 22px;
  border: 2px solid ${(props) => props.theme.honey};
  border-radius: 0px;
  height: 35px;
  width: 320px;
  transition: width 0.4s ease-in-out;
  text-indent: 30px;
  color: white;
  font-family: 'Yantramanav', sans-serif;

  &::placeholder {
    color: white;
    opacity: 0.5;
  }

  :focus-visible {
    outline: none;
  }
`;

const StyledText = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1em 0 0.3em 33px;
`;

export default Search;

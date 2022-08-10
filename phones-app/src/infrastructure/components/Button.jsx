import styled, { ThemeProvider } from 'styled-components';
import { themeColors } from '../../styles/theme';

const Button = ({ onClick, text, className = '', disabled }) => {
    return (
        <ThemeProvider theme={themeColors}>
            <StyledButton className={className} onClick={onClick} disabled={disabled}>
                <span>{text}</span>
            </StyledButton>
        </ThemeProvider>
    )
}

const StyledButton = styled.button`
  outline: none;
  height: 35px;
  width: 120px;
  margin-left: calc(100% - 120px);
  border: 2px solid ${(props) => props.theme.orange};
  color: ${(props) => props.theme.orange};
  font-family: 'Yantramanav', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  line-height: 34px;
  padding: 0;

  &:hover{
    background: transparent;
    color: #000;
  }

  &.back:hover::before{
    content: "<";
    color: black;
  }

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: ${(props) => props.theme.orange};
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 2px;
  }

  &:after {
    width: 0%;
    height: 2px;
  }

  &:hover:before {
    height: 100%;
  }

  &:hover:after {
    width: 100%;
  }

  span:before,
  span:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.orange};
    transition: all 0.3s ease;
  }
  span:before {
    width: 2px;
    height: 0%;
  }
  span:after {
    width: 0%;
    height: 2px;
  }
  span:hover:before {
    height: 100%;
  }
  span:hover:after {
    width: 100%;
  }
`;

export default Button;
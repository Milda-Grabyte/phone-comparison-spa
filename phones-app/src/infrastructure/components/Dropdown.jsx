import styled from 'styled-components';
const Dropdown = ({ testID, onChange, name, options }) => {
    return (
        <StyledSelect data-testid={`select-${testID}`} onChange={onChange} name={`${name}-select`}>
            {options}
        </StyledSelect>
    )
}

const StyledSelect = styled.select`
    font-family: 'Yantramanav', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.orange};
    border: 2px solid ${(props) => props.theme.orange};
    padding: 0 0.3rem;
    margin-right: 0.3rem;
`;
export default Dropdown;


import { useEffect, useState } from 'react';
import { cartService } from '../../domain/service/cart.service';
import { StyledWrapper } from '../../styles/wrapper';
import { helpers } from '../helpers/helpers';
import Button from './Button';
import styled from 'styled-components';
import Dropdown from './Dropdown';

const Actions = ({ item, productId, cart, setCart }) => {
  const options = item?.options;
  const id = productId;
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setSelectedOptions({
      id: id,
      colorCode: options?.colors[0].code.toString(),
      storageCode: options?.storages[0].code.toString(),
    });
  },[item])

  function mapOptions(options, optionType) {
    return (
      options &&
      options[optionType]?.map((option, i) => (
        <option value={option.code} selected={i === 0}>
          {option.name}
        </option>
      ))
    );
  }

  const colorMap = mapOptions(options, 'colors');
  const storageMap = mapOptions(options, 'storages');

  function handleOptionChange(e, optionType) {
    const codeKey = optionType === 'colors' ? 'colorCode' : 'storageCode';
    setSelectedOptions({
      ...selectedOptions,
      [codeKey]: e.target.value
    })
  }

  async function handleSubmit () {
    const count = await cartService(selectedOptions);
    setCart(helpers.addToCart(cart, count));
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 1000);
  }

  return (
    <>
      {item && (
        <StyledActions>
          <Dropdown testID='colors' onChange={(e) => handleOptionChange(e, 'colors')} name='colors' options={colorMap}/>
          <Dropdown testID='storages' onChange={(e) => handleOptionChange(e, 'storages')} name='storage-select' options={storageMap}/>
          <Button onClick={handleSubmit} text='Add to cart' disabled={isButtonDisabled}/>
        </StyledActions>
      )}
    </>
  );
}

const StyledActions = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;

  button {
    grid-row: 1 / 2;
    grid-column: 5 / 6;
  }
`;

export default Actions;
import { useEffect, useState } from 'react';
import { cartService } from '../../domain/service/cart.service';
import { Wrapper } from '../../styles/wrapper';
import { helpers } from '../helpers/helpers';

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
        <Wrapper>
          <select onChange={(e) => handleOptionChange(e, 'colors')} name='colors-select'>
            {colorMap}
          </select>
          <select onChange={(e) => handleOptionChange(e, 'storages')} name='storage-select'>
            {storageMap}
          </select>
          <button onClick={handleSubmit} disabled={isButtonDisabled}>
            Add to cart
          </button>
        </Wrapper>
      )}
    </>
  );
}

export default Actions;
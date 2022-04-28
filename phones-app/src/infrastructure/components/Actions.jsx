import { useEffect, useState } from 'react';
import { cartService } from '../../domain/service/cart.service';
import { Wrapper } from '../../styles/wrapper';

const Actions = ({ item, productId }) => {
  const options = item?.options;
  const id = productId;
  const [selectedOptions, setSelectedOptions] = useState({});

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
      [codeKey ]: e.target.value
    })
  }

  function handleSubmit() {
    console.log(selectedOptions)
    cartService(selectedOptions);
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
          <button onClick={handleSubmit}>Add to cart</button>
        </Wrapper>
      )}
    </>
  );
}

export default Actions;
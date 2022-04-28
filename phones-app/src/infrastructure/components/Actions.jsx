import { Wrapper } from '../../styles/wrapper';
import { useState, useEffect } from 'react';

const Actions = ({ item }) => {
  const [colorOptions, setColorOptions] = useState();
  const [storageOptions, setStorageOptions] = useState();

  useEffect(() => {
    setColorOptions(item?.options?.colors);
    setStorageOptions(item?.options?.storages);
  },[item])

  function mapOptions(optionType) {
    return optionType && optionType.map((option, i) => (
      <option value={option.code} selected={i === 0}>
        {option.name}
      </option>
    ));
  }

  const colorMap = mapOptions(colorOptions);
  const storageMap = mapOptions(storageOptions);
  
  return (
    <>
      {item && (
        <Wrapper>
          <select name='colors-select'>{colorMap}</select>
          <select name='storage-select'>{storageMap}</select>
        </Wrapper>
      )}
    </>
  );
}

export default Actions;
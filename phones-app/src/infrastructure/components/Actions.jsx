import { Wrapper } from '../../styles/wrapper';

const Actions = ({ item }) => {
  const options = item.options;
  
  const colorOptions = options && item.options.colors?.map((option) => <option value={option.code}>{option.name}</option>);
  const storageOptions = options && item.options.storages?.map((option) => <option value={option.code}>{option.name}</option>);

  return (
    <>
      {options && (
        <Wrapper>
          <select name='colors-select'>{colorOptions}</select>
          <select name='storage-select'>{storageOptions}</select>
        </Wrapper>
      )}
    </>
  );
}

export default Actions;
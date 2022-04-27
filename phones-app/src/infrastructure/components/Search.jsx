const Search = ({ setSearchValue, searchValue }) => {
  return (
    <label htmlFor='search-form'>
      <input
        type='search'
        name='search-form'
        id='search-form'
        className='search-input'
        placeholder='Find your new phone'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </label>
  );
};
export default Search;

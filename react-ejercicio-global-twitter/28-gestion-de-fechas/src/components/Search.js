import '../styles/components/Search.scss';

const Search = props => {
  const handleSearchInput = ev => {
    props.handleSearchText(ev.target.value);
  };

  return (
    <form className="search">
      <input
        className="search__input"
        autoComplete="off"
        type="search"
        name="search"
        id="search"
        placeholder="Buscar en tweets"
        value={props.searchText}
        onChange={handleSearchInput}
      />
    </form>
  );
};

export default Search;

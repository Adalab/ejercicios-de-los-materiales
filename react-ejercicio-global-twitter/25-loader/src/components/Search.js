import '../styles/components/Search.scss';

const Search = () => {
  return (
    <form className="search">
      <input
        className="search__input"
        autoComplete="off"
        type="search"
        name="search"
        id="search"
        placeholder="Buscar en tweets"
      />
    </form>
  );
};

export default Search;

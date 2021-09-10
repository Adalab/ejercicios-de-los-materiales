import '../styles/components/Search.scss';

const Search = () => {
  return (
    <form className="search">
      <input
        className="search__input"
        type="search"
        name="search"
        id="search"
        placeholder="Buscar en Twitter"
      />
    </form>
  );
};

export default Search;

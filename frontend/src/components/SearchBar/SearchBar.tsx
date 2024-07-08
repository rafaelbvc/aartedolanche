import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={styles.searchBar}>
      <p>busca</p>
      <input type="text" placeholder="Digite aqui a arte que deseja degustar" />
      <button>img</button>
    </form>
  );
};

export default SearchBar;

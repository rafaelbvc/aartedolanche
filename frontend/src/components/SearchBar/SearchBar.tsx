import { SyntheticEvent } from "react";
import styles from "./SearchBar.module.css";


const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const SearchBar = () => {
  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <p>BUSCA</p>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Digite aqui a arte que deseja degustar"
      />
      <input type="submit" value="img" />
    </form>
  );
};

export default SearchBar;

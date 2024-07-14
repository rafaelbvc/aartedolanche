import { SyntheticEvent } from "react";
import styles from "./SearchBar.module.css";
import SvgComponent from "../SvgComponent";
import { hamburguerAlpha, arrow, magnifyGlass } from "../../assets/svgs";

const SearchBar = () => {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <SvgComponent
        classNameImg={styles.magnifyGlass}
        svgImage={magnifyGlass}
        svgWidth="0.8rem"
        imgAlt="Magnify Glass Icon"
      />
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Digite aqui a arte que deseja degustar"
      />
    </form>
  );
};

export default SearchBar;

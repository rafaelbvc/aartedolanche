import { SyntheticEvent } from "react";
import styles from "./SearchBar.module.css";
import SvgComponent from "../SvgComponent";
import { svgs } from "../../assets/svgs/index";

const SearchBar = () => {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const hamburguerAlpha = svgs;

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <SvgComponent svgImage={hamburguerAlpha} svgWidth="1rem" />
      {/* <p>BUSCA</p> */}
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Digite aqui a arte que deseja degustar"
      />
      <input className={styles.searchBTN} type="submit" value="img" />
    </form>
  );
};

export default SearchBar;

import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";
import logoMain from "../../assets/pngs/logoMain.png";

const Header = () => {
  return (
    <header className={styles.headerComponent}>
      <img
        src={logoMain}
        alt="logo png background alpha"
        className={styles.logoMain}
      />
      <SearchBar />

      <NavBar />
    </header>
  );
};

export default Header;

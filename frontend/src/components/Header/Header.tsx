import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerComponent}>
      <SearchBar />
      <div>banner</div>
      <NavBar />
    </header>
  );
};

export default Header;

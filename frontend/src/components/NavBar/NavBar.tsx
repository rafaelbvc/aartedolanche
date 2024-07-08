import MenuNav from "../MenuNav/MenuNav";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <MenuNav />
    </nav>
  );
};

export default NavBar;

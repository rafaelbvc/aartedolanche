import { NavLink } from "react-router-dom";
import styles from "./MenuNav.module.css";

const MenuNav = () => {
  return (
    <menu className={styles.menuNav}>
      <NavLink to="/">
        <span>Lanches</span>
      </NavLink>
      <NavLink to="/">
        <span>Gourmet</span>
      </NavLink>
      <NavLink to="/">
        <span>Porções</span>
      </NavLink>
      <NavLink to="/">
        <span>Bebidas</span>
      </NavLink>
      <NavLink to="/">
        <span>Combos</span>
      </NavLink>
    </menu>
  );
};

export default MenuNav;

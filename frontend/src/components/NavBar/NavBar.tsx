import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default NavBar;

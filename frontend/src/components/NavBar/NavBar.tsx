import HelmetComponent from "../HelmetComponent";
import "./NavBar.modules.css";

const NavBar = () => {
  return (
    <header>
      <HelmetComponent
        contentKeywords="navbar, barra de navegação, navegar, menu, busca, barra de busca, search"
        contentDescriptionA="barra de navegação e buscas global aartedolanche"
      />
      <h2>NavBar</h2>
    </header>
  );
};

export default NavBar;

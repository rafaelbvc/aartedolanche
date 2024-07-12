import styles from "./Home.module.css";
import HelmetComponent from "../../components/HelmetComponent";
import CardComponent from "../../components/CardComponent/CardComponent"
import CardsContainer from "../../components/CardsContainer/CardsContainer";
const Home = () => {
  return (
    <div className={styles.home}>
      <HelmetComponent
        titleHeader="Home - A Arte do Lanche"
        contentKeywords="lanche, lanches, cachorro quente, lancheria, lanchonete, hamburgueria, itapetininga, hamburguer, aberto 24 horas"
        contentDescriptionA="página home lancheria A Arte do Lanche, Itapetininga"
      />
      {/* <h1>A Arte do Lanche</h1>
      <h3>...em fase inicial de construção...</h3> */}
      <CardsContainer />
    </div>
  );
};

export default Home;

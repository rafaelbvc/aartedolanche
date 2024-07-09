import styles from "./Home.module.css";
import HelmetComponent from "../../components/HelmetComponent";

const Home = () => {
  return (
    <section className={styles.home}>
      <HelmetComponent
        titleHeader="Home - A Arte do Lanche"
        contentKeywords="lanche, lanches, cachorro quente, lancheria, lanchonete, hamburgueria, itapetininga, hamburguer, aberto 24 horas"
        contentDescriptionA="página home lancheria A Arte do Lanche, Itapetininga"
      />
      <h1>A Arte do Lanche</h1>
      <h3>...em fase inicial de construção...</h3>
    </section>
  );
};

export default Home;

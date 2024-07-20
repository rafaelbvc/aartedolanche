import HelmetComponent from "../../components/HelmetComponent";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
const Home = () => {
  return (
    <div>
      <HelmetComponent
        titleHeader="Home - A Arte do Lanche"
        contentKeywords="lanche, lanches, cachorro quente, lancheria, lanchonete, hamburgueria, itapetininga, hamburguer, aberto 24 horas"
        contentDescriptionA="página home lancheria Gourmet  A Arte do Lanche, Itapetininga"
      />
      <CardsContainer />
    </div>
  );
};

export default Home;

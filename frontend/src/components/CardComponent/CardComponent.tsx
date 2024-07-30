import SvgComponent from "../SvgComponent";
import styles from "./CardComponent.module.css";
import { hamburguerAlpha } from "../../assets/svgs";
// import img from "../../../../backend/src/uploads/images/image-1721884388928-17541860.png";

type tCardCardComponent = {
  burgerImagePath: string;
  burgerAltImageText: string;
  burgerName: string;
  burgerDescription: string;
  burgerIngredients: string;
  burgerPrice: number;
  // somo todos os votos e divido por 5 number length  %  Math.floor()
  burgerRate?: number;
};

const CardComponent = (props: tCardCardComponent) => {
  const {
    burgerImagePath,
    burgerAltImageText,
    burgerName,
    burgerDescription,
    burgerIngredients,
    burgerPrice,
    burgerRate,
  } = props;

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.divPhoto}>
          <img
            className={styles.burgerPhoto}
            src={"http://localhost:10808/image-1721884448442-731564312.png"}
            alt={burgerAltImageText}
          />
        </div>
      </section>
      <hr />
      <p>
        {/* <span>X - </span>BURGUER <span>CASEIRO</span> */}
        <span>X - </span>
        {burgerName}
      </p>
      <hr />
      <section>
        <p className={styles.pDescription}>
          {/* Pão de hambúrguer gourmet super macio sem gergilim, selado no
          tostador, blend de carnes de 90gr super suculenta com uma generosa
          fatia de queijo a sua escolha (Mussarela ou Polengui) */}
          {burgerDescription}
        </p>
        <hr />
        <p className={styles.pStuffs}>
          ingredientes:
          <span className={styles.spanStuffs}>&nbsp;{burgerIngredients}</span>
        </p>
      </section>
      <hr />
      <section>
        <label className={styles.labelPrice}>
          <p>Preço</p>
          <p>
            <span className={styles.spanPrice}>R$</span>{" "}
            {Number.isInteger(burgerPrice)
              ? `${burgerPrice},00`
              : `${burgerPrice}0`}
          </p>
        </label>
      </section>
      <hr />
      <section className={styles.sectionRate}>
        <label className={styles.labelHamburguer}>
          {/* logica de botao de like */}
          <p>+</p> &nbsp;
          <span>
            <SvgComponent
              svgImage={hamburguerAlpha}
              imgAlt="hamburguer"
              svgWidth="0.92rem"
            />
          </span>
        </label>
        <div>
          <SvgComponent
            svgImage={hamburguerAlpha}
            imgAlt="hamburguer"
            svgWidth="0.92rem"
            classNameImg={styles.alphaHamburguer}
          />
          &nbsp;
          <SvgComponent
            svgImage={hamburguerAlpha}
            imgAlt="hamburguer"
            svgWidth="0.92rem"
            classNameImg={styles.alphaHamburguer}
          />
          &nbsp;
          <SvgComponent
            svgImage={hamburguerAlpha}
            imgAlt="hamburguer"
            svgWidth="0.92rem"
          />
          <SvgComponent
            svgImage={hamburguerAlpha}
            imgAlt="hamburguer"
            svgWidth="0.92rem"
          />
          <SvgComponent
            svgImage={hamburguerAlpha}
            imgAlt="hamburguer"
            svgWidth="0.92rem"
          />
        </div>
      </section>
    </div>
  );
};

export default CardComponent;

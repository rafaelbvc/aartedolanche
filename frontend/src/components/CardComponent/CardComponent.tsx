import SvgComponent from "../SvgComponent";
import styles from "./CardComponent.module.css";
import burgerPhoto from "../../assets/burgers/burger-d.jpg";
import { hamburguerAlpha } from "../../assets/svgs";

type tCardCardComponent = {
  burgerPhoto: string;
  burgerPhotoAlt: string;
  burgerName: string;
  burgerDescription: string;
  burgerIngredients: string;
  burguerPrice: string;
  // somo todos os votos e divido por 5 number length  %  Math.floor()
  burgerRate?: number;
};

const CardComponent = (props: tCardCardComponent) => {
  const {
    burgerPhoto,
    burgerPhotoAlt,
    burgerName,
    burgerDescription,
    burgerIngredients,
    burguerPrice,
    burgerRate,
  } = props;

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.divPhoto}>
          <img
            className={styles.burgerPhoto}
            src={burgerPhoto}
            alt={burgerPhotoAlt}
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
            {Number.isInteger(burguerPrice)
              ? `${burguerPrice},00`
              : burguerPrice}
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

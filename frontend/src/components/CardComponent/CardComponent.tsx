import SvgComponent from "../SvgComponent";
import styles from "./CardComponent.module.css";
import burgerPhoto from "../../assets/burgers/burger-d.jpg";
import { hamburguerAlpha } from "../../assets/svgs";

const CardComponent = () => {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.divPhoto}>
          <img
            className={styles.burgerPhoto}
            src={burgerPhoto}
            alt="X-tananaa photo"
          />
        </div>
      </section>
      <hr />

      <p>
        <span>X - </span>BURGUER <span>CASEIRO</span>
      </p>
      <hr />
      <section>
        <p className={styles.pDescription}>
          Pão de hambúrguer gourmet super macio sem gergilim, selado no
          tostador, blend de carnes de 90gr super suculenta com uma generosa
          fatia de queijo a sua escolha (Mussarela ou Polengui)
        </p>
        <hr />
        <p className={styles.pStuffs}>
          ingredientes:{" "}
          <span className={styles.spanStuffs}>
            hambúrguer, hambúrguer, hambúrguer, hambúrguer ou hambúrguer
          </span>
        </p>
      </section>
      <hr />
      <section>
        <label className={styles.labelPrice}>
          <p>Preço</p>
          <p>
            <span className={styles.spanPrice}>R$</span> 18,00
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

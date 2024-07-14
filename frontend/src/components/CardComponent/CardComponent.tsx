import SvgComponent from "../SvgComponent";
import styles from "./CardComponent.module.css";
import burgerPhoto from "../../assets/burgers/burger-d.jpg";

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
          fatia de queijo a sua escolha ( Mussarela ou Polengui)
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
      <section className={styles.sectionRate}>
        {/* <button><SvgComponent svgImage="" imgAlt="botão de like" svgWidth="1rem"/></button> */}
        <label className={styles.labelHamburguer}>
          <p>+</p> &nbsp;
          <span>♥</span>
        </label>
        <div>
          <span className={styles.alphaHeart}>♥</span> &nbsp;
          <span className={styles.alphaHeart}>♥</span> &nbsp;
          <span>♥</span> &nbsp;
          <span>♥</span> &nbsp;
          <span>♥</span>
        </div>
      </section>
    </div>
  );
};

export default CardComponent;

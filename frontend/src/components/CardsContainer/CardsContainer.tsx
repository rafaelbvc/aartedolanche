import SvgComponent from "../SvgComponent";
import styles from "./CardsContainer.module.css";

const CardsContainer = () => {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.divPhoto}>photo</div>
      </section>

      <p>
        Name<span>outracor</span>
      </p>
      <section>
        <p>description</p>
        <p>ingredientes</p>
      </section>
      <section className={styles.sectionRate}>
        {/* <button><SvgComponent svgImage="" imgAlt="botão de like" svgWidth="1rem"/></button> */}
        <label className={styles.labelHamburguer}>
          <p>+</p>
          <button>Hamburger</button>
        </label>
        <div>
          <span>h</span>
          <span>h</span>
          <span>h</span>
          <span>H</span>
          <span>H</span>
          <span>H</span>
        </div>
      </section>
    </div>
  );
};

export default CardsContainer;

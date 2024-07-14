import SvgComponent from "../SvgComponent";
import styles from "./Footer.module.css";
import {
  whatsapp,
  facebook,
  instagram,
  email,
  mobilePhone,
  phone,
  map,
  arrowup,
} from "../../assets/svgs/index";

const Footer = () => {
  return (
    <footer className={styles.footerApp}>
      <section>
        <p>pequena descricao</p>
        <hr />
      </section>
      {/* <p>topbtn absolute </p> */}
      <section>
        <p>SIGA-NOS</p>
        <menu>
          <SvgComponent
            svgImage={whatsapp}
            imgAlt="whatsapp icon"
            svgWidth=""
          />
          <SvgComponent
            svgImage={facebook}
            imgAlt="facebook icon"
            svgWidth=""
          />
          <SvgComponent
            svgImage={instagram}
            imgAlt="instagram icon"
            svgWidth=""
          />
          <SvgComponent svgImage={email} imgAlt="email icon" svgWidth="" />
          <SvgComponent
            svgImage={mobilePhone}
            imgAlt="mobilePhone icon"
            svgWidth=""
          />
          <SvgComponent svgImage={phone} imgAlt="phone icon" svgWidth="" />
        </menu>
        <hr />
      </section>
      <section>
        <p>localizacao pagina google maps</p>
        <hr />
      </section>
      <section>
        <p>Copyright&copy; 2024 A Arte do Lanche</p>
        <hr />
      </section>
      <p>Desenvolvedor RBVC Solucoes</p>
    </footer>
  );
};

export default Footer;

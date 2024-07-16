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
    <footer>
      <section>
        <p style={{ fontSize: "0.54rem", textTransform: "uppercase" }}>
          Lanchonete Gourmet &nbsp; A <span>Arte</span> do Lanche
        </p>
        <p>&nbsp;</p>
      </section>
      {/* <p>topbtn absolute </p> */}
      <div className={styles.mediaContactsLocalization}>
        <section className={styles.sectionSocial}>
          <p>SIGA-NOS</p>
          <menu className={styles.contactsSocial}>
            <SvgComponent svgImage={whatsapp} imgAlt="whatsapp icon" />
            <SvgComponent svgImage={facebook} imgAlt="facebook icon" />
            <SvgComponent svgImage={instagram} imgAlt="instagram icon" />
            <SvgComponent svgImage={email} imgAlt="email icon" />
            <SvgComponent svgImage={mobilePhone} imgAlt="mobilePhone icon" />
            <SvgComponent svgImage={phone} imgAlt="phone icon" />
          </menu>
          <p>&nbsp;</p>
        </section>
        <section className={styles.sectionMap}>
          <label className={styles.labelMap}>
            <p>
              Rua Coronel Fernando Prestes, n° 03 - Centro
            </p>
            <SvgComponent svgImage={map} imgAlt="map icon" svgWidth="0.76rem" />
          </label>
          <p>&nbsp;</p>
        </section>
      </div>
      <section>
        <p>
          Copyright <span>&copy;</span> &nbsp; 2024 A Arte do Lanche Ltda.
        </p>
        <hr />
      </section>
      <section>
        <label className={styles.labelDeveloper}>
          <p style={{ fontSize: "0.46rem" }}>
            Desenvolvido por RBVC Soluções Tecnológicas Ltda.
          </p>
          <SvgComponent
            svgImage={whatsapp}
            imgAlt="whatsapp icon"
            svgWidth="0.7rem"
          />
        </label>
      </section>
    </footer>
  );
};

export default Footer;

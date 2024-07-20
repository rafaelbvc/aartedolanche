import styles from "./CardsContainer.module.css";
import { useState, useEffect } from "react";

const url = "http://localhost:10808/hamburgers";

const CardsContainer = () => {
  const [burgerData, setBurgerData] = useState<any>(undefined);

  useEffect(() => {
    const fetchBurgerData = async () => {
      try {
        const data: any = await fetch(url, {
          headers: { "Content-Type": "application/json" },
        });

        console.log(data.json(), "datajson");
        const dataBurger = JSON.stringify(data);
        console.log(dataBurger);
        setBurgerData(dataBurger);
      } catch (e) {
        console.log(e, "error");
      }
    };
    fetchBurgerData();
  }, []);

  console.log(burgerData, "burger data");
  return (
    <div className={styles.cardsContainer}>
      {/* <CardComponent burgerPhoto={photo}/>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent /> */}
    </div>
  );
};

export default CardsContainer;

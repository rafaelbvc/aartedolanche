import IBurgers from "../../interfaces/IBurgers";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./CardsContainer.module.css";
import { useState, useEffect } from "react";
import * as photoPath from "../../assets/burgers/index";

const url = "http://localhost:10808/hamburgers";

/* <Promise<Array<IBurgers>>></Promise> */
console.log(photoPath.burgerD);

const CardsContainer = () => {
  const [burgerData, setBurgerData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setBurgerData(result));
  }, [setBurgerData]);

  return (
    <div className={styles.cardsContainer}>
      {burgerData &&
        burgerData.map((data: IBurgers) => (
          <CardComponent
            key={data.burgerName}
            burgerDescription={data.burgerDescription}
            burgerIngredients={data.burgerIngredients}
            burgerRate={0}
            imagePath={data.burgerPhotoPath}
            burguerPrice={data.burgerPrice}
            imageAlt={""}
            burgerName={data.burgerName}
          />
        ))}
    </div>
  );
};

export default CardsContainer;

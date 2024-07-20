import CardComponent from "../CardComponent/CardComponent";
import styles from "./CardsContainer.module.css";
import { useState, useEffect } from "react";
import * as photoPath from "../../assets/burgers/index";

const url = "http://localhost:10808/hamburgers";

interface IBurgers {
  burgerName: string;
  burgerPhotoPath: string;
  burgerDescription: string;
  burgerIngredients: string;
  burgerPrice: string;
  burgerLikes: string;
}

/* <Promise<Array<IBurgers>>></Promise> */
console.log(photoPath.burgerD);

const CardsContainer = () => {
  const [burgerData, setBurgerData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setBurgerData(result));
    // () => setBurgerData(result)
    // .catch((error) => console.log(error, "deu merda"));
    // setBurgerData(result);
    // result.map(
    //   (
    //     // burgerLikes,
    //     // burgerName,
    //     // burgerPhoto,
    //     // burgerPhotoAlt,
    //     // burgerPrice,
    //     // burgerDescription,
    //     // burgerIngredients,
    //     itens,
    //   ) => {
    //     arr.push(...itens, itens);
    //     console.log(arr);
    //     setBurgerData(arr);
    //   },
    // );
    // setBurgerData(result);
    // const renderContainer = (
    //   <CardComponent
    //     burgerDescription={burgerDescription}
    //     burgerIngredients={burgerIngredients}
    //     burgerRate={0}
    //     burgerPhoto={burgerPhoto}
    //     burguerPrice={burgerPrice}
    //     burgerPhotoAlt={""}
    //     burgerName={burgerName}
    //   />
    //);
    // setBurgerData(renderContainer);
    // console.log(dataBurger);

    // setBurgerData(result);
    // });
    // const fetchBurgerData = async () => {
    //   try {
    //     const data: any = await fetch(url, {
    //       headers: { "Content-Type": "application/json" },
    //     });
    //     const dataB = data.json();
    //     console.log(dataB, "dataB");
    //     setBurgerData(dataB);
    //   } catch (e) {
    //     console.log(e, "error");
    //   }
    // };
    // console.log(burgerData, "burger data");
    // fetchBurgerData();
  }, [setBurgerData]);

  return (
    <div className={styles.cardsContainer}>
      {/* <CardComponent burgerPhoto={burgerData} /> */}
      {burgerData &&
        burgerData.map((data) => (
          <CardComponent
            key={data.burgerName}
            burgerDescription={data.burgerDescription}
            burgerIngredients={data.burgerIngredients}
            burgerRate={0}
            burgerPhoto={data.burgerPhotoPath}
            burguerPrice={data.burgerPrice}
            burgerPhotoAlt={""}
            burgerName={data.burgerName}
          />
        ))}
      {/*<CardComponent />
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

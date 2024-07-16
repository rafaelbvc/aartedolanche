import CardComponent from "../CardComponent/CardComponent";
import styles from "./CardsContainer.module.css";
// import { burgersData } from "../../data/burgers/burgersData";
import burgersData from "../../data/burgers/burgersData.json";
import { Console } from "console";
import { useEffect } from "react";

const CardsContainer = () => {
  // const name = burgersData;

  // console.log(burgersData.ids);

  // const arrayBurguer = burgersData.map((...props) =>
  //   props.map((props) => props[0].ids)

  // );

  // console.log(arrayBurguer);

  // const gggg = burgersData;

  // console.log(
  //   burgersData().map((pros) => {
  //     pros.name;
  //   }),
  // );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("../../data/burgers/burgersData");
      const burgerData = await data.json();

      console.log(burgerData.data);
    };

    fetchData();
  }, []);

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

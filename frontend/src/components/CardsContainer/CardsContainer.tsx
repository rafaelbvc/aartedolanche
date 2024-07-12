import CardComponent from "../CardComponent/CardComponent"
import styles from "./CardsContainer.module.css"

const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
        <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent /><CardComponent /><CardComponent /><CardComponent /><CardComponent /></div>
  )
}

export default CardsContainer
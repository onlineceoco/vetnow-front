import Card from "../card/Card";
import styles from "../../../styles/TabPage.module.css";
import { baseUrl } from "../../../helpers/UrlConfig";

const Tab5 = ({ data }) => {
  const filteredData = data.filter(dt => dt.category === "ضد عفونی کننده ها");
  return (
    <div className={styles.cardContainer}>
      {filteredData.map(card => {
        return (
          <Card
            key={card._id}
            main_images={`${process.env.baseUrl}/img/products/${card.images[0]}`}
            name={card.name}
            price={card.price}
          />
        );
      })}
      {/* <Card main_images="./images/ee.jpg" />
      <Card main_images="./images/zz.jpg" />
      <Card main_images="./images/zz.jpg" />
      <Card main_images="./images/zz.jpg" />
      <Card main_images="./images/zz.jpg" />
      <Card main_images="./images/zz.jpg" />
      <Card main_images="./images/zz.jpg" />
      <Card main_images="./images/zz.jpg" /> */}
    </div>
  );
};

export default Tab5;

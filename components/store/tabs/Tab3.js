import Card from "../card/Card";
import styles from "../../../styles/TabPage.module.css";
import { baseUrl } from "../../../helpers/UrlConfig";

const Tab3 = ({ data }) => {
  const filteredData = data.filter(dt => dt.category === "تجهیزات پرورشی");
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
    </div>
  );
};

export default Tab3;

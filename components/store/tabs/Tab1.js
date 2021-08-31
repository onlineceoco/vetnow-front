import Card from "../card/Card";
import styles from "../../../styles/TabPage.module.css";
import { baseUrl } from "../../../helpers/UrlConfig";

const Tab1 = ({ data }) => {
  const filteredData = data.filter(dt => dt.category === "کنسانتره و مکمل");
  return (
    <div className={styles.cardContainer}>
      {filteredData.map(card => {
        return (
          <Card
            key={card._id}
            main_images={`${baseUrl}/img/products/${card.images[0]}`}
            name={card.name}
            price={card.price}
          />
        );
      })}
    </div>
  );
};

export default Tab1;

import Card from "../Card/Card";
import styles from "../../../styles/TabPage.module.css";
import { Fragment } from "react";

const Tab1 = ({ data }) => {
  const filteredData = data.filter(
    dt =>
      dt.category === "واکسن ها" ||
      dt.category === "کنسانتره" ||
      dt.category === "راس 308",
  );
  console.log(data);
  console.log(filteredData);
  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        {filteredData.map(card => (
          <Fragment key={card._id}>
            <Card
              main_images={`${process.env.baseUrl}/img/products/${card.images[0]}`}
              name={card.name}
              price={card.price}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Tab1;

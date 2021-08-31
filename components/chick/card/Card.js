import styles from "../../../styles/card.module.css";
import Link from "next/link";
import { BiHeart, BiCart, BiBookContent } from "react-icons/bi";
import PN from "persian-number";

const Card = ({ main_images, name, price }) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.image}>
        <img id={styles.main_image} src={main_images} alt="" />
        <div className={styles.circle}>
          <Link href="/login">
            <span>
              <BiBookContent id={styles.logo2} />
            </span>
          </Link>
        </div>
        <div className={styles.circle}>
          <Link href="/shopping">
            <span>
              <BiHeart id={styles.logo2} />
            </span>
          </Link>
        </div>
        <div className={styles.circle}>
          <Link href="/product_page">
            <span>
              <BiCart id={styles.logo2} />
            </span>
          </Link>
        </div>
      </div>
      <div id={styles.title}>{name}</div>
      <div id={styles.price}>
        {PN.convertEnToPe(PN.sliceNumber(price))} تومان
      </div>
    </div>
  );
};

export default Card;

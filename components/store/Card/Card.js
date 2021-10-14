import styles from "../../../styles/card.module.css";
import Link from "next/link";
import { BiHeart, BiCart, BiBookContent } from "react-icons/bi";
import PN from "persian-number";

const Card = ({ image1, name, price }) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.image}>
        <img id={styles.main_image} src={image1} alt="" />
        <div className={styles.circle}>
          <Link href="/singleProduct" passHref>
            <span>
              <BiBookContent id={styles.logo2} />
            </span>
          </Link>
        </div>
        <div className={styles.circle}>
          <Link href="/shopping" passHref>
            <span>
              <BiHeart id={styles.logo2} />
            </span>
          </Link>
        </div>
        <div className={styles.circle}>
          <Link href="/singleProduct" passHref>
            <span>
              <BiCart id={styles.logo2} />
            </span>
          </Link>
        </div>
      </div>
      <div id={styles.title}>{name} </div>
      <div id={styles.price}>
        {PN.convertEnToPe(PN.sliceNumber(price))} تومان
      </div>
    </div>
  );
};

export default Card;

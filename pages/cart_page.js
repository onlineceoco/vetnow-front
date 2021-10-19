import { useState } from "react";
import cartStyle from "../styles/cartPage.module.css";
import { ImCart } from "react-icons/im";
import ProductCart from "../components/cartPage/ProductCart";
import PaySide from "../components/cartPage/paySide";
import Link from 'next/link'
export default function CartPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={cartStyle.body}>
        <div
          className={`${cartStyle["container"]} ${open ? cartStyle.open : ""}`}>
          <Link href="/" passHref><h1>VetNow</h1></Link>
          <input type="text" placeholder="Search" />
          <ImCart style={{ margin: "auto 0 auto auto" }} />
          <span style={{ margin: "auto auto auto 5px", cursor:"default" }}>0</span>
        </div>
        <div className={cartStyle["section"]}>
          <section className={cartStyle["productSide"]}>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </section>
          <PaySide />
        </div>
      </div>

      <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@600&display=swap");
          * {
            margin: 0;
            padding: 0;
            font-family: "Truculenta", sans-serif;
          }
        `}
      </style>
    </div>
  );
}

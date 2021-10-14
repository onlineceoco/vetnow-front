import cartStyle from "./ProductCart.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

export default function ProductCart() {
  const [data, setData] = useState(null);

  function getData(value) {
    setData(value.target.value);
  }
  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if ({ count }.count <= 1) {
      return (count = count);
    }
    count = count - 1;
    setCount(count);
  }
  return (
    <div className={cartStyle.container}>
      <div className={cartStyle.rightWrapper}>
        <section className={cartStyle.partOne}>
          <img src="/images/product44.jpg" alt="" />
          <section className={cartStyle.partTwo}>
            <h1 id={cartStyle.title}>item name here</h1>
            <h1 id={cartStyle.subtitle}>sub information here</h1>
          </section>
        </section>
        <section className={cartStyle.partThree}>
          <button onClick={decrementCount} id={cartStyle.btnMinus}>
            -
          </button>
          <input
            placeholder={count}
            onChange={getData}
            id={cartStyle.NumberOfProduction}
            type="text"
            min="1"
          />
          <button onClick={incrementCount} id={cartStyle.btnPlus}>
            +
          </button>
        </section>
        <h1 id={cartStyle.priceTitle}>19.30$</h1>
        <FaTrashAlt id={cartStyle.trashLogo} />
      </div>
    </div>
  );
}

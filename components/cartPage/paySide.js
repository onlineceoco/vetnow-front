import payStyle from "./paySide.module.css";

const PaySide = () => {
  return (
    <div className={payStyle.container}>
      <div className={payStyle.main}>
        <div className={payStyle.subTotal}>
          <h1>subTitle</h1>
          <h1>$134.21</h1>
        </div>
        <div className={payStyle.subTotal}>
          <h1>Shipping Fees</h1>
          <h1>$134.21</h1>
        </div>
        <div className={payStyle.subTotal}>
          <h1>Taxes</h1>
          <h1>$134.21</h1>
        </div>
        <div className={payStyle.subTotal}>
          <h1>Total (including tax)</h1>
          <h1>$134.21</h1>
        </div>
      </div>
    </div>
  );
};

export default PaySide;

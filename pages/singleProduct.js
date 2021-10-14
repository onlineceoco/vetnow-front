import modalcssStyle from "../styles/singleProduct.module.css"
import ImageTab from "../components/SingleProductElement/ImageTab";
import PlusMinusBtn from "../components/SingleProductElement/PlusMinusBtn";
import DescriptionComment from "../components/SingleProductElement/DescriptionComment";
const detaile={
    image1:"images/chick103.jpg",
      image2:"images/babychiken.jpg",
      image3:"images/00000.jpg",
      image4:"images/pellet100.jpg",
      linkTitle:"---",
      subLinkTitle:"---",
      productName_fa:" راس 308",
      productName_en:"شرکت مرغ مادر نمونه",
      productDetaile:"نژاد راس یکی از گزینه های مناسب پرورشی در بین مرغداران کشورمان می باشد زیرا از سطح سازگاری مطلوبی با شرایط جوی ایران برخوردار است. در حال حاضر بیش از 70 درصد مرغداران فعال در صنعت مرغ گوشتی از این نژاد استفاده می کنند. تاریخچه ورود این نژاد در ایران به شرکت آویاژن از کشور انگلستان بر می گردد. مقاومت بالا نسبت به بیماریهای ویروسی و باکتریایی از بهترین ویژگیهای است که بتعث اقبال مرغداران نسبت به این سویه گردیده است.",
      price:"00000",
      btnTitle:"ثبت خرید",
      btnTitle2:"دانلود آنالیز خونی مادر",
      leftTabTitle:" مشخصات فنی",
      rightTabTitle:"نظرات کاربران"
}
export default function Modal() {
  return (
    <>
      <div className={modalcssStyle["overlay"]}  >
        <div className={modalcssStyle["setFixed"]}>
          <div className={modalcssStyle["container"]}>
            <div className={modalcssStyle["leftSide"]}>
              <ImageTab image1={detaile.image1} image2={detaile.image2} image3={detaile.image3} image4={detaile.image4} />
            </div>
            <div className={modalcssStyle["rightSide"]}>
              <div className={modalcssStyle["linkName"]}>
                <h1 id={modalcssStyle.link}>{detaile.linkTitle}</h1>
                <h1 id={modalcssStyle.dash}>/</h1>
                <h1 id={modalcssStyle.link}>{detaile.subLinkTitle}</h1>
              </div>
              <h1 id={modalcssStyle["productTitleFa"]}>{detaile.productName_fa}</h1>
              <h1 id={modalcssStyle["productTitleEn"]}>{detaile.productName_en}</h1>
              <p id={modalcssStyle["productDetaile"]}>
              {detaile.productDetaile}
              </p>
              <PlusMinusBtn />
              <div className={modalcssStyle["price"]}>
                <h1 id={modalcssStyle["priceTitle"]}>{detaile.price} تومان</h1>
                <h1 id={modalcssStyle["priceTitle"]}>قیمت</h1>
              </div>
              <div className={modalcssStyle["btn"]}>
              <button id={modalcssStyle.button}>{detaile.btnTitle}</button>
              <a href="/pdf/sami.pdf" download="sami.pdf"><button id={modalcssStyle.button}>{detaile.btnTitle2}</button></a>
              </div>
            
          </div>
          <div className={modalcssStyle.description}>
            <DescriptionComment leftTabTitle={detaile.leftTabTitle} rightTabTitle={detaile.rightTabTitle}  />
           
            </div>
          </div>
        </div>
        <style global jsx>
          {`
            body{
              background-color: #232f3e;
            }
          `}
        </style>
      </div>
    </>
  );
}

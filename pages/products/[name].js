import modalcssStyle from "../../styles/singleProduct.module.css";
import ImageTab from "../../components/SingleProductElement/ImageTab";
import PlusMinusBtn from "../../components/SingleProductElement/PlusMinusBtn";
import DescriptionComment from "../../components/SingleProductElement/DescriptionComment";
import { axiosInstance } from "../../helpers/axiosInstance";
import PN from "persian-number";

function Modal({ data }) {
  const detaile = {
    image1: data[0] && data[0].images[0],
    image2: data[0] && data[0].images[1],
    image3: data[0] && data[0].images[2],
    image4: data[0] && data[0].images[3],
    linkTitle: "---",
    subLinkTitle: "---",
    productName_fa: data[0] && data[0].name,
    productName_en: "شرکت مرغ مادر نمونه",
    productDetaile: data[0] && data[0].descreption,
    price: data[0] && PN.convertEnToPe(data[0].price),
    btnTitle: "ثبت خرید",
    btnTitle2: "دانلود آنالیز خونی مادر",
    leftTabTitle: " مشخصات فنی",
    rightTabTitle: "نظرات کاربران",
  };
  console.log(data);
  return (
    <>
      <div className={modalcssStyle["overlay"]}>
        <div className={modalcssStyle["setFixed"]}>
          <div className={modalcssStyle["container"]}>
            <div className={modalcssStyle["leftSide"]}>
              <ImageTab
                image1={detaile.image1}
                image2={detaile.image2}
                image3={detaile.image3}
                image4={detaile.image4}
              />
            </div>
            <div className={modalcssStyle["rightSide"]}>
              <div className={modalcssStyle["linkName"]}>
                <h1 id={modalcssStyle.link}>{detaile.linkTitle}</h1>
                <h1 id={modalcssStyle.dash}>/</h1>
                <h1 id={modalcssStyle.link}>{detaile.subLinkTitle}</h1>
              </div>
              <h1 id={modalcssStyle["productTitleFa"]}>
                {detaile.productName_fa}
              </h1>
              <h1 id={modalcssStyle["productTitleEn"]}>
                {detaile.productName_en}
              </h1>
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
                <a href="/pdf/sami.pdf" download="sami.pdf">
                  <button id={modalcssStyle.button}>{detaile.btnTitle2}</button>
                </a>
              </div>
            </div>
            <div className={modalcssStyle.description}>
              <DescriptionComment
                leftTabTitle={detaile.leftTabTitle}
                rightTabTitle={detaile.rightTabTitle}
              />
            </div>
          </div>
        </div>
        <style global jsx>
          {`
            body {
              background-color: #232f3e;
            }
          `}
        </style>
      </div>
    </>
  );
}
export async function getStaticPaths(data) {
  const url = encodeURI("products");
  const res = await axiosInstance.get(url);
  const paths = res.data.data.map(dt => ({
    params: { name: dt.name },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const name = params.name;
  const url = encodeURI(`products?name=${name}`);
  try {
    const res = await axiosInstance.get(url);
    return {
      props: { data: res.data.data },
      revalidate: 10,
    };
  } catch (e) {
    return { props: { data: [] } };
  }
}

export default Modal;

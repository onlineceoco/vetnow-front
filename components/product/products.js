import Layout from "../Adviser/Layout";
import ImageSlider from "./ImageSlider";
import product_styles from "./ProductsStyle.module.css";
import Card from "./Card";
import useInView from "react-cool-inview";
import BarChart from "../news/educationPage/barChart";

const Products = ({
  chartColor,
  chartCategories,
  chartData,
  chartWidth,
  chartHeight,
  displatChart,
  img1Slider,
  img2Slider,
  img3Slider,
  title1Banner,
  img2Banner,
  title2Banner,
  subtitle2Banner,
  title3Banner,
  img3Banner,
  leftSideBgColor,
  rightSideBgColor,
  subtitle3Banner,
  title4Banner,
  img4Banner,
  subtitle4Banner,
  title5Banner,
  img5Banner,
  subtitle5Banner,
  btnTextBanner,
  titleNews,
  title1News,
  img1News,
  subtitle1News,
  readMoreLnik,
  title2News,
  img2News,
  subtitle2News,
  title3News,
  img3News,
  subtitle3News,
  title1Footer,
  title3Footer,
  data,
}) => {
  const { observe, inView } = useInView({
    threshold: 0.1,
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <Layout>
      <div className={product_styles.sectionOne}>
        <ImageSlider
          img1Slider={img1Slider}
          img2Slider={img2Slider}
          img3Slider={img3Slider}
        />
        <div
          className={product_styles["ChartSection"]}
          style={{ display: displatChart }}
        >
          <BarChart
            color={chartColor}
            categories={chartCategories}
            data={chartData}
            width={chartWidth}
            height={chartHeight}
          />
          <div className={product_styles["ChartDetail"]}>
            <h1>درباره این نژاد</h1>
          </div>
        </div>
      </div>
      <h1 id={product_styles.sectionTwoTitle}>{title1Banner}</h1>
      <div ref={observe} className={product_styles["sectionTwo"]}>
        <div
          className={product_styles["rightSide"]}
          style={{ backgroundColor: leftSideBgColor }}
        >
          <div className={product_styles["top_of_rightSide"]}>
            <img src={img2Banner} alt="" />
            <div className={product_styles["wordsTop_of_rightSide"]}>
              <h1 id={product_styles.title}>{title2Banner}</h1>
              <h1 id={product_styles.subtitle}>{subtitle2Banner}</h1>
            </div>
          </div>

          <div className={product_styles.bottom_of_rightside}>
            <div className={product_styles.right_bottom_rightSide}>
              <div className={product_styles.container_right_bottom_rightSide}>
                <h1 id={product_styles.title_right_bottom}>{title3Banner}</h1>
                <img
                  id={product_styles.img_right_bottom_rightSide}
                  src={img3Banner}
                  alt=""
                />
                <h1 id={product_styles.subtitle_right_bottom}>
                  {subtitle3Banner}
                </h1>
              </div>
            </div>
            <div className={product_styles.left_bottom_rightside}>
              <div className={product_styles.container_left_bottom}>
                <h1 id={product_styles.title_right_bottom}>{title4Banner}</h1>
                <img
                  id={product_styles.img_right_bottom_rightSide}
                  src={img4Banner}
                  alt=""
                />
                <h1 id={product_styles.subtitle_right_bottom}>
                  {subtitle4Banner}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className={product_styles.leftSide}
          style={{ backgroundColor: rightSideBgColor }}
        >
          <div className={product_styles.container_leftSide}>
            <img id={product_styles.img_leftSide} src={img5Banner} alt="" />
            <h1 id={product_styles.title_leftside}>{title5Banner}</h1>
            <h1 id={product_styles.subtitle_leftside}>{subtitle5Banner}</h1>
            <button>{btnTextBanner}</button>
          </div>
        </div>
      </div>
      {inView && (
        <div className={product_styles.CardContainer}>
          <Card data={data} />
        </div>
      )}
      <h1 style={{ marginTop: "20px" }}>{titleNews}</h1>
      {inView && (
        <div className={product_styles.description}>
          <div className={product_styles.descriptionCard}>
            <img src={img1News} alt="" />
            <h1 id={product_styles["titleNews"]}>{title1News}</h1>
            <h2>{subtitle1News}</h2>
            <a>{readMoreLnik}</a>
          </div>
          <div className={product_styles.descriptionCard}>
            <img src={img2News} alt="" />
            <h1>{title2News}</h1>
            <h2>{subtitle2News}</h2>
            <a>{readMoreLnik}</a>
          </div>
          <div className={product_styles.descriptionCard}>
            <img src={img3News} alt="" />
            <h1>{title3News}</h1>
            <h2>{subtitle3News}</h2>
            <a>{readMoreLnik}</a>
          </div>
        </div>
      )}
      {inView && (
        <div className={product_styles.Company}>
          <h1>{title1Footer}</h1>
          <h2>
            {new Date().getFullYear()}/{new Date().getMonth() + 1}/
            {new Date().getDate()}
          </h2>
          <h3>{title3Footer}</h3>
        </div>
      )}
      <style global jsx>
        {`
          body {
            font-family: "Yanone Kaffeesatz", sans-serif;
          }
        `}
      </style>
    </Layout>
  );
};
export default Products;

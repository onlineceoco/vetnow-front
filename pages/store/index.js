import SliderOne from "../../components/store/slider/Slider";
import Tabs from "../../components/store/tabs/Tabs";
import Layout from "../../components/Adviser/Layout";
import { axiosInstance } from "../../helpers/axiosInstance";
const Store = ({ data }) => {
  return (
    <div>
      <Layout>
        <SliderOne
          imgSlide1="images/slid2.jpg"
          imgSlide2="images/slid3.jpg"
          imgSlide3="images/slid2.jpg"
          imgSlide4="images/slid3.jpg"
          titleSlide1=" دسترسی به کارخانجات تولید دان پلت معتبر"
          titleSlide2=" تضمین قیمت و تضمین کیفیت از طرف کارخانه"
          titleSlide3=" دسترسی سریع با ارسال سفارشی از نزدیک ترین کارخانه"
          titleSlide4=" دسترسی به داروهای تخصصی طیور"
        />
        <Tabs
          tab1logo="./images/pellet00.png/"
          tab2logo="./images/chart.png/"
          tab3logo="./images/corn.png/"
          tab4logo="./images/fan.png/"
          tab5logo="./images/bird.png/"
          tab1Title="کنسانتره"
          tab2Title="مکمل"
          tab3Title="دان آماده"
          tab4Title="تجهیزات پرورشی"
          tab5Title="پرندگان زینتی"
          tab1img1="./images/feed01.jpg"
          tab1img2="./images/feed01.jpg"
          tab1img3="./images/feed01.jpg"
          tab1img4="./images/feed01.jpg"
          tab2img1="./images/mokamel.jpg"
          tab2img2="./images/mokamel.jpg"
          tab2img3="./images/mokamel.jpg"
          tab2img4="./images/mokamel.jpg"
          tab3img1="./images/feed.jpg"
          tab3img2="./images/feed.jpg"
          tab3img3="./images/feed.jpg"
          tab3img4="./images/feed.jpg"
          tab4img1="./images/feeder01.jpg"
          tab4img2="./images/feeder01.jpg"
          tab4img3="./images/feeder01.jpg"
          tab4img4="./images/feeder01.jpg"
          tab5img1="./images/bird02.jpg"
          tab5img2="./images/bird02.jpg"
          tab5img3="./images/bird02.jpg"
          tab5img4="./images/bird02.jpg"
          data={data}
        />
      </Layout>
    </div>
  );
};
export async function getStaticProps(context) {
  const url = encodeURI(
    "products?category=مکمل&category=کنسانتره&category=دان آماده&category=تجهیزات پرورشی&category=پرندگان زینتی",
  );
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

export default Store;

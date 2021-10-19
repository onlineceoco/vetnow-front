import SliderOne from "../../components/store/slider/Slider";
import Tabs from "../../components/store/tabs/Tabs";
import Layout from "../../components/Adviser/Layout";
import { axiosInstance } from "../../helpers/axiosInstance";

const Pharmacy = ({ data }) => {
  return (
    <div>
      <Layout>
        <SliderOne
          imgSlide1="images/0125q.jpg"
          imgSlide2="images/0125q.jpg"
          imgSlide3="images/0125q.jpg"
          imgSlide4="images/0125q.jpg"
          titleSlide1="دسترسی به داروهای تخصصی طیور"
          titleSlide2="تضمین قیمت = تضمین اصالت"
          titleSlide3="دسترسی سریع با ارسال سفارشی"
          titleSlide4="دسترسی به داروهای تخصصی طیور"
        />
        <Tabs
          tab1logo="./images/vaccine.svg/"
          tab2logo="./images/vit.png/"
          tab3logo="./images/pill.png/"
          tab4logo="./images/sup.png/"
          tab5logo="./images/spry.png/"
          tab1Title="واکسن"
          tab2Title="ویتامین"
          tab3Title="آنتی بیوتیک"
          tab4Title="افزودنی"
          tab5Title="ضدعفونی کننده"
          data={data}
        />
      </Layout>
    </div>
  );
};

export async function getStaticProps(context) {
  const url = encodeURI(
    "products?category=افزودنی ها&category=واکسن ها&category=ضد عفونی کننده ها&category=آنتی بیوتیک ها&category=ویتامین ها",
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

export default Pharmacy;

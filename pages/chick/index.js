import SliderOne from "../../components/store/slider/Slider";
import Tabs from "../../components/store/tabs/Tabs";
import Layout from "../../components/Adviser/Layout";
import { axiosInstance } from "../../helpers/axiosInstance";

const Chick = ({ data }) => {
  return (
    <Layout>
      <SliderOne
        imgSlide1="images/CHICKENB.jpg"
        imgSlide2="images/slidechick.jpg"
        imgSlide3="images/isslide05.jpg"
        imgSlide4="images/slidechick.jpg"
        titleSlide1="دسترسی به کله های مادر ایران "
        titleSlide2="تضمین قیمت = تضمین اصالت"
        titleSlide3="مشاهده و دانلود آنالیز گله مادر"
        titleSlide4="توزیع استاندارد و تحت نظارت"
      />
      <Tabs
        tab1logo="images/chickicon.png/"
        tab2logo="images/hobard.png/"
        tab3logo="images/chick99.png/"
        tab4logo="images/chii.png/"
        tab5logo="images/chickicon.png/"
        tab1Title="راس 308"
        tab2Title="آرین"
        tab3Title="هوبارد"
        tab4Title="کاب500"
        tab5Title="آبراکرز پلاس"
        data={data}
      />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const url = encodeURI(
    "products?category=راس 308&category=آدین&category=هوبارد&category=کاپ",
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

export default Chick;

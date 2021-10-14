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
        imgSlide3="images/slidechick.jpg"
        imgSlide4="images/slidechick.jpg"
        titleSlide1="دسترسی به کله های مادر ایران "
        titleSlide2="تضمین قیمت = تضمین اصالت"
        titleSlide3="مشاهده و دانلود آنالیز گله مادر"
        titleSlide4="توزیع استاندارد و تحت نظارت"
      />
      <Tabs
        tab1logo="./images/chickicon.png/"
        tab2logo="./images/hobard.png/"
        tab3logo="./images/chick99.png/"
        tab4logo="./images/chii.png/"
        tab5logo="./images/chickicon.png/"
        tab1Title="راس 308"
        tab2Title="آرین"
        tab3Title="هوبارد"
        tab4Title="کاب500"
        tab5Title="آبراکرز پلاس"
        tab1img1="./images/BABY.jpg"
        tab1img2="./images/BABY.jpg"
        tab1img3="./images/BABY.jpg"
        tab1img4="./images/BABY.jpg"
        tab2img1="./images/00000.jpg"
        tab2img2="./images/00000.jpg"
        tab2img3="./images/00000.jpg"
        tab2img4="./images/00000.jpg"
        tab3img1="./images/000000.jpg"
        tab3img2="./images/000000.jpg"
        tab3img3="./images/000000.jpg"
        tab3img4="./images/000000.jpg"
        tab4img1="./images/000000.jpg"
        tab4img2="./images/000000.jpg"
        tab4img3="./images/000000.jpg"
        tab4img4="./images/000000.jpg"
        tab5img1="/images/bird02.jpg"
        tab5img2="/images/bird02.jpg"
        tab5img3="/images/bird02.jpg"
        tab5img4="/images/bird02.jpg"
        data={data}
      />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const url = encodeURI(
    "products?category=راس 308&category=آدین&category=هوبارد&category=کاپ",
  );
  const res = await axiosInstance.get(url);
  return {
    props: { data: res.data.data },
    revalidate: 10,
  };
}

export default Chick;

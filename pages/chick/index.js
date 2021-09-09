import Menubar from "../../components/chick/menubar/Menubar";
import SliderOne from "../../components/chick/slider/Slider";
import Tabs from "../../components/chick/tabs/Tabs";
import Footer from "../../components/Footer/Footer";
import Drawer from "../../components/Drawer/Drawer";
import { axiosInstance } from "../../helpers/axiosInstance";

const Chick = ({ data }) => {
  return (
    <div>
      <Menubar />
      <Drawer />
      <SliderOne />
      <Tabs data={data} />
      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const url = encodeURI(
    "products?category=راس 308&category=آدین&category=هوبارد&category=کاپ",
  );
  const res = await axiosInstance.get(url);
  console.log(res);
  return {
    props: { data: res.data.data },
    revalidate: 10,
  };
}

export default Chick;

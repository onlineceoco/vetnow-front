import Menubar from "../../components/Pharmacy/menubar/Menubar";
import SliderOne from "../../components/Pharmacy/slider/Slider";
import Tabs from "../../components/Pharmacy/tabs/Tabs";
import Footer from "../../components/Footer/Footer";
import Drawer from "../../components/Drawer/Drawer";
import { axiosInstance } from "../../helpers/axiosInstance";

const Pharmacy = ({ data }) => {
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
    "products?category=افزودنی ها&category=واکسن ها&category=ضد عفونی کننده ها&category=آنتی بیوتیک ها&category=ویتامین ها",
  );
  const res = await axiosInstance.get(url);
  return {
    props: { data: res.data.data },
    revalidate: 10,
  };
}
export default Pharmacy;

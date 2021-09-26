import Menubar from "../../components/store/menubar/Menubar";
import SliderOne from "../../components/store/slider/Slider";
import Tabs from "../../components/store/tabs/Tabs";
import Footer from "../../components/Footer/Footer";
import Drawer from "../../components/Drawer/Drawer";
import { axiosInstance } from "../../helpers/axiosInstance";
import Layout from "../../components/Layout/Layout";
const Store = ({ data }) => {
  return (
    <div>
      <Layout isSecond>
        <SliderOne />
        <Tabs data={data} />
        <Footer />
      </Layout>
    </div>
  );
};

export async function getStaticProps(context) {
  const url = encodeURI(
    "products?category=کنسانتره و مکمل&category=دان آماده&category=تجهیزات پرورشی&category=پرندگان زینتی",
  );
  const res = await axiosInstance.get(url);
  return {
    props: { data: res.data.data },
    revalidate: 10,
  };
}
export default Store;

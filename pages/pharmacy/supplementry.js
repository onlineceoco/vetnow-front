import Products from "../../components/product/products";
import { axiosInstance } from "../../helpers/axiosInstance";

const Suplomentry = ({ data }) => {
  return (
    <div>
      <Products
        leftSideBgColor="#d0d9e7"
        rightSideBgColor="#432f3e"
        displatChart="none"
        img1Slider="/images/isslide.jpg"
        img2Slider="/images/isslide02.jpg"
        img3Slider="/images/isslide05.jpg"
        title1Banner="افزودنی ها"
        img2Banner="/images/baner05.png"
        title2Banner="کامل کننده جیره"
        subtitle2Banner="بر طرف کننده سوتغذیه"
        title3Banner="مولتی ویتامین"
        img3Banner="/images/iso013.png"
        subtitle3Banner="استفاده راحتتر"
        title4Banner="افزودنی جیره"
        img4Banner="/images/is012.png"
        subtitle4Banner="برای طیور بومی"
        title5Banner=""
        img5Banner="/images/baner.png"
        subtitle5Banner="زینگ + ویتامین"
        btnTextBanner="همین الان خرید کنید"
        titleNews="اخبار جدید"
        title1News="رونمایی از واکسن چهارگانه"
        img1News="/images/news04.jpg"
        subtitle1News="عضو هیأت علمی انستیتو پاستور ایران با تاکید بر اینکه تنها کشور فرانسه تولیدکننده این ادجوانت بوده است، گفت: در حال حاضر ما در این شرکت به عنوان دومین تولید کننده در دنیا توانستیم این ماده را وارد بازار کنیم و آن را از انحصار شرکت فرانسوی در بیاوریم."
        readMoreLnik="ادامه ..."
        title2News="کاهش تاثیر واکسن نیوکاسل"
        img2News="/images/news01.jpg"
        subtitle2News="عضو هیأت علمی انستیتو پاستور ایران با تاکید بر اینکه تنها کشور فرانسه تولیدکننده این ادجوانت بوده است، گفت: در حال حاضر ما در این شرکت به عنوان دومین تولید کننده در دنیا توانستیم این ماده را وارد بازار کنیم و آن را از انحصار شرکت فرانسوی در بیاوریم. "
        title3News="افزایش قیمت واکسن"
        img3News="/images/news03.jpg"
        subtitle3News="دکتر عباس جمالی، مدیرعامل یک شرکت دانش بنیان مستقر در مرکز رشد انستیتو پاستور ایران در گفتگو با مهر با بیان اینکه در این شرکت موفق به تولید ماده اصلی واکسن‌ های دام و طیور شدیم، اظهار کرد: ادجوانت روغنی ماده جانبی و اصلی تولید واکسن‌ های دام و طیور است که.... "
        title1Footer="مجموعه تخصصی وتنا"
        title2Footer="..."
        title3Footer="آخرین بروز رسانی امروز "
        data={data}
      />
    </div>
  );
};
export async function getStaticProps(context) {
  const url = encodeURI("products?category=افزودنی ها");
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
export default Suplomentry;

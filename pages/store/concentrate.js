import Products from "../../components/product/products";
import { axiosInstance } from "../../helpers/axiosInstance";

const Concentrate = ({ data }) => {
  return (
    <div>
      <Products
        leftSideBgColor="#FAEEE0"
        rightSideBgColor="#DBD0C0"
        displatChart="none"
        img1Slider="/images/tools1002.jpg"
        img2Slider="/images/pellet100.jpg"
        img3Slider="/images/pellet022.jpg"
        title1Banner="کنسانتره "
        img2Banner="/images/is012.png"
        title2Banner=" کنسانتره طیور بومی"
        subtitle2Banner="100% organic"
        title3Banner="دان های تخصصی"
        img3Banner="/images/concentrat04.png"
        subtitle3Banner="20% تخفیف کیف پول"
        title4Banner="دان پلت آماده"
        img4Banner="/images/concentrat03.png"
        subtitle4Banner="با صرفه و بدون پرت"
        title5Banner=" کنسانتره  کوشتی"
        img5Banner="/images/concentrat02.png"
        subtitle5Banner="تضمین قیمت - تضمین کیفیت"
        btnTextBanner="اضافه کردن به سبد خرید"
        titleNews="اخبار جدید"
        title1News="حمایت از شرکت های دانش بنیان تولید واکسن طیور"
        img1News="/images/news04.jpg"
        subtitle1News="به گزارش گروه علم و پیشرفت خبرگزاری فارس به نقل از معاونت علمی و فناوری ریاست‌جمهوری، یکی از مهم‌ترین نیازهای صنعت واکسن دام، طیور و آبزیان تولید واکسن‌هایی است که می تواند بروز بیماری‌ها را افزایش دهد و خسارت‌های مالی به صاحبان این شرکت‌ها و پرورش‌دهندگان تحمیل کند. "
        readMoreLnik="ادامه ..."
        title2News="استفاده از آنتی بیوتیک برای دام و طیور باعث مقاومت آنتی بیوتیکی می شود"
        img2News="/images/news01.jpg"
        subtitle2News="طبق تحقیقاتی که در بریتانیا انجام شده تا سال ۲۰۵۰ میلادی مقاومت آنتی بیوتکی معضلی کشنده تر از سرطان خواهد شد و سالانه بیش از ۱۰ میلیون نفر قربانی. خواهد گرفت. می خواهیم بدانیم این مقاومت در برابر آنتی بیوتیکها چگونه از حیوانات به انسانها منتقل می شوند و برای ریشه کن کردن این مشکل از دست پرورش دهندگان دام چه کاری ساخته است؟  "
        title3News="با افرادی که آنتی‌بیوتیک‌های انسانی در دام و طیور تجویز و مصرف نمایند، به شدت برخورد قانونی خواهد شد "
        img3News="/images/news03.jpg"
        subtitle3News="علیزاده گفت: اقدام به تجویز یا مصرف آنتی بیوتیک انسانی برای درمان، پیشگیری یا افزایش روند رشد در دام و مخصوصا طیور صنعتی تخلفی نابخشودنی است که با خاطیان از طریق مراجع ذیصلاح قانونی برخورد خواهد شد "
        title1Footer="مجموعه تخصصی پرورش طیور وتنا"
        title2Footer="...."
        title3Footer="1998"
        data={data}
      />
    </div>
  );
};
export async function getStaticProps(context) {
  const url = encodeURI("products?category=کنسانتره");
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

export default Concentrate;

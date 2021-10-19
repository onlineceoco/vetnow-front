import Products from "../../components/product/products";
import { axiosInstance } from "../../helpers/axiosInstance";

const Equipments = ({ data }) => {
  return (
    <div>
      <Products
        leftSideBgColor="#FAEEE0"
        rightSideBgColor="#DBD0C0"
        displatChart="none"
        img1Slider="/images/spray02.jpg"
        img2Slider="/images/feeder02.jpg"
        img3Slider="/images/parkan.jpg"
        title1Banner="تجهیزات پرورشی "
        img2Banner="/images/aaaaa1.png"
        title2Banner="هیتر های صنعتی متحرک"
        subtitle2Banner=" راندمان حداکثری"
        title3Banner="دستگاه جوجه کشی اتوماتیک"
        img3Banner="/images/chickmechine.png"
        subtitle3Banner="چند منظوره و بسیار دقیق"
        title4Banner="نیپل استیل"
        img4Banner="/images/drinker010.png"
        subtitle4Banner="تضمین کیفیت و اصالت"
        title5Banner="آبخوری و دان خوری "
        img5Banner="/images/feeder10.png"
        subtitle5Banner="ساده و کاربردی"
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
  const url = encodeURI("products?category=تجهیزات پرورشی");
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

export default Equipments;

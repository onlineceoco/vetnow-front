import Products from "../../components/product/products";
import { axiosInstance } from "../../helpers/axiosInstance";

const Ross308 = ({ data }) => {
  return (
    <div>
      <Products
        leftSideBgColor="#FFEDDA"
        rightSideBgColor="#FFB830"
        // Chart Data Start
        chartColor={["#000000", "#082032", "#334756", "#F0A500", "#FFF8E5"]}
        chartCategories={[
          1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400,
        ]}
        chartData={[
          {
            name: "کاب 500",
            data: [11, 12, 13, 24, 15],
          },
          {
            name: "راس ۳۰۸",
            data: [12, 13, 14, 15, 16],
          },
          {
            name: "کاب 500",
            data: [11, 12, 13, 24, 15],
          },
          {
            name: "راس ۳۰۸",
            data: [12, 13, 14, 15, 16],
          },
          {
            name: "کاب 500",
            data: [11, 12, 13, 24, 15],
          },
        ]}
        chartWidth="100%"
        chartHeight="300px"
        // Chart Data End
        img1Slider="/images/babychiken.jpg"
        img2Slider="/images/isvacine04.jpg"
        img3Slider="/images/0125q.jpg"
        title1Banner="راس 308 "
        img2Banner="/images/vacine24.png"
        title2Banner="واکسن های ضروری راس"
        subtitle2Banner="جدول واکسن"
        title3Banner="ویتامین ها و مکمل ها"
        img3Banner="/images/b3.png"
        subtitle3Banner="10% تخفیف کیف پول"
        title4Banner="جیره و دان"
        img4Banner="/images/concentrat02.png"
        subtitle4Banner="تضمین کیفیت"
        title5Banner="آنتی بیوتیک "
        img5Banner="/images/qqqqq.png"
        subtitle5Banner="تضمین قیمت - تضمین اصالت"
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
  const url = encodeURI("products?category=راس 308");
  const res = await axiosInstance.get(url);
  return {
    props: { data: res.data.data },
    revalidate: 10,
  };
}

export default Ross308;

import Products from "../../components/product/products";
import { axiosInstance } from "../../helpers/axiosInstance";

const Hubbards = ({ data }) => {
  return (
    <div>
      <Products
        leftSideBgColor="#FFEDDA"
        rightSideBgColor="#FFB830"
        // Chart Data Start
            chartColor={["#1fd134", "#1aee33", "#1E5128", "#232f3e", "#167b22"]}
            chartCategories={[1395, 1396, 1397, 1398, 1399, 1400 ]}
            chartData={[
                {
                    name: "کاب 500",
                    data: [1.43, 1.46, 1.53, 1.64, 1.75],
                  },
                  {
                    name: "راس ۳۰۸",
                    data: [1.63, 1.76, 1.83, 1.94, 2.1],
                  },
                  {
                    name: "آربوراکرز",
                    data: [1.6, 1.65, 1.73, 1.64, 1.65],
                  },
                  {
                    name: "آرین",
                    data: [1., 1.26, 1.03, 1.04, 1.36],
                  },
                  {
                    name: "هوبارد",
                    data: [1.53, 1.6, 1.53, 1.64, 1.75],
                  },
                ]}
        chartWidth="100%"
        chartHeight="300px"
        aboutrace="یکی از سویه های تولید شده توسط شرکت آویاژن انگلیس است که به نوعی برادر سویه راس هم لقب گرفته است. تشابه های بالایی بین سویه های آربروکرز و راس وجود دارد که مهمترین آن عبارت است از وزنگیری بالا و ضریب تبدیل پایین. از جهت مقاومت بیماریها نیز این سویه رتبه بالایی کسب می نماید."
    // Chart Data End
        img1Slider="/images/babychiken.jpg" 
        img2Slider="/images/isvacine04.jpg" 
        img3Slider="/images/0125q.jpg"  
        title1Banner="جوجه گوشتی هوبارد  "
        img2Banner="/images/vacine24.png"
        title2Banner="واکسن های مرتبط"
        subtitle2Banner="جدول واکسن"
        title3Banner="مکمل و ویتامین ها"
        img3Banner='/images/b3.png'
        subtitle3Banner="10% تخفیف کیف پول"
        title4Banner="دان آماده و پلت"
        img4Banner='/images/concentrat03.png'
        subtitle4Banner="با آنالیز تخصصی"
        title5Banner="آنتی بیوتیک "
        img5Banner='/images/qqqqq.png'
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
  const url = encodeURI("products?category=هوبارد");
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

export default Hubbards;

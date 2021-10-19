import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./Services2Elements";
import Link from "next/link";
import useInView from "react-cool-inview";
const Services2 = () => {
  const services = [
    {
      link: "/pharmacy",
      image: "images/vacine100.jpg",
      title: "محصولات دارویی و واکسن",
      descreption:
        "شامل واکسن , آنتی بیوتیک , ویتامین , ضدعفونی کننده و سایر محصولات درمانی است",
    },
    {
      link: "/store",
      image: "images/chick101.jpg",
      title: "کنسانتره و مکمل",
      descreption:
        "شامل کنسانتره های گوشتی و مکمل های تقویتی و سایر افزودن های پرورشی است",
    },
    {
      link: "/chick",
      image: "images/chick103.jpg",
      title: "جوجه های گوشتی",
      descreption:
        "در نژاد های مختلف از قبیل راس308 , هوبارد , آربوراکرز , کاب 500 وآرین با برگه آنالیز گله مادر",
    },
    {
      link: "/store",
      image: "images/tools1002.jpg",
      title: "تجهیزات پرورشی",
      descreption:
        "ارائه تمام تجهیزات پرورشی با تضیمین قیمت و کیفیت با پشتیبانی وتنا   ",
    },
    {
      link: "/store/concentrate",
      image: "images/pellet100.jpg",
      title: "پلت و دان آماده",
      descreption:
        "انواع دان آماده از برندهای معتبر , بدون واسطه و مستقیم از کارخانه",
    },
    {
      link: "/automation",
      image: "images/iott.jpg",
      title: "تجهیزات مدیریت تحت وب",
      descreption:
        "این بخش شامل سرورها, سنسورها و تجهیزات مدیریت آنلاین مزارع است ",
    },
  ];
  const { observe, inView } = useInView({
    threshold: 0.1,
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <ServicesContainer ref={observe} id="Services">
      <ServicesH1>مجموعه خدمات </ServicesH1>
      {inView && (
        <ServicesWrapper>
          {services.map((item, index) => (
            <ServicesCard key={index}>
              <Link href={`${item.link}`} passHref>
                <ServicesIcon src={item.image} />
              </Link>
              <Link href={`${item.link}`} passHref>
                <ServicesH2>{item.title}</ServicesH2>
              </Link>
              <Link href={`${item.link}`} passHref>
                <ServicesP>{item.descreption}</ServicesP>
              </Link>
            </ServicesCard>
          ))}
        </ServicesWrapper>
      )}
    </ServicesContainer>
  );
};

export default Services2;

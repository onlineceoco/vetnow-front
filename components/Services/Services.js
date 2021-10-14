import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Link from "next/link";
import useInView from "react-cool-inview";
const Services = () => {
  const services = [
    {
      link: "/store",
      image: "images/ship01.jpg",
      title: "خدمات تامینی",
      descreption:
        "فروش تمام محصولات مورد نیاز صنعت طیور بصورت کل و جز با تضمین قیمت و کیفیت",
    },
    {
      link: "/advisor",
      image: "images/onlinedr.jpg",
      title: "خدمات درمانی",
      descreption:
        "امکان دسترسی به دامپزشک و مشاور پرورشی در کمتر از یک دقیقه با امکان ارسال شرایط گله",
    },
    {
      link: "/chick",
      image: "images/analyz.jpg",
      title: "آنالیز گله های مادر",
      descreption:
        "امکان آنالیز و خرید مستقیم جوجه گوشتی از بهترین مزارع مادر ایران ",
    },
    {
      link: "/adviser",
      image: "images/poultry01.jpg",
      title: "کار آفرینی و طرح های توجیهی",
      descreption: " مشاوره تخصصی , آموزش , راه اندازی فارم های صنعتی  ",
    },
    {
      link: "/automation",
      image: "images/iot01.jpg",
      title: "اتوماسیون های تحت وب",
      descreption:
        "کنترل و مدیریت فارم ها و مزارع پرورشی بصورت دقیق و کاربردی از سراسر دنیا ",
    },
    {
      link: "/automation",
      image: "images/robot01.jpg",
      title: "هوشمندسازی های رباتیک",
      descreption:
        "ربات های خودران چند منظوره برای انجام امور روتین و گزارش گیری ",
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

export default Services;

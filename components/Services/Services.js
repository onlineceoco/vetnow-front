import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  const services = [
    {
      image: "images/ship.png",
      title: "خدمات تامینی",
      descreption:
        "فروش تمام محصولات مورد نیاز صنعت طیور بصورت کل و جز با تضمین قیمت و کیفیت",
    },
    {
      image: "images/med10.png",
      title: "خدمات درمانی",
      descreption:
        "امکان دسترسی به دامپزشک و مشاور پرورشی در کمتر از یک دقیقه با امکان ارسال شرایط گله",
    },
    {
      image: "images/a3.png",
      title: "آنالیز گله های مادر",
      descreption:
        "امکان آنالیز و خرید مستقیم جوجه گوشتی از بهترین مزارع مادر ایران ",
    },
    {
      image: "images/aviser.png",
      title: "مشاوره و دامپزشک آنلاین",
      descreption:
        "امکان دسترسی مستقیم به کارخانجات تولید کننده دان و کنسانتره و تچهیزات پرورشی",
    },
    {
      image: "images/auto.png",
      title: "اتوماسیون های تحت وب",
      descreption:
        "امکان دسترسی مستقیم به کارخانجات تولید کننده دان و کنسانتره و تچهیزات پرورشی ",
    },
    {
      image: "images/constraction.png",
      title: "خدمات تاسیساتی",
      descreption:
        "امکان دسترسی مستقیم به کارخانجات تولید کننده دان و کنسانتره و تچهیزات پرورشی ",
    },
  ];
  return (
    <ServicesContainer id="Services">
      <ServicesH1>مجموعه خدمات </ServicesH1>
      <ServicesWrapper>
        {services.map((item, index) => (
          <ServicesCard key={index}>
            <ServicesIcon src={item.image} />
            <ServicesH2>{item.title}</ServicesH2>
            <ServicesP>{item.descreption}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

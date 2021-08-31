import {ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './Services2Elements';


const Services2 = () => {
    return (
        <ServicesContainer >
            <ServicesH1>مجموعه محصولات</ServicesH1>
            <ServicesWrapper>
               
                <ServicesCard>
                    <ServicesIcon src='images/vacine100.jpg' />
                        <ServicesH2>محصولات دارویی و واکسن</ServicesH2>
                        <ServicesP>شامل واکسن , آنتی بیوتیک , ویتامین , ضدعفونی کننده و سایر محصولات درمانی است </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src='images/chick101.jpg' />
                        <ServicesH2> کنسانتره و مکمل </ServicesH2>
                        <ServicesP>شامل کنسانتره های گوشتی و مکمل های  تقویتی و سایر افزودن های پرورشی است </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src='images/chick103.jpg' />
                        <ServicesH2>جوجه های گوشتی</ServicesH2>
                        <ServicesP>در نژاد های مختلف از قبیل راس308 , هوبارد , آربوراکرز , کاب 500 و آرین با برگه آنالیز گله مادر  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src='images/tools1002.jpg' />
                        <ServicesH2>تجهیزات پرورشی</ServicesH2>
                        <ServicesP>ارائه تمام تجهیزات پرورشی با تضیمین قیمت و کیفیت با پشتیبانی وتنا </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src='images/pellet100.jpg' />
                        <ServicesH2>پلت و دان آماده</ServicesH2>
                        <ServicesP>انواع دان آماده از برندهای معتبر , بدون واسطه و مستقیم از کارخانه </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src='images/iott.jpg' />
                        <ServicesH2>تجهیزات مدیریت تحت وب</ServicesH2>
                        <ServicesP>این بخش شامل سرورها, سنسورها و تجهیزات مدیریت آنلاین مزارع است </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services2;
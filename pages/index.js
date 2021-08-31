import Drawer from '../components/Drawer/Drawer'
import Navbar from '../components/Navbar/Navbar'
import {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from './../components/InfoSection/InfoSection';
import { homeObjectFour, homeObjectOne, homeObjectThree, homeObjectTwo, homeObjectFive } from '../components/InfoSection/Data';
import Services from '../components/Services/Services';
import Services2 from '../components/Services2/Service2';
import Footer from '../components/Footer/Footer';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen( !isOpen);
    };

  return (
    <div>
      <Drawer/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjectOne} />
            <InfoSection {...homeObjectTwo} />
            <Services/>
            <InfoSection {...homeObjectThree} />
            <Services2/>
            <InfoSection {...homeObjectFour} />
            <InfoSection {...homeObjectFive} />
            <Footer/>
    </div>
  )
}

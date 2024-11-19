import Carousel from "./components/Carousel"
import Countupp from "./components/Countupp";
import Navbra from "./components/Navbra"
import OfficeInterior from "./components/OfficeInterior";
import Section from "./components/Section";
import SectionTwo from "./components/SectionTwo";
import Swiper from "./components/Swiper";
import './sass/style.scss';
import 'aos/dist/aos.css';


function App() {

  return (
    <>
      <Navbra />
      <Carousel />
      <Section />
      <SectionTwo />
      <Countupp />
      <OfficeInterior />
      {/* <Swiper /> */}
    </>
  )
}

export default App

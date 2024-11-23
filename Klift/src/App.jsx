import Carousel from "./components/Carousel"
import Countupp from "./components/Countupp";
import Footer from "./components/Footer";
import Navbra from "./components/Navbra"
import OfficeInterior from "./components/OfficeInterior";
import Section from "./components/Section";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Swiper from "./components/Swiper";
import About from "./pages/About";
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
      <Swiper />
      <About/>
      <SectionThree/>
      <Footer/>
    </>
  )
}

export default App

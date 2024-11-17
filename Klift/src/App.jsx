import Carousel from "./components/Carousel"
import Countupp from "./components/Countupp";
import Navbra from "./components/Navbra"
import Section from "./components/Section";
import SectionTwo from "./components/SectionTwo";
import './sass/style.scss';
import 'aos/dist/aos.css';


function App() {

  return (
    <>
      <Navbra/>
      <Carousel/>
      <Section/>
      <SectionTwo/>
      <Countupp/>
    </>
  )
}

export default App

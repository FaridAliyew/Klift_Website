import { Route, Routes } from "react-router-dom";
import Carousel from "./components/Carousel";
import Countupp from "./components/Countupp";
import Footer from "./components/Footer";
import Navbra from "./components/Navbra";
import OfficeInterior from "./components/OfficeInterior";
import Section from "./components/Section";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Swiper from "./components/Swiper";
import About from "./pages/About";
import './sass/style.scss';
import Entrance from "./pages/Entrance";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import AOS from 'aos';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Navbra />

      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Section />
            <SectionTwo />
            <Countupp />
            <OfficeInterior />
            <Swiper />
            <About />
            <SectionThree />
          </>
        } />

        <Route path="/about" element={
          <>
            <Entrance />
            <SectionTwo />
            <Countupp />
            <Swiper />
            <About />
          </>
        } />

        <Route path="/projects" element={
          <>
            <Entrance />
            <Projects />
          </>
        } />

        <Route path="/services" element={
          <>
            <Entrance />
            <Services />
          </>
        } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

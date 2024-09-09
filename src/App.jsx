import './App.css'
import About from './components/About';
import Appointment from './components/Appointment';
import MainCarousel from './components/Carousel';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import CTA from './components/CTA';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Gallery from './components/Gallery';
import HomeServices from './components/HomeServices';
import NavbarContainer from './components/Navbar';
import Pricing from './components/Pricing';
import ScrollTop from './components/ScrollTop';
import Services from './components/Services';
import Stats from './components/Stats';
import TopSection from './components/TopSection';

function App() {
  return (
  <div>
    <TopSection/>
    <NavbarContainer/>  
    <MainCarousel/>
    <HomeServices/>
    <CTA/>
    <About/>
    <Stats/>
    <Features/>
    <Services/>
    <Appointment/>
    <Departments/>
    <Doctors/>
    <Gallery/>
    <Pricing/> 
    <FAQ/>
    <Contact/>
    <Copyright/>
    <ScrollTop/>
  </div> 
  
  );
}

export default App

import AboutUs from './components/aboutus';
import Footer from './components/footer';
import Gallery from './components/gallery';
import Hero from './components/hero';
import NavBar from './components/navbar';
import Service from './components/service';
import Sponsers from './components/sponsers';

function App() {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <NavBar handleScrollToSection={handleScrollToSection} />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <div id="services">
        <Service />
      </div>

      <div id="gallery">
        <Gallery />
      </div>


      <div id="sponsors">
        <Sponsers />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;

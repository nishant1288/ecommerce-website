import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Deals from "./components/Deals";
import EventBox from "./components/EventBox";
import Navbar from "./components/Navbar";
import SpecialProducts from "./components/SpecialProducts";
import Shop from "./components/Shop";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <EventBox />
      <SpecialProducts />
      <Deals />
      <Banner />
      <Shop />
      <Review />
      <Footer />
    </div>
  );
}

export default App;

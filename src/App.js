//importin components
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Promo from "./components/Promo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Nav />
      <Heading />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Promo />
      <Footer />
    </div>
  );
}

import "./index.css";
import { Navbar, Footer, BackToTop } from "./components";
import { Hero, About, Menu, Review } from "./sections";

export default function App() {
  return (
    <div>
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Review />
      <Footer />
    </div>
  );
}

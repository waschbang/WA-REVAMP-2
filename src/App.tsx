import HeroSec from "./sections/HeroSec";
import HowItWorks from "./sections/HowItWorks";
import MetaScroll from "./sections/MetaScroll";
import BoxScroll from "./sections/BoxScroll";
import Carousel from "./sections/Carousel";
import Carousel2 from "./sections/Carousel2";
import ProudOf from "./sections/ProudOf";
import Plans from "./sections/Plans";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import ProudOfScroll from "./sections/ProudOfScroll";
import ProudOfScrollbeta from "./sections/ProudOfScrollbeta";
import HowItWorksNew from "./sections/HowItWorksNew";


export default function App() {
  return (
    <>
      <Navbar />
      <HeroSec />
      <BoxScroll />
      <MetaScroll />
      {/* <ProudOf /> */}
      {/* <ProudOfScroll /> */}
      <ProudOfScrollbeta />
      <HowItWorksNew />
      {/* <HowItWorks /> */}
      <Carousel2 />
      <Plans />
      <FAQ />
      <Footer />
    </>
  );
}

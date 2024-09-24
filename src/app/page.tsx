import Footer from "@/components/Footer";
import AlternatingText from "./AlternatingText";
import BigText from "./BigText";
import Carousel from "./Carousel";
import Hero from "./Hero";
import SkyDive from "./SkyDriver";


export default function Home() {
  return (
    <main className="main-con">
      <Hero />
      <SkyDive />
      <Carousel />
      <AlternatingText />
      <BigText />
      <Footer />
    </main>
  );
}

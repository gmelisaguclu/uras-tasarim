import { ImageSlider } from "../../components/home/ImageSlider";
import { ServicesSection } from "../../components/home/ServicesSection";
import { AboutSection } from "../../components/home/AboutSection";
import { WhyChooseUs } from "../../components/home/WhyChooseUs";
import { Partners } from "../../components/home/Partners";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 sm:gap-20 py-4 sm:py-8">
      <ImageSlider />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <Partners />
    </div>
  );
};

export default HomePage;

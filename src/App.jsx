import Banner from "./sections/Banner";
import CreateStartups from "./sections/CreateStartups";
import Menu from "./sections/Menu";
import ListSection from "./sections/ListSection";
import { bannerSolvingProblems, coreValues, whoWeAre, bannerWorksSection, worksSection } from "./utils/constants";
import WorksSection from "./sections/WorksSection";
import HiringSection from "./sections/HiringSection";
import Footer from "./sections/Footer";
import ContactForm from "./sections/ContactForm";
import Assistant from "./components/Assistant";

function App() {
  return (
    <>
      <Menu />
      <CreateStartups />
      <ListSection data={whoWeAre}/>
      <Banner data={bannerSolvingProblems}/>
      <ListSection data={coreValues} />
      <WorksSection data={worksSection} banner={bannerWorksSection} />
      <HiringSection />
      <ContactForm />
      <Footer />
      <Assistant />
    </>
  );
}

export default App;

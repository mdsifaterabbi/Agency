import HeroSection from "../components/HeroComp";
import { Helmet } from "react-helmet-async";

import HeroComp from "../components/HeroComp";
import SubHeroComp from "../components/SubHeroComp";
import WorkComp from "../components/WorkComp";
import NavbarComp from "../components/NavbarComp";
import ExpertiseComp from "../components/ExpertiseComp";
import ContactComp from "../components/ContactComp";
import FooterComp from "../components/FooterComp";
import ClientComp from "../components/ClientComp";

const HomePage = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavbarComp />
      <HeroComp />
      <SubHeroComp />
      <ExpertiseComp />
      <WorkComp />
      <ClientComp />
      <ContactComp />
      <FooterComp />
    </div>
  );
};

export default HomePage;

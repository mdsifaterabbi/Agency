import { Helmet } from "react-helmet-async";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";

const AboutPage = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavbarComp />
      <h1 className="text-red-500 my-[50px]">This is about page</h1>
      <FooterComp />
    </div>
  );
};

export default AboutPage;

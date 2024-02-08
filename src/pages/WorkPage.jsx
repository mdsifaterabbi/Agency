import { Helmet } from "react-helmet-async";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";

const WorkPage = ({ title }) => {
  return (
    <div className="text-red-500 my-[50px]">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavbarComp />
      <h1>WorkPage</h1>
      <FooterComp />
    </div>
  );
};

export default WorkPage;

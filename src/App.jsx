import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ExpertisePage from "./pages/ExpertisePage";
import WorkPage from "./pages/WorkPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage title={"Home"} />} />
        <Route path="/home" element={<HomePage title={"Home"} />} />
        <Route path="/about" element={<AboutPage title={"About"} />} />
        <Route path="/blog" element={<BlogPage title={"Blog"} />} />
        <Route
          path="/expertise"
          element={<ExpertisePage title={"Expertise"} />}
        />
        <Route path="/work" element={<WorkPage title={"Work"} />} />
        <Route path="*" element={<NotFoundPage title={"Not Found"} />} />
      </Routes>
    </>
  );
}

export default App;

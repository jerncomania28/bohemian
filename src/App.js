import { Routes, Route } from "react-router-dom";

//components
import Home from "./Routes/Home";
import Navigation from "./components/Navigation";
import PageNotFound from "./Routes/PageNotFound";
import AboutUs from "./Routes/AboutUs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

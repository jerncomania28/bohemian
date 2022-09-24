import { Routes, Route } from "react-router-dom";

//components
import Home from "./Routes/Home";
import Navigation from "./components/Navigation";
import PageNotFound from "./Routes/PageNotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

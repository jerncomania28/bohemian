import { Routes, Route } from "react-router-dom";

//components
import Home from "./Routes/Home";
import Navigation from "./components/Navigation";
import PageNotFound from "./Routes/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;

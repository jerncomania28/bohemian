import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./states/slices/CoreSlice";
//components
import Home from "./Routes/Home";
import Navigation from "./components/Navigation";
import PageNotFound from "./Routes/PageNotFound";
import AboutUs from "./Routes/AboutUs";
import LogIn from "./Routes/Login";
import CreateAccount from "./Routes/CreateAccount";
import ForgotPassword from "./Routes/ForgotPassword";
import Orders from "./Routes/Orders";
import Carts from "./Routes/Carts";
import Products from "./Routes/Products";
import ProductDescription from "./Routes/ProductDescription";

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="login" element={<LogIn />} />
          <Route path="create-account" element={<CreateAccount />} />
          {isLoggedIn && <Route path="orders" element={<Orders />} />}
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="carts" element={<Carts />} />
          <Route path="whats-new">
            <Route index element={<Products />} />
            <Route path="*" element={<Products />} />
          </Route>
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDescription />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

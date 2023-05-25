import "./App.css";
import { ProductsProvider } from "./Contexts/ProductsContext";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/UI/NavBar/Nav";
import MainPage from "./components/Pages/MainPage/MainPage";
import Cart from "./components/Pages/Cart/Cart";
import Generator from "./components/Pages/Generator/Generator";
import Info from "./components/Pages/Info/Info";
import NotFound from "./components/Pages/NotFound/NotFound";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <>
      <Nav />
        <ProductsProvider>
            <Routes>
              <Route exact path="/" element={<MainPage />} ></Route>
              <Route path="/generator" element={<Generator />} ></Route>
              <Route path="/cart" element={<Cart />} ></Route>
              <Route path="/info" element={<Info />} ></Route>
              <Route path="/products" element={<ProductPage />} ></Route>
              <Route path="*" element={<NotFound />} ></Route>
            </Routes>
        </ProductsProvider>
      <Footer />
    </>
  );
}

export default App;

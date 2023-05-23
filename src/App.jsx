import "./App.css";
import Footer from "./components/UI/Footer";
import Nav from "./components/UI/NavBar/Nav";
import MainPage from "./components/Pages/MainPage/MainPage";
import Cart from "./components/Pages/Cart/Cart";

function App() {
  return (
    <>
      <Nav />
      <Cart />
      <Footer />
    </>
  );
}

export default App;

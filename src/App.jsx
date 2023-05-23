import "./App.css";
import Footer from "./components/UI/Footer";
import Nav from "./components/UI/NavBar/Nav";
import MainPage from "./components/Pages/MainPage/MainPage";
import Cart from "./components/Pages/Cart/Cart";
import Generator from "./components/Pages/Generator/Generator";

function App() {
  return (
    <>
      <Nav />
      <Generator />
      <Footer />
    </>
  );
}

export default App;

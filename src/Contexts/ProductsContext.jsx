import { createContext, useState } from "react";
import bussinessCardsData from "../assets/Data/bussinesCards.json";
import ocasionalCardsData from "../assets/Data/ocasionalCards.json";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [bussinesCards, setBussinesCards] = useState(bussinessCardsData);
  const [occasionalCards, setOcasionalCards] = useState(ocasionalCardsData);
  const products = {
    bussinesCards,
    occasionalCards
  }

  const contextValues = {
    bussinesCards,
    occasionalCards,
    products
  };

  return (
  <ProductsContext.Provider value={contextValues}>
    {children}
  </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };

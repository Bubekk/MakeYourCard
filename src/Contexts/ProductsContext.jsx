import { createContext, useState } from "react";
import ocasionalCardsData from "../assets/Data/ocasionalCards.json";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [occasionalCards, setOcasionalCards] = useState(ocasionalCardsData);
  const products = {
    occasionalCards
  }

  const contextValues = {
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

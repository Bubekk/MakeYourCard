import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

  //variable for firebase url
  const dbUrl = "https://makeyourcard-65636-default-rtdb.firebaseio.com/";
  const [data, setData] = useState(null);
  const [occasionalCards, setOccasionalCards] = useState([]);

  //function for fetching data from firebase
  const getProducts = async () => {
    try {
      await axios.get(`${dbUrl}products.json`).then((response) => {
        const fetchedData = response.data;
        setData(fetchedData);
      });
    } catch (error) {
      console.error("There is problem with product fetching", error);
    }
  };

  //fetching data from firebase
  useEffect(() => {
    getProducts();
  }, []);

  //setting products category with fetched data
  useEffect(() => {
    if (data) {
      setOccasionalCards(data.occasional);
    }
  }, [data])

  const products = {
    occasionalCards,
  };

  const contextValues = {
    occasionalCards,
    products,
  };

  return <ProductsContext.Provider value={contextValues}>{children}</ProductsContext.Provider>;
};

export { ProductsContext, ProductsProvider };

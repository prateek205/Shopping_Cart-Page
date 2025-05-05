import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://mock-api-rreb.onrender.com/appliances")
      .then((res) => setProduct(res.data))
      //   .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

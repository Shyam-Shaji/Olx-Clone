import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../Firebase/Firebase";

const Context = createContext(null);

export const ItemsContext = () => useContext(Context);

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItemsFromFirestore = async () => {
      try {
        const productCollection = collection(fireStore, "Products"); //products
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(productList);
      } catch (error) {
        console.error("Error fetching product items:", error);
      }
    };

    fetchItemsFromFirestore();
  }, []);

  return (
    <Context.Provider value={{ items, setItems }}>{children}</Context.Provider>
  );
};

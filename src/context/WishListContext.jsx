import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedWishList = localStorage.getItem('wishList')
    if(storedWishList){
      setWishList(JSON.parse(storedWishList))
    } else{
      setWishList([])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList))
  }, [wishList])


  const AddWishList = (item) => {
    const existItem = wishList.find((items) => items.id === item.id);

    if (existItem) {
        toast.warning("Item is Already in WishList")
    } else {
        toast.success("Add to WishList")
        setWishList([...wishList, { ...item, quantity: 1 }]);
    }
};

const removeItem = (id) => {
    toast.success("Item is removed")
    return setWishList(wishList.filter((i) => i.id !== id));
  }
  return (
    <WishListContext.Provider value={{ wishList, AddWishList, removeItem }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);

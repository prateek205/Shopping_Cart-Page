import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } else {
        setCart([]);
      }
    } catch (error) {
      console.log(error);
      setCart([])
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const AddToCart = (item) => {
    const existItem = cart.find((items) => items.id === item.id);

    if (existItem) {
      toast.warning("Item is Already in Cart");
      setCart(
        cart.map((product) => {
          return item.id === product.id
            ? { ...product, quantity: product.quantity + 1 }
            : item;
        })
      );
    } else {
      toast.success("Item added to Cart");
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const incrementQty = (id) => {
    setCart(
      cart.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      })
    );
  };

  const decrementQty = (id) => {
    setCart(
      cart
        .map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    toast.success("Item is Removed");
    setCart(cart.filter((prod) => prod.id !== id));
  };

  // Cart Summary Section

  const mainPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discountPrice = cart.reduce((total, item) => {
    const itemDiscount = (item.price * item.discount || 0) / 100;
    return Math.round(total + itemDiscount * item.quantity);
  }, 0);

  const totalDiscount = cart.length
    ? Math.round((discountPrice / mainPrice) * 100)
    : 0;

  const subTotalPrice = Math.round(mainPrice - discountPrice);

  const shippingPrice = subTotalPrice > 2000 ? 0 : 150;

  const finalAmount = subTotalPrice + shippingPrice;

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        AddToCart,
        incrementQty,
        decrementQty,
        removeItem,
        mainPrice,
        discountPrice,
        totalDiscount,
        subTotalPrice,
        shippingPrice,
        finalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

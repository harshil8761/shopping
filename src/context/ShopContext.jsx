import { createContext, useEffect, useMemo, useState } from "react";
import { all_product } from "../assets/product.js";
import toast from 'react-hot-toast'


// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  let LocalStorage = JSON.parse(localStorage.getItem("products")) || [];

  const [searchPro,setSreachPro] = useState("");

  const addToCart = (id) => {
    //check kare che product pehlethi to nathi ne
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      toast.error("Item already in cart!"); 
      return 
    }

    //jo match thai to local ma add
    const matched = all_product.find((item) => item.id === id);
    if (!matched) return;
    const updateCart = [...cart, matched];
    setCart(updateCart);
    toast.success(`Item added from cart! 🗑️ ${id}`);
  };



  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (id) => {
    const remove = cart.filter(item => item.id !== id);
    localStorage.setItem("products", JSON.stringify(remove));
    setCart(remove);
    toast.error("Item removed from cart! 🗑️");
  }

  const handleSearch = (e) => {
    setSreachPro(e.target.value);
  }

  const searchProduct = all_product.filter(item => {
    if (!searchPro) {
      return true;
    }
    return item.name.toLocaleLowerCase().includes(searchPro.toLocaleLowerCase());  
  });

  const clearCart = () => {
    setCart([]); 
    localStorage.clear("products");
  }

 const handleCheckout = () => {
    clearCart()
    toast.success("Thank you for shopping! 🛍️");
 }
  

  const SubTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  },[cart])

  const shop = { all_product, addToCart, cart , SubTotal, removeItem, handleSearch, searchProduct, handleCheckout };

  return <ShopContext.Provider value={shop}>{children}</ShopContext.Provider>;
};

export default ShopProvider;

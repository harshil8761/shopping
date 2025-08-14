import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
    const {cart,handleSearch} = useContext(ShopContext)
  return (
    <>
      <div className="navbar">
        <Link to='/'  style={{textDecoration:"none",color:"white"}} ><div className="logo">🛍 Shopping Cart</div></Link>
        <div className="search-bar">
          <input type="text" onChange={handleSearch} placeholder="Search products..." />
        </div>
        <div className="cart"> <Link  to='/cart' style={{textDecoration:"none",color:"white"}} >🛒 Cart</Link>({cart.length})</div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { cart, handleSearch } = useContext(ShopContext);
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="logo">🛍 Shopping Cart</div>
      </Link>
      <div className="nav2">
        <div className={`search-bar ${isOpen ? "active" : ""}`}>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search products..."
          />
        </div>
        <div className="cart">
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            🛒 Cart({cart.length})
          </Link>
        </div>
          <i className="fa-solid fa-bars iconBar" onClick={() => setIsOpen(!isOpen)} ></i>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";

// const Navbar = () => {
//     const {cart,handleSearch} = useContext(ShopContext)
//     const [isOpen,setIsOpen] = useState(false);
//   return (
//     <>
//       <div className={`navbar ${isOpen ? "active" : ""}`}>
//         <Link to='/'  style={{textDecoration:"none",color:"white"}} ><div className="logo">🛍 Shopping Cart</div></Link>
//         <div className="search-bar">
//           <input type="text" onChange={handleSearch} placeholder="Search products..." />
//         </div>
//         <div className="cart"> <Link  to='/cart' style={{textDecoration:"none",color:"white"}} >🛒 Cart</Link>({cart.length})         <i className="fa-solid fa-bars  iconbar" onClick={() => setIsOpen(!isOpen)}  ></i>
// </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

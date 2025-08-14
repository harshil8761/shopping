import React, { useContext } from "react";
import "./Shop.css";
import { ShopContext } from "./context/ShopContext";

const Cart = () => {

  const {cart, SubTotal, removeItem,handleCheckout} = useContext(ShopContext)

  console.log(cart);
  
  return (
    <>
      <section className="cart-container">
        <h1>Your Cart</h1>

        {cart.length > 0 ? ( cart.map((item,index) => {
          return (
            <div className="cart-item" key={index} >
              <img src={item.image} alt="Product" />
              <div className="item-details">
                <h2> {item.name} </h2>
                <p>Price: ₹{item.price}</p>
              </div>
              <button className="add-btn"  onClick={() => removeItem(item.id)} >Remove</button>
            </div>
          );
        })) : (
          <h1 style={{textAlign:"center",padding:"2rem 0"}} >Tamaru Cart khali che</h1>
        ) }

        <div className="cart-summary">
          <h2>Total: ₹{SubTotal}</h2>
          <button className="checkout-btn eror" disabled={cart.length === 0} onClick={handleCheckout} >Proceed to Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;

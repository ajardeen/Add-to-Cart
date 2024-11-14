import React from "react";
import CartModel from "./CartModel";
function NavBar({ cartProduct, setCartProduct }) {
  return (
    <nav className="flex justify-between md:justify-around items-center p-4 bg-blue-500 text-white rounded-xl text-sm md:text-lg">
      <div><a href="#">E-Commerces</a></div>
      <div className="hidden md:block">
        <ul className="flex gap-4">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">Products</li>
          <li className="hover:underline">About</li>
          <li className="hover:underline">Contact</li>
        </ul>
      </div>
      <div>
        <CartModel cartProduct={cartProduct} setCartProduct={setCartProduct} />
      </div>
    </nav>
  );
}

export default NavBar;

import React, { useState } from "react";
import "./OverlayComponent.css";

import { Icon } from "@iconify/react";
import "./style.css";
import Cart from "../nav_component/cart_component/CartDropdown";
import { useNavigate } from "react-router-dom";

function Product_Cards(props) {
  const { carddata } = props;
  const Click = localStorage.getItem("TotalClick");
  const [clickCount, setClickCount] = useState(JSON.parse(Click) || 0); // Initialize click count state
  const [pid, Setpid] = useState({
    data: "",
    id: "",
  });
  const navigate = useNavigate();
  const [pid2, Setpid2] = useState("");

  const handleAddToCart = (product) => {
    // Increment the click count
    setClickCount(clickCount + 1);

    // Check if cart data already exists in localStorage
    const existingCartData = localStorage.getItem("cartData10");
    let cartData = [];

    if (existingCartData) {
      cartData = JSON.parse(existingCartData);
    }

    // Find the index of the product in cartData array
    const productIndex = cartData.findIndex((item) => item.id === product._id);

    if (productIndex !== -1) {
      // If product exists in cart, update its quantity
      cartData[productIndex].quantity += 1;
      cartData[productIndex].price + product.productprice;
    } else {
      // If product doesn't exist, add it to cartData array
      cartData.push({
        id: product._id,
        name: product.productname,
        price: product.productprice,
        productimg: product.mainimage,
        quantity: 1,
      });
    }

    // Save updated cart data to localStorage
    localStorage.setItem("cartData10", JSON.stringify(cartData));
    localStorage.setItem("TotalClick", JSON.stringify(clickCount));

    alert("Added to cart");
  };

  return (
    <div className="lg:col-span-3 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {carddata.map((elm, ind) => {
        return (
          <div
            key={elm._id}
            className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0px_0px_25px_02px_#2222] dark:shadow-[0px_0px_12px_0px_#f6f6f6]"
          >
            <div className="image-container">
              <a
                className=" bg-black flex h-full overflow-hidden rounded-t-lg"
                href="#"
              >
                <img
                  className="object-cover w-full transition-transform transform hover:scale-110"
                  src={elm.mainimage.url}
                  alt="product image"
                  style={{ height: "300px" }}
                  onClick={() => navigate(`/productd/${elm._id}`)}
                />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-[#3e6553] px-2 text-center text-sm font-medium text-white">
                  {elm.productdiscount} OFF
                </span>
               
              </a>
            </div>
            <div className="mt-3 px-3 pb-5">
              <a href="#">
                <h5 className="sm:text-[18px] text-[20px] tracking-tight font-bold text-slate-900">
                  {elm.productname}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-xl font-bold text-slate-900 font-mono pe-2">
                    Rs<span className="pl-1">{elm.productprice}</span>
                  </span>
                  <span className="text-sm text-slate-900 font-medium line-through">
                    Rs 6,500
                  </span>
                </p>
              </div>
              <a
                onClick={() => handleAddToCart(elm)}
                style={{ cursor: "pointer" }}
                className="flex items-center justify-center rounded-md bg-[#3e6553] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#2c5240] transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <Icon icon="mdi:cart-outline" style={{ fontSize: "22px" }} />
                Add to cart
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product_Cards;

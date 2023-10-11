import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { InfoToast } from "../../GlobalTostify";
import axios from "axios";
import cookie from "cookie_js";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Mainpage_Routes/Test/Testpage";

// import cartIcon from '@iconify/icons-uil/cart';

const mainColor = "#3e6553";
const lightText = "#ABB0BE";

const Badge = styled.span`
  background-color: ${mainColor};
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 16px;
  line-height: 1.6;
  width: 25px;
  height: 25px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;

const ShoppingCart = styled.div`
  margin: 20px 0;

  position: absolute;
  right: 0;
  top: 20px;
  max-width: 240px;
  border-radius: 13px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: opacity 250ms ease;
`;

const ShoppingCartHeader = styled.div`
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .shopping-cart-total {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const ShoppingCartItems = styled.ul`
  padding-top: 20px;
  list-style: none;
  li {
    margin-bottom: 18px;
    clear: both;
    cursor: pointer;
  }
`;

const ItemImage = styled.img`
  float: left;
  margin-right: 12px;
  width: 50px;
  height: 50px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-size: 16px;
  margin-top: 5px;
`;

const ItemPrice = styled.span`
  color: ${mainColor};
  margin-top: 5px;
`;

const ItemQuantity = styled.span`
  color: ${lightText};
`;

const Button = styled.a`
  background: ${mainColor};
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;

  &:hover {
    background: ${mainColor};
  }
`;

const BagIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Clearfix = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const MainColorText = styled.div`
  font-weight: 600;
  padding-left: 6px;
`;
const ShoppingCartTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Cart = ({ theme }) => {
  const [order, Setorder] = useState([]);
  const [pdata, Setpdata] = useState([]);
  const [cartdata, Setcartdata] = useState([]);
  const [hide, Sethide] = useState(false);
  //-------------------------
  let Alltotal = 0;
  //-------------------------
  const data = localStorage.getItem("Cart");
  const userid = cookie.get("Userid");
  const Carddata = JSON.parse(data);
  const navigate = useNavigate();
  // -------------------------
  const CheckOrder = async () => {
    const Ordernum = await axios.get(
      "https://cyan-light-chameleon.cyclic.cloud/api/allorders"
    );
    if (Ordernum.data.success === true && Ordernum.data.status === 201) {
      Setorder(Ordernum.data.orders);
    }
  };
  // -------------------------
  const Getcartdata = async () => {
    const Cardata = await axios.post("https://cyan-light-chameleon.cyclic.cloud/api/getcart", { userid: userid });
    Carddata ? Setcartdata(Cardata.data.Getdata.cartdata) : "";
  };
  //--------------------------
  const WishlistItems = async () => {
    try {
      const userid = cookie.get("Userid");
      const products = await axios.post("https://cyan-light-chameleon.cyclic.cloud/api/getwishdata", { userid });
      if (products.data) {
        Setpdata(products.data.getWishlistdata.whishproducts);
      } else {
        console.log("Data Not Found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //----------------------------
  const Checkuser = async () => {
    const token = cookie.get("Usertoken");
    token ? Sethide(false) : Sethide(true);
  };
  //-----------------------------

  const Checkcart = () => {
    if (cartdata) {
      navigate("/checkout");
    } else {
      InfoToast("Add Product First");
    }
  };

  //-------------------------------
  useEffect(() => {
    Getcartdata();
    Checkuser();
    CheckOrder();
    WishlistItems();
  }, []);
  return (
    <ShoppingCart
      style={{ backgroundColor: theme === "dark" ? "#2f3733" : "white" }}
    >
      <ShoppingCartHeader
        style={{ color: theme === "dark" ? "white" : "black" }}
      >
        <ShoppingCartTotal style={{ cursor: "pointer" }}>
          <span
            className="lighter-text"
            style={{ fontWeight: "bold", width: "80px" }}
          >
            Total:
          </span>
          <MainColorText style={{ display: "flex" }}>
            <p style={{ marginLeft: "30px" }}>
              {hide === false ? (Alltotal ? Alltotal : 0) : 0}Rs
            </p>
          </MainColorText>
        </ShoppingCartTotal>
      </ShoppingCartHeader>
      <ShoppingCartItems
        style={{ color: theme === "dark" ? "white" : "black" }}
      >
        <li>
          <Clearfix>
            <ShoppingCartTotal onClick={Checkcart}>
              <MainColorText style={{ display: "flex" }}>
                <Icon
                  icon="ion:cart-outline"
                  style={{ paddingRight: "5px" }}
                  height={25}
                />{" "}
                Cart
              </MainColorText>
              <Badge className="badge">
                {hide === false ? (cartdata ? cartdata.length : 0) : 0}
              </Badge>
            </ShoppingCartTotal>
          </Clearfix>
        </li>
        <li>
          <Clearfix>
            <ShoppingCartTotal onClick={() => navigate("/wishlistpage")}>
              <MainColorText style={{ display: "flex" }}>
                {" "}
                <Icon
                  icon="ph:heart"
                  style={{ paddingRight: "5px" }}
                  height={25}
                />{" "}
                Wishlist
              </MainColorText>
              <Badge style={{ marginLeft: "20px" }} className="badge">
                {hide === false ? pdata.length : 0}
              </Badge>
            </ShoppingCartTotal>
          </Clearfix>
        </li>
        <li>
          <Clearfix>
            <ShoppingCartTotal onClick={() => navigate("/orderhistory")}>
              <MainColorText style={{ display: "flex" }}>
                <Icon
                  icon="fluent-mdl2:product"
                  style={{ paddingRight: "5px" }}
                  height={25}
                />{" "}
                Orders
              </MainColorText>
              <Badge className="badge">
                {hide === false ? order.length : 0}
              </Badge>
            </ShoppingCartTotal>
          </Clearfix>
        </li>
      </ShoppingCartItems>
    </ShoppingCart>
  );
};

export default Cart;

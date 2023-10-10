import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Mainpage_Routes/Home/Homepage";
import { BrowserRouter } from "react-router-dom";
import Signin from "../UserAuthentiaction/Signin/Signin";
import Signup from "../UserAuthentiaction/Signup/Signup";
import EmailVerify from "../UserAuthentiaction/Emailverify/EmailVerify";
import ChangePassword from "../UserAuthentiaction/changePassword/ChangePassword";
import Product_Filter from "../Product/Product_Filter";
import Wishlist from "../nav_component/wishlist_component/Wishlist";
import Cart_Icon from "../nav_component/cart_component/Cart_Icon";
import About from "../Mainpage_Routes/About/AboutPage";
import PageQuestions from "../Mainpage_Routes/QA/PageQuestions";
import Masterpage from "./Masterpage";
import Orderdetail from "../Mainpage_Routes/Order/Orderdetail";
import Product_details from "../Product/product_details/Product_details";
import Product_page from "../Product/Product_page/Product_page";
import Shopping_Cart from "../Product/Shopping_Cart";
import Checkout from "../Product/Checkout";
import Plants from "../Mainpage_Routes/Plants/plants";
import Ass from "../Mainpage_Routes/Accessories/Ass";
import ContactPage from "../Mainpage_Routes/Contact/ContactPage";
import RentalCategories from "../Mainpage_Routes/Rent/RentalCategories";
import ProductTest from "../Mainpage_Routes/Product/ProductTest";
import Profile from "../Profile";
import OrderHistory from "../Mainpage_Routes/Order/OrderHistory";
import Wishlistpage from "../Mainpage_Routes/Wishlist/wishlist";
import RentPage from "../Mainpage_Routes/Rent/Rentpage";
import RentCheckout from "../Mainpage_Routes/Rent/RentCheckout";

const Pagebound2 = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route element={<Masterpage />}>
          <Route path="/about" element={<About />} />
          <Route path="/qa" element={<PageQuestions />} />
          <Route path = "/contact" element = {<ContactPage/>} />
         </Route>
           {/* ------------ Products ----------------- */}
           <Route path="/product" element={<ProductTest/>} />

          {/* ----------- User Auth */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/emailverify" element={<EmailVerify />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          {/* ---------- Filter Products Component -----------  */}
          <Route path="/filter/:cname" element={<Product_Filter/>}/>
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/carticon" element={<Cart_Icon />} />
          <Route path="/wishlistpage" element = {<Wishlistpage/>}/>
          {/* -------------- Order ------------------ */}
          <Route path="/orderdetail" element = {<Orderdetail/>}/>
          <Route path="/productdetail/:Productid" element = {<Product_details/>}/>
          <Route path="/productpage" element = {<Product_page/>}/>
          <Route path="/shoppingcart" element = {<Shopping_Cart/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/ass" element={<Ass />} />
          <Route path="/orderhistory" element = {<OrderHistory/>}/>
          {/* -------------- Rental --------------- */}
          <Route path="/rent" element={<RentPage />} />
          <Route path="/rentcheckout" element = {<RentCheckout/>}/>
          {/* --------------- Profile ------------------ */}
          <Route path="/userprofile" element = {<Profile/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default Pagebound2;

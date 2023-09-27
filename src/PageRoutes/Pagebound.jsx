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
import ProductsPage from "../Mainpage_Routes/Product/ProductsPage";
import PageQuestions from "../Mainpage_Routes/QA/PageQuestions";
import Masterpage from "./Masterpage";
import Testpage from "../Mainpage_Routes/Test/Testpage";
import Orderdetail from "../nav_component/Order/Orderdetail";
import Product_details from "../Product/product_details/Product_details";
import Product_page from "../Product/Product_page/Product_page";
import Shopping_Cart from "../Product/Shopping_Cart";
import Checkout from "../Product/Checkout";
import Plants from "../Mainpage_Routes/Plants/plants";
import Ass from "../Mainpage_Routes/Accessories/Ass";
import ContactPage from "../Mainpage_Routes/Contact/ContactPage";

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
           <Route path="/product" element={<Product_page/>} />

          {/* ----------- User Auth */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/emailverify" element={<EmailVerify />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          {/* ---------- Filter Products Component -----------  */}
          <Route path="/filter/:cname" element={<Product_Filter/>}/>
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/carticon" element = {<Cart_Icon/>}/>
          {/* -------------- Order ------------------ */}
          <Route path="/orderdetail" element = {<Orderdetail/>}/>
          <Route path="/productd/:id" element = {<Product_details/>}/>
          <Route path="/productpage" element = {<Product_page/>}/>
          <Route path="/shoppingcart" element = {<Shopping_Cart/>}/>
          <Route path="/checkout/:price" element={<Checkout />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/ass" element = {<Ass/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default Pagebound2;

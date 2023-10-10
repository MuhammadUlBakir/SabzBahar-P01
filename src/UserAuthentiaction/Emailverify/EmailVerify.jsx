import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css";
import { useNavigate } from "react-router-dom";
import cookie from "cookie_js";
import { ErrorToast, SuccessToast, WarningToast } from "../../GlobalTostify";
const EmailVerify = () => {
  const [email, Setemail] = useState("");
  //-------------
  const navigate = useNavigate();
  //----------------------------
   const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (email) {
        const Verify = await axios.post("https://tiny-pink-loafers.cyclic.app/api/verifyemail", { email: email });
          if (Verify.data.success === true && Verify.data.status === 200) {
              cookie.set("EmailVerified", Verify.data.userid);
              SuccessToast("Email Verified")
              setTimeout(() =>  navigate("/changepassword") , 3000);
        } else {
          ErrorToast("Email Not Verifyied")
        }
      } else {
       WarningToast("Plz Fill All Fields")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-start sm:items-center h-screen bg-white">
        <div
          className={`lg:w-[55%] md:w-[65%] sm:w-[75%] w-[100%] flex flex-col  sm:rounded-[15px] sm:flex-row bg-white h-[500px] sm:shadow-lg sm:shadow-slate-500/40`}
          data-aos = "fade-right" data-aos-duration = "2000"        >
          <div className="sm:w-[40%] w-[100%] h-[300px] sm:h-full bg-[#3e6553]  flex flex-col justify-center sm:rounded-l-[15px] text-center text-white px-[20px]">
            <h1 className="font-semibold text-white text-[30px] my-4">
              Recover Password
            </h1>
            <p className="sm:text-[14px] font-[50] text-[12px]">
              To change your password you have to verify your email first
            </p>
          </div>
          <div className="sm:w-[60%] flex justify-center items-center flex-col w-[100%] sm:h-full">
            <h1 className="text-[36px] font-bold mt-[25px]">Verify Email</h1>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded w-[90%] px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-[16px] font-semibold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className=" appearance-none focus:border-[#3e6553] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => Setemail(e.target.value)}
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-[#3e6553] border  transition-all hover:bg-[rgba(0,84,28,1)]  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                              
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default EmailVerify;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cookie from "cookie_js";
import { ErrorToast, SuccessToast } from "../../GlobalTostify";
const Signin = () => {
    //------------------
  const [data, setData] = useState({
    email: "",
    pass: "",
  });
  const [loading, Setloading] = useState(false);
    //------------------
    const navigate = useNavigate();
    //------------------
      const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    Setloading(true);
    const { email, pass } = data;
    try {
      if (email && pass) {
        const Signindata = await axios.post("https://cyan-light-chameleon.cyclic.cloud/api/loginuser", {
          Logindata: data,
        });
        if (
          Signindata.data.status === 200 &&
          Signindata.data.success === true && Signindata.data.role === "user"
        ) {
          SuccessToast("Signin Successfully")
          cookie.set("Usertoken", Signindata.data.usertoken);
          cookie.set("Useremail", Signindata.data.email, { expires: 1 });
          cookie.set("Userid", Signindata.data.id);
          setTimeout(() => navigate("/"), 3000);
          Setloading(false)
        }
        else if (Signindata.data.status === 200 && Signindata.data.success === true && Signindata.data.role === "admin") {
          SuccessToast("Signin Successfully")
          cookie.set("Admintoken", Signindata.data.admintoken);
          cookie.set("Useremail", Signindata.data.email, { expires: 1 });
          setTimeout(() => navigate("/admin"), 3000);
          Setloading(false)

        }
        else {
          ErrorToast("Plz Try Again")
          Setloading(false)

        }
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
        >
          <div className="sm:w-[40%] w-[100%] h-[300px] sm:h-full bg-[#3e6553]  flex flex-col justify-center sm:rounded-l-[15px] text-center text-white px-[20px]">
            <h1 className="font-semibold text-white text-[30px] my-4">
              Welcome Back!
            </h1>
            <p className="sm:text-[14px] font-[50] text-[12px]">
              To stay connected with us please login with your personal
              information
            </p>
            <button onClick={() => navigate("/signup")} className="text-white bg-transparent my-4 py-[6px] w-[170px] mx-auto rounded-[12px] hover:bg-white hover:text-[#3e6553] font-semibold transition-all">
              Sign Up
            </button>
          </div>
          <div className="sm:w-[60%] flex justify-center items-center flex-col w-[100%] sm:h-full">
            <h1 className="text-[36px] text-black font-bold mt-[25px]">
              Sign In <span>🔑</span>
            </h1>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded w-[90%] px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className=" appearance-none focus:border-[#3e6553] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className=" appearance-none border focus:border-[#3e6553] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="pass"
                  value={data.pass}
                  onChange={handleInputChange}
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#3e6553] border  transition-all hover:bg-[rgba(0,84,28,1)]  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                >
                  {loading === false ? <><p style={{width : "60px"}}>Sign In</p></> : <><img src="/images/elp.gif" style={{height : "30px" }} alt="" /></>}
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-[#3e6553] cursor-pointer"
                  onClick={() => navigate("/emailverify")}
                >
                  Forgot Password?
                </a>
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

export default Signin;

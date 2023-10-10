import React,{useState} from 'react'
import '../style.css'
import cookie from 'cookie_js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ErrorToast, SuccessToast } from '../../GlobalTostify';

const ChangePassword = () => {
//---------------------
    const [data, setData] = useState({
        pass: "",
        changePassword: ""
    });
    const [userid, Setuserid] = useState("");
 //----------------------
    const navigate = useNavigate();
 //---------------------   
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };
//---------------------
      const Checktoken = async () => {
          const emailtoken = cookie.get("EmailVerified");
          if (!emailtoken) {
              navigate("/signin");
          } else {
              Setuserid(emailtoken)
          }
    }
//------------------------
    const Newpass = async (e) => {
        const {pass , changePassword} = data
            try {
                if (pass === changePassword) {
                    const Sendpass = await axios.post("https://tiny-pink-loafers.cyclic.app/api/changepass", { pass: pass, userid: userid });
                    if (Sendpass.data.success === true && Sendpass.data.status === 201) {
                        SuccessToast("Password Change");
                        setTimeout(() => navigate("/signin"), 3000);
                    } else {
                        ErrorToast("Plz Try Again")
                    }
                } else {
                    alert('Please Enter Valid Details')
                }
            } catch (error) {
                console.log(error);
            }
        }
//------------------------
    useEffect(() => {
        Checktoken();
    },[])
  return (
    <>
            <div className='flex justify-center items-start sm:items-center h-screen bg-white'>

              <div className={`lg:w-[55%] md:w-[65%] sm:w-[75%] w-[100%] flex flex-col  sm:rounded-[15px] sm:flex-row bg-white h-[500px] sm:shadow-lg sm:shadow-slate-500/40`}
              data-aos = "fade-right" data-aos-duration = "2000"
              >
                    <div className='sm:w-[40%] w-[100%] h-[300px] sm:h-full bg-[#3e6553]  flex flex-col justify-center sm:rounded-l-[15px] text-center text-white px-[20px]'>
                        <h1 className='font-semibold text-white text-[30px] my-2'>Recover Password</h1>
                        <p className='sm:text-[14px] font-[50] text-[12px]'>Please change your password to recover your account</p>
                        <button className='text-white bg-transparent border border-white my-4 py-[6px] w-[170px] mx-auto rounded-[12px] hover:bg-white hover:text-[#3e6553] font-semibold transition-all'>Login</button>
                    </div>
                    <div className='sm:w-[60%] flex justify-center items-center flex-col w-[100%] sm:h-full'>
                        <h1 className='text-[36px] font-bold mt-[25px]'>Change Password</h1>
                        
                        {/* Login Form */}
                            <form  className="bg-white rounded w-[90%] px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-semibold mb-2"
                                        htmlFor="username"
                                    >
                                        New Password
                                    </label>
                                    <input
                                        className=" appearance-none focus:border-[#3e6553] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        name='pass'
                                        value={data.pass}
                                        onChange={handleInputChange}
                                        type="pass"
                                        placeholder="Enter New Password"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-semibold mb-2"
                                        htmlFor="username"
                                    >
                                        Rewrite Password
                                    </label>
                                    <input
                                        className=" appearance-none focus:border-[#3e6553] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name='changePassword'
                                        value={data.changePassword}
                                        onChange={handleInputChange}
                                        type="password"
                                        placeholder="Re-enter Password"
                                    />
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-[#3e6553] border  transition-all hover:bg-[rgba(0,84,28,1)]  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={() => Newpass()}
                                    >
                                        Change Password
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
  )
}

export default ChangePassword
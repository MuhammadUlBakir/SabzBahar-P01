import React, { useEffect, useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorToast, SuccessToast, WarningToast } from '../../GlobalTostify';
function Signup() {
// ------------------
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        password: '',
        confirm_password: ''
    });
//-----------------------
    const navigate = useNavigate();
//-----------------------
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, email, number, password, confirm_password } = formData;
        try {
            if (!username || !email || !number || !password || !confirm_password) {
               WarningToast("Plz fill All Fields")
            } else {
                if (password === confirm_password) {
                    const Signupdata = await axios.post("https://tiny-pink-loafers.cyclic.app/api/signupdata", { Signupdata: formData });
                    if (Signupdata.data.success === false && Signupdata.data.status === 4011) {
                        ErrorToast("Invaid Cridentials")
                    }else if (Signupdata.data.success === false && Signupdata.data.status === 4012) {
                        ErrorToast("Invaid Cridentials")
                    }else if (Signupdata.data.success === false && Signupdata.data.status === 4013) {
                        ErrorToast("Invaid Cridentials")
                    }else if (Signupdata.data.success === false && Signupdata.data.status === 402) {
                        ErrorToast("Plz try Again");
                    } else {
                       SuccessToast("Signup Successfully");
                        setTimeout(() => navigate("/signin"), 4000); 
                    }
                } else {
                   WarningToast("Password Not Match");
                }
            }
        } catch (error) {
            
        }
    };
    return (
        <>
            <ToastContainer />
            <div className="fwrapper w-full h-full sm:h-screen flex justify-center items-center bg-white rounded-md">
                <div className="fcontainer w-[100%] sm:w-[75%] md:w-[65%] lg:w-[55%] sm:mx-0 flex-col sm:flex-row flex h-full md:h-[520px] bg-slate-50 sm:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] sm:rounded-[16px]"
                data-aos = "fade-right" data-aos-duration = "2000"
                >
                    <div className="rimg bg-[#3e6553] px-8 flex justify-center py-10 items-center flex-col w-[100%] sm:w-[45%] text-white h-full sm:rounded-s-[16px]">
                        <h1 className='text-center text-white text-[20px] sm:text-[22px] md:text[24px] font-medium'>Already Have An Account?</h1>
                        <p className='text-[14px] md:text-[16px] px-2 py-1 text-center'>Enter a World of Green Delights: Sign In to Nurture Nature's Beauty!</p>
                        <a href="#">
                            
                        </a>
                    </div>
                    <div className='w-full md:w-[55%] bg-white sm:rounded-r-[15px]'>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-1xl text-center w-[75%] mx-auto ">
                                Sign Up🔐
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <input className="bg-white focus:border-[#3e6553] outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-sm  block w-full p-2 " id="grid-first-name" type="text" placeholder="Username" name='username' value={formData.username} onChange={handleInputChange} style={{borderRadius : "7px"}} />
                                </div>
                                <div>
                                    <input type="email" name="email" id="email" className="bg-white focus:border-[#3e6553] outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2  " placeholder="name@company.com" required="" style={{borderRadius : "7px"}} value={formData.email} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <input type="number" name="number" id="number" placeholder="Phone Number" className="bg-white focus:border-[#3e6553] outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2" required="" style={{borderRadius : "7px"}} value={formData.number} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white focus:border-[#3e6553] outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 " required="" style={{borderRadius : "7px"}} value={formData.password} onChange={handleInputChange} />
                                </div>
                                <div>
                                    <input type="password" name="confirm_password" id="confirm-password" placeholder="••••••••" className="bg-white focus:border-[#3e6553] outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2 " required="" style={{borderRadius : "7px"}} value={formData.confirm_password} onChange={handleInputChange} />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded checked:text-white  focus:border-[#3e6553] outline-none focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" style={{borderRadius : "7px"}} />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-[#3e6553] border  transition-all hover:bg-[rgba(0,84,28,1)]  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        
                                    >
                                        Sign Up
                                    </button>
                                    <a
                                        className="inline-block align-baseline font-bold text-sm text-[#3e6553]"
                                        onClick={() => navigate("/signin")}
                                        style={{cursor : "pointer"}}
                                    >
                                        Already have an account?
                                    </a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Signup
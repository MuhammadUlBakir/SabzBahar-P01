import React from 'react'

export const Signup = () => {
    return (
      <>
    <div className='flex justify-center items-start sm:items-center h-screen bg-white'>

                <div  className={`lg:w-[55%] md:w-[65%] sm:w-[75%] w-[100%] flex flex-col  sm:rounded-[15px] sm:flex-row bg-white h-[500px] sm:shadow-lg sm:shadow-slate-500/40`}>
                    <div className='sm:w-[40%] w-[100%] h-[300px] sm:h-full bg-[#35b497] flex flex-col justify-center sm:rounded-l-[15px] text-center text-white px-[20px]'>
                        <h1 className='font-semibold text-white text-[30px] my-4'>Welcome Back!</h1>
                        <p className='sm:text-[14px] font-[50] text-[12px]'>To stay connected with us please login with your personal information</p>
                        <button className='text-white bg-transparent border-2 border-white  my-4 py-[6px] w-[220px] mx-auto rounded-[12px] hover:bg-white hover:text-[#35b497]  transition-all'>Sign Up</button>
                    </div>
                    <div className='sm:w-[60%] flex justify-center items-center flex-col w-[100%] sm:h-full'>
                        <h1 className='text-[36px] font-bold mt-[25px]'>Sign In <span >🔑</span></h1>
                        
                        {/* Login Form */}
                            <form onSubmit={handleSubmit} className="bg-white rounded w-[90%] px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-semibold mb-2"
                                        htmlFor="username"
                                    >
                                        Username
                                    </label>
                                    <input
                                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name='email'
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
                                        className=" appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        name='password'
                                        value={data.password}
                                        onChange={handleInputChange}
                                        type="password"
                                        placeholder="******************"
                                    />
                                    
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-[#35b497] border  transition-all hover:bg-[#298D76]  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Sign In
                                    </button>
                                    <a
                                        className="inline-block align-baseline font-bold text-sm text-[#35b497]"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                            <p className="text-center text-gray-500 text-xs">
                                ©2023 Plantnest Corp. All rights reserved.
                            </p>
                        

                    </div>
                </div>

            </div>


        </>
  )
}

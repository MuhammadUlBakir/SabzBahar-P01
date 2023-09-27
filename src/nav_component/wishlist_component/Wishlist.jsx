import React from "react";
import '../style.css'
const product= [
    {name:'Jet black sportsmen shoes',image:'https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png'},
    {name:'Jet black sportsmen shoes',image:'https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png'},
    {name:'Jet black sportsmen shoes',image:'https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png'},
   
]

export default function Wishlist() {
    
    return (
        <div className=" py-12">
            {/* Desktop Responsive Start */}
            <div className=" flex justify-center items-center">
                <div className=" flex flex-col justify-start items-start ">
                    <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                        <p className="text-4xl font-semibold leading-9 text-gray-800">Favourites</p>
                        <p className="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mx-[30px]">

                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/bHgJDpd/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-2.png" alt="shoe" />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full  jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-[18px] font-semibold leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full  jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none hover:bg-red-600 p-2 rounded-md focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-white">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/6y62DnT/daniel-storek-JM-q-KEd1-GMI-unsplash-1-1.png" alt="shoes" />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full  jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-[18px] font-semibold leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none hover:bg-red-600 p-2 rounded-md focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-white">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/LR5LyDw/charles-deluvio-1-nx1-QR5d-TE-unsplash-1-1.png" alt="glasses" />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-[18px] font-semibold leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none hover:bg-red-600 p-2 rounded-md focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-white">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/XzvpLZz/rocknwool-8-Lsy75-Lq-GVc-unsplash-1-4.png" alt="girl" />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-[18px] font-semibold leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none hover:bg-red-600 p-2 rounded-md focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-white">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* Desktop Responsive End */}
            {/* Mobile Responsive Start */}
            {/* <div className=" flex justify-center items-center">
                <div className="sm:hidden flex flex-col justify-start items-start ">
                    <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                        <p className="text-4xl font-semibold leading-9 text-gray-800">Favourites</p>
                        <p className="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/bHgJDpd/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-2.png" alt="shoe" />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-[18px] font-semibold leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/6y62DnT/daniel-storek-JM-q-KEd1-GMI-unsplash-1-1.png" alt="shoes" />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/LR5LyDw/charles-deluvio-1-nx1-QR5d-TE-unsplash-1-1.png" alt="glasses" />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-gray-200 border-b pb-10">
                        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/XzvpLZz/rocknwool-8-Lsy75-Lq-GVc-unsplash-1-4.png" alt="girl" />
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p className="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p className="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                    {" "}
                                    View details
                                </a>
                            </div>
                            <div>
                                <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
                                    <p>Remove Item</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Mobile Responsive End */}
        </div>
    );
}

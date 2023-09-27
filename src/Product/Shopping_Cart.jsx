import React, { useState } from "react";
import "./style.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Shopping_Cart() {
  const [show, setShow] = useState(false);
    const [data, Setdata] = useState([]);
    const navigate = useNavigate();
  const Cartdata = async () => {
    try {
      const existingCartData = localStorage.getItem("cartData10");
      Setdata(JSON.parse(existingCartData));
    } catch (error) {
      console.log(error);
    }
  };
  const Deletecheckout = (val) => {
    const Deletefilter = data.filter((elm) => elm.id !== val.id);
    Setdata(Deletefilter);
  };
  let Subtotal = 0;

  //-------------------
  useEffect(() => {
    Cartdata();
  }, []);
  return (
    <>
      <div>
        {/* <div className="flex items-center justify-center py-8">
                    <button onClick={() => setShow(!show)} className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">
                        Open Modal
                    </button>
                </div> */}
        {/* {show && ( */}
        <div
          className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
          id="chec-div"
        >
          <div
            className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
            id="checkout"
          >
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div
                className=" w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                id="scroll"
              >
                <div
                  className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  <p className="text-sm pl-2 leading-none">Back</p>
                </div>
                <p className="text-4xl font-black leading-10 text-gray-800 pb-4 pt-3">
                  Shopping Cart
                </p>
                {/* ------Shopping Cart Product Start Here */}
                {data.map((elm, ind) => {
                  const Totalprice = elm.quantity * elm.price;
                  Subtotal += Totalprice;
                  return (
                    <>
                      <div className="sm:flex sm:justify-center items-center mt-5 pt-5 border-t border-gray-200">
                        <div className="sm:w-[20%] w-[30%] lg:w-[10%]">
                          <img
                            src={elm.productimg}
                            alt
                            className="aspect-[4/4] object-center rounded-lg  object-fill"
                          />
                        </div>
                        <div className="md:pl-3 md:w-3/4 w-full">
                          <div className="flex items-start justify-between w-full pt-1 pl-2">
                            <p className="text-base font-black leading-none text-gray-800">
                              {elm.name}
                            </p>
                            {elm.quantity}
                          </div>

                          <div className="flex items-end justify-between pl-2 pt-5 pr-6">
                            <div className="flex itemms-center">
                              <p
                                className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                                onClick={() => {
                                  Deletecheckout(elm);
                                }}
                              >
                                Remove
                              </p>
                            </div>
                            <p className="text-base font-semibold leading-none text-gray-800">
                              {Totalprice}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                {/* ------Shopping Cart Product Ends Here */}
              </div>
              <div className=" md:w-1/3 xl:w-2/5 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <p className="text-2xl font-bold text-center leading-9 text-gray-800">
                      Order Summary
                    </p>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none font-bold text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base font-medium leading-none text-gray-800">
                        {Subtotal}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none font-bold text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Rs150
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none font-bold text-gray-800">
                        Tax
                      </p>
                      <p className="text-base font-medium leading-none text-gray-800">
                        2%
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl font-bold leading-normal text-gray-800">
                        Total
                      </p>
                      <p className="text-2xl font-semibold leading-normal text-right text-gray-800">
                       Rs {Subtotal + 150 + ((Subtotal + 150) * 2) / 100}
                      </p>
                    </div>
                    <button
                      onClick={() => navigate(`/checkout/${Subtotal + 150 + ((Subtotal + 150) * 2) / 100}`)}
                      className="text-base leading-none w-full py-5 bg-[#3e6553]  focus:outline-none rounded-md text-white"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </>
  );
}

export default Shopping_Cart;

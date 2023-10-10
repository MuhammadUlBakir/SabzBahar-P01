import React from "react";
// import "../../style.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Contacticon from "remixicon-react/ContactsLineIcon"
import { Icon } from '@iconify/react';
import cookie from "cookie_js";
import { ErrorToast, SuccessToast, WarningToast } from "../../GlobalTostify";
import Styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../Mainpage_Routes/Test/Testpage";
import PageHeader from "../../Contents/PageHeader";
import PageFooter2 from "../../Contents/PageFooter2";
import Pagetitle from "../../Contents/Pagetitle";
const Removediv = Styled.div`
margin-left : 400px;
color : red;
margin-top : -60px;
font-weight : bold;
@media (max-width: 767.98px) {
  margin-left : 200px;
  position : relative;
  top : -140px;
  font-size : 0
}
`
const Qtydiv = Styled.div`
display : flex;
position : relative;
top : 108px;
left : -90px;
@media (max-width: 767.98px) {
  margin-left : 110px;
  position : relative;
  top : 1px;
  width : 100px
}
`
const ContentDiv = Styled.div`
font-size : 17px;
position : relative;
left : -60px;
top : 10px;
font-height : 20px;
@media (max-width: 767.98px) {
  margin-top : -141px;
  padding-bottom : 30px;
  margin-left : 180px;
  font-size : 14px;
  width : 120px;
  font-height : 40px;

  
}
`
const Mobileremove = Styled.div`
color : red;
position : relative;
left : 510px;
font-size : 30px;
top : -50px;
cursor : pointer;
@media (max-width: 767.98px) {
  color : red;
  position : relative;
  left : 319px;
  top : -100px;
  font-size : 25px;
  width : 50px
}
`
const QtyBtn = Styled.div`
border : 1px solid;
height : 30px;
width : 47px;
margin-left : -17px;
padding-left : 10px;
padding-top : 2px;
border-color : lightgrey;
border-radius : 5px;
@media (max-width: 767.98px) {
border : 1px solid;
border-color : black;
width : 45px;
height : 30px;
padding-top : 3px;
padding-left : 11px;
margin-left : -9px;
border-radius : 3px;
border-color : lightgrey
}
` 
const QtyBtnl = Styled.div`
border : 1px solid;
height : 30px;
width : 47px;
margin-left : 4px;
padding-left : 10px;
padding-top : 2px;
border-color : lightgrey;
border-radius : 5px;

@media (max-width: 767.98px) {
width : 45px;
margin-left : 4px;
border : 1px solid;
border-color : black;
padding-top : 3px;
padding-left : 11px;
border-radius : 3px;
border-color : lightgrey
}
`
const Orderpage = Styled.div`
margin-top : 75px;
border-radius : 10px;
@media (max-width: 767.98px) {
  margin-top : -20px;
  padding-bottom : 40px;
  width : 380px;
  margin-left : 15px;
}
` 
const AmountContent = Styled.div`
font-size: 1.2rem;
line-height: 1.75rem;
@media (max-width: 767.98px) {
  font-size : 16px;
}
`
const Mobilehr = Styled.div`
color : white ;
width : 750px ;
position : relative ;
left : -220px ;
top : 30px ;
height : 10px;
@media (max-width: 767.98px) {
  width : 330px;
  left : -2px ;

}
`
function RentCheckout() {
  //--------------------
  const [data, Setdata] = useState({
    email: "",
    cardholdername: "",
    cardnum: "",
    address: "",
    contact: "",
    cityname: ""
  });
    const [rentdata, Setrentdata] = useState([]);
    const [shipping, Setshipping] = useState({
        name: "",
        price : ""
    })
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext)
//   const [courier, Setcourier] = useState({
//     cname: "",
//     charges: ""
//   });
//   const navigate = useNavigate();
//   const [data2, Setdata2] = useState([]);
//   const [themedata, Setthemedata] = useState("");
//   const [currtheme, Setcurrtheme] = useState("");
//   //--------------------
//   let amount = 0;
//   const {theme} = useContext(ThemeContext)
//   //--------------------
  const Cartdata = async () => {
    try {
      const existingCartData = localStorage.getItem("RentData1");
        existingCartData ? Setrentdata(JSON.parse(existingCartData)) : navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
//   //--------------------
//   const PrevOrderInfo = async () => {
//     const email = cookie.get("Useremail");
//     try {
//       const prevdata = await axios.post("/api/contactinfo", { email });
//       console.log(prevdata.data)
//       if (prevdata) {
//         prevdata.data.odata.map((elm, ind) => {
//           Setdata({
//             email: elm.email,
//             cardholdername: elm.holdername,
//             address: elm.address,
//             contact: elm.contact,
//             cityname: elm.city
//           });
//         })
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
    //   //--------------------
  let amount = 0;
  rentdata.map((elm) => {
    const price = elm.qty * elm.rentcharge
    amount += price
  })
//--------------------
  const Orderdata = async () => {
   try {
       const { email, cardholdername, cardnum, contact, cityname, address } = data;
       if (!email || !cardholdername || !cardnum || !contact || !cityname || !address || !shipping.price) {
           ErrorToast("Plz Fill All Fields")
       } else {
           const newrent = await axios.post("/api/createrent" , {data , rentdata , sname : shipping.name , sprice : shipping.price})
         if (newrent.data.success === true && newrent.data.status === 201) {
           SuccessToast("Order Placed Successfully")
           localStorage.removeItem("RentData1")
           setTimeout(() => navigate("/"), 4000);
         } else {
           ErrorToast("Plz Try Again!")
           }
       }
   } catch (error) {
       console.log(error);
   }
  }
//--------------------
  const Inputval = (e) => {
    const {name , value} = e.target
    Setdata((pre) => {
      return {...pre , [name] : value }
    })
  }
//   //---------------------
//   const Checkuser = () => {
//     const token = cookie.get("Usertoken");
//     !token ? navigate("/signin") : ""
//   }
//   //------------------------
//   const ShippingDetail = (name, charges) => {
//     Setcourier({
//       cname: name,
//       charges: charges
//     });
//   }
//   //---------------------------
  const AddQty = (val) => {
    const findindex = rentdata.findIndex(elm => elm.rid === val.rid);
    rentdata[findindex].qty += 1;
    localStorage.setItem("RentData1", JSON.stringify(rentdata));
    Cartdata();

  }
  const SubQty = (val) => {
    const findindex = rentdata.findIndex(elm => elm.rid === val.rid);
    if (rentdata[findindex].qty > 1) {
      rentdata[findindex].qty -= 1;
    } else {
      WarningToast("Limit Exceed")
    }
    localStorage.setItem("RentData1", JSON.stringify(rentdata));
    Cartdata();
  }
//   //---------------------------
  const RemoveItem = (index) => {
    rentdata.splice(index, 1);
    localStorage.setItem('RentData1', JSON.stringify(rentdata));
    Cartdata();
    SuccessToast("Item Removed", 3000);
  }
//   //---------------------------
//   const Currtheme = () => {
//     const selectedtheme = localStorage.getItem("selected-theme");
//     Setthemedata(selectedtheme);
//   }
//   //---------------------------

  useEffect(() => {
 
    Cartdata();
  }, []);
//   useEffect(() => {
//     PrevOrderInfo();
//   },[])
  return (
      <>
          <Pagetitle title = "Rent-Checkout" />
      <PageHeader />
      
      <div className="grid sm:px-10 lg:grid-cols-2 mt-10 lg:px-20 xl:px-32">

        <Orderpage>
        <div className="mt-10 border border-grey px-4 pt-8 lg:mt-0" style={{borderRadius : "10px" , backgroundColor : theme ? (theme !== "dark" ? "#2f3733" : "white") : ""}}>
            <p style={{ fontWeight: "bold", marginTop: "-16px", cursor: "pointer" }} onClick={() => navigate(-1)}>{"<--"} Back Page {}</p>
          <hr  style={{position : "relative", top : "7px"}}/>
          <p className="text-gray-400" style={{marginTop : "30px"}}>
            Complete your order by providing your payment details. 
         
          </p>
          <div className="">
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email 
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                onChange={Inputval}
                value={data.email}
                required
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-[#3e6553] focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                  style={{backgroundColor : "transparent"}}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                onChange={Inputval}
                  value={data.cardholdername}
                  style={{backgroundColor : "transparent"}}

                name="cardholdername"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-[#3e6553] focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Details 
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  onChange={Inputval}
                  value={data.cardnum}
                  name="cardnum"
                    required
                    style={{backgroundColor : "transparent"}}

                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-[#3e6553] focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Contact Number 
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                    onChange={Inputval}
                    style={{backgroundColor : "transparent"}}

                  value={data.contact}
                  name="contact"
                  required
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-[#3e6553] focus:ring-blue-500"
                  placeholder="YOUR CONTACT NUMBER"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                
                  <Contacticon size={18} color="grey" />
                </div>
              </div>
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              City Name
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                    onChange={Inputval}
                    style={{backgroundColor : "transparent"}}

                  value={data.cityname}
                  name="cityname"
                  required
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-[#3e6553] focus:ring-blue-500"
                  placeholder="YOUR CITY NAME"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <Icon icon="fluent:city-20-regular" height={20} />

                </div>
              </div>
            </div>

            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address 
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-full">
                <input
                  type="text"
                  id="billing-address"
                    onChange={Inputval}
                    style={{backgroundColor : "transparent"}}

                  value={data.address}
                  name="address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-[#3e6553] focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="/images/pk.jpg"
                    alt=""
                    style={{height : "20px" , width : "20px"}}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Total -->  */}
              <AmountContent>
                <div style={{color : theme ? (theme === "dark" ? "dark" : "light") : ""}}>
                <div className="mt-6 flex items-center justify-between">
              <p className=" font-medium">Total</p>
              <p className=" font-semibold">{amount} Rs</p>
            </div>
            <div className="mt-6 flex items-center justify-between" style={{marginTop : "-0.5px"}}>
              <p className=" font-medium">GST 5%</p>
              <p className=" font-semibold">{amount + (amount * (5 / 100))} Rs</p>
            </div>
            <div className="mt-6 flex items-center justify-between" style={{marginTop : "-0.5px"}}>
              <p className=" font-medium">Shipping</p>
              <p className=" font-semibold">{shipping.price ? shipping.price : 0} Rs</p>
            </div>
            <hr style={{position : "relative" , top : "10px"}}/>
            <br />
            <div className="mt-6 flex items-center justify-between" style={{marginTop : "-5px"}}>
              <p className="text-2xl font-medium">SubTotal</p>
              <p className="text-2xl font-semibold">{(amount + (amount * (5 / 100))) + shipping.price} Rs</p>
            </div>
             </div>
            </AmountContent>
          </div>
          <button
            className="mt-4 mb-8 w-full rounded-md bg-[#3e6553] px-6 py-3 font-medium text-white"
            onClick={Orderdata}
          >
            Place Order
          </button>
        </div>
        </Orderpage>
        <div className="px-4 pt-8" style={{marginTop : "30px"}} >
          <p className="text-xl font-medium">Rent Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border px-2 py-4 sm:px-6" style={{backgroundColor : theme ? (theme !== "dark" ? "#2f3733" : "white") : ""}}>
            {!rentdata ? <><h1>hi</h1></> : <>
              {rentdata.map((elm , ind) => {
                return (
                  <>
                  <div className="flex flex-col rounded-lg sm:flex-row" style={{paddingBottom : "20px"}}>
                    <img
                      className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                      src={elm.rimg}
                        alt="Plant Image "
                        style={{height : "100px" , width : "100px"}}
                      />
                      <Qtydiv>
                      <QtyBtn><button className="qtyg" onClick={() => AddQty(elm)} style={{ paddingRight : "35px"}}>➕</button></QtyBtn>
                    <QtyBtnl>  <button className="qtyl" onClick={() => SubQty(elm)}>➖</button></QtyBtnl>
                      </Qtydiv>
                    <div className="flex w-full flex-col px-4 py-4" >
                        <ContentDiv>
                        <span className="font-semibold" style={{display : "flex"}}><p style={{paddingRight : "10px" , fontWeight : "bolder" }}>ProductName  </p>{elm.rpname}</span>
                                    <p className=" font-bold" style={{ display: "flex" }}>Quantity  <p style={{ fontWeight: "normal", paddingLeft: "10px" }}>{elm.qty}x</p> </p>
                                    <p className=" font-bold" style={{  display: "flex" }}>Duration  <p style={{ fontWeight: "normal", paddingLeft: "10px" }}>{elm.time}</p> </p>

                        <p className=" font-bold" style={{ display : "flex"}}>Price  <p style={{fontWeight : "normal" , paddingLeft : "10px"}}>{elm.rentcharge}</p> </p>
                        </ContentDiv>

                      
                        <Mobileremove onClick={() => RemoveItem(ind)}><Icon icon="charm:cross" /></Mobileremove>
                       <Mobilehr> <hr  /></Mobilehr>


                      </div>
                      
                  </div>
                  </>
              )
            })}
            </>}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods </p>
          <htmlForm className="mt-5 grid gap-6">
            <div className="relative"
 >
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
              />
              <span className="peer-checked:border-[#3e6553] absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" ></span>
              <label
                className="peer-checked:border-2 peer-checked:border-[#3e6553] peer-checked:bg-lightgray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                              htmlFor="radio_1"
                              onClick={() => Setshipping({name : "TCS Courier Service" , price : 1500})}
              >
                <img
                  className="w-14 object-contain"
                  src="/images/tcs.jpg"
                  alt=""
                 
                />
                <div className="ml-5" >
                  <span className="mt-2 font-semibold" >TCS Courier Service</span>
                  <p className="text-slate-500 text-sm leading-6">
                   Charges - 1500Rs
                  </p>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                 
                </div>
              </label>
            </div>
            <div className="relative" >
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-[#3e6553] absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-[#3e6553] peer-checked:bg-lightgray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                              htmlFor="radio_2"
                              onClick={() => Setshipping({name : "Leopard Courier Service" , price : 1200})}
              >
                <img
                  className="w-14 object-contain"
                  src="/images/leo.jpg"
                  alt=""
                />
                <div className="ml-5"  >
                  <span className="mt-2 font-semibold">Leopard Courier Service</span>
                  <p className="text-slate-500 text-sm leading-6">
                   Charges - 1200Rs
                  </p>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 4-6 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative" >
              <input
                className="peer hidden"
                id="radio_3"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-[#3e6553] absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-[#3e6553] peer-checked:bg-lightgray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                              htmlFor="radio_3"
                              onClick={() => Setshipping({name : "Daewoo Courier Service" , price : 1000})}
              >
                <img
                  className="w-14 object-contain"
                  src="/images/daewoo.jpg"
                  alt=""
                />
                <div className="ml-5" >
                  <span className="mt-2 font-semibold">Daewoo Courier Service</span>
                  <p className="text-slate-500 text-sm leading-6">
                   Charges - 1000Rs
                  </p>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 4-6 Days
                  </p>
                </div>
              </label>
            </div>
          </htmlForm>
        </div>
      </div>
      <PageFooter2/>
    </>
  );
}

export default RentCheckout;

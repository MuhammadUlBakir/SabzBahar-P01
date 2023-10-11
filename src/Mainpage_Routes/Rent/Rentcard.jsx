import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
import Heart from "remixicon-react/HeartLineIcon";
import Heartfill from "remixicon-react/HeartFillIcon";
import { ErrorToast, InfoToast, SuccessToast } from "../../GlobalTostify";
import cookie from "cookie_js";
import Removeicon from "remixicon-react/DeleteBackLineIcon";
import axios from "axios";
import { Icon } from "@iconify/react";
import { data } from "autoprefixer";
const StyledDiv = Styled.div`
@import url('https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700,800, 800i, 900&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}

body {
  
    min-height: 100vh;
   
}

.container {
    display: grid;
grid-template-columns: repeat(4, 1fr); /* 5 equal columns */
gap: 20px; /* Adjust the gap between cards */

}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }

  .container .card {
    width: 48%; /* Adjust card width for smaller screens */
  }
}

@media (max-width: 480px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
    margin-left : 30px
  }

  .container .card {
    width: 100%; /* Adjust card width for mobile screens */
  }
}
@media (max-width: 375px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
    position : absolute;
    right : 30px
  }

  .container .card {
    width: 70%; /* Adjust card width for mobile screens */
  }
}
@media (max-width: 390px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
    position : absolute;
    right : 35px
  }

  .container .card {
    width: 70%; /* Adjust card width for mobile screens */
  }
}

.container .card {

    position: relative;
    width: 320px;
    height: 450px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;
    flex: 0 0 48%; /* Adjust as needed for spacing */
  margin-bottom: 20px; /* Adjust margin as needed */
}

.container .card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: lightgreen;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
}

.container .card:hover:before {
    clip-path: circle(300px at 80% -20%);
}

.container .card:after {
    content: "plant";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);

}

.container .card .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 200px;
    left : 90px;
    height: 100%;
    transition: .5s;
}

.container .card:hover .imgBx {
    top: 0%;
    transform: translateY(-25%);
    /* bug  */
}

.container .card .imgBx img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(20deg);
    width: 270px;
}

.container .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 90;
}

.container .card:hover .contentBx {
    height: 210px;
}

.container .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
}

.container .card .contentBx .size,
.container .card .contentBx .color {
    
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: .5s;
    opacity: 0;
    visibility: hidden;
}

.container .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: .5s;
}

.container .card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: .6s;
}

.container .card .contentBx .size h3,
.container .card .contentBx .color h3 {
    color: white;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}

.container .card .contentBx .size span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: .5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
}

.container .card .contentBx .size span:hover {  /* other bug */
    background: #B90000;
}

.container .card .contentBx .color span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.container .card .contentBx .color span:nth-child(2) {
     background: #1BBFE9;
}

.container .card .contentBx .color span:nth-child(3) {
     background: #1B2FE9;
}

.container .card .contentBx .color span:nth-child(4) {
     background: #080481;
}

.container .card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: .5s;
}

.container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: .7s;
} 
`;
const ResImage = Styled.div`
height : 80px;
width : 80px;
position : relative;
left : 550px;
top : 200px;
@media (max-width: 480px) {
    position : relative;
    left : 156px;
}
`
const Rentcard = (props) => {
  const navigate = useNavigate();
  const [data2, Setdata2] = useState([]);
  const [rdata, Setrdata] = useState([]);
    const [loading, Setloading] = useState(false);
    const [hide, Sethide] = useState({
        open: false,
        id : ""
    })
  const [fltrdata, Setfltrdata] = useState([]);
  const [resdata, Setresdata] = useState([]);
  //--------------------------
  const userid = cookie.get("Userid");
  //---------------------------
    const Getrentproducts = async () => {
        Setloading(true);
    try {
      const rentdata = await axios.get(
        "https://cyan-light-chameleon.cyclic.cloud/api/getproduct"
      );
      const fltrdata = rentdata.data.Productdata.filter(
        (elm) =>
          elm.productcategory === "Flower" ||
          elm.productcategory === "Outdoor" ||
          elm.productcategory === "Indoor"
        );
        Setloading(false)
      Setdata2(fltrdata);
    } catch (error) {
      console.log(error);
    }
  };
  //---------------------------
  const Getrentcart = async () => {
    const rentdata = await axios.post("/api/getrent", { userid });
    rentdata ? Setrdata(rentdata.data.rentdata.rentcartdata) : []
  }
    //---------------------------
    const RentCart = async (elm , time , rentcharge ) => {
        try {
          const findindex = rdata.findIndex((item) => item.rid === elm._id);
          if (findindex !== -1) {
            rdata[findindex].qty += 1
            rdata[findindex].rentcharge += rentcharge
            SuccessToast("Quantity Added" , "top-center")
          } else {
            const rentdata = {
              rid: elm._id,
              rimg: elm.mainimage.url,
              rpname: elm.productname,
              rcategory: elm.productcategory,
              time: time,
              rentcharge: rentcharge,
              qty : 1
            };
            rdata.push(rentdata);
            SuccessToast("Rent Product Added" , "top-center")
          }
          await axios.post("/api/rentcart", { userid, data: rdata});
          localStorage.setItem("RentData1", JSON.stringify(rdata));

        } catch (error) {
            console.log(error);
        }
    }
    //---------------------------
  useEffect(() => {
    Getrentcart();
    Getrentproducts();
    RentCart();
  }, []);
  return (
    <>
      {loading === true ? (
        <>
                  <ResImage>
                  <img
            src="/images/double.gif"
            alt=""
            
          />
         </ResImage>
        </>
      ) : (
        <>
          {" "}
          <StyledDiv>
            <body data-aos = "fade-up" data-aos-duration = "3000">
              <div class="container">
                {data2.map((elm, ind) => {
                  return (
                    <>
                      <div class="card">
                        <div class="imgBx" style={{ cursor: "pointer" }}>
                          <img
                            src={elm.mainimage.url}
                            style={{ height: "200px", width: "200px" }}
                            alt={elm.productname}
                            onClick={() =>
                              navigate(`/productdetail/${elm._id}`)
                            }
                          />
                        </div>

                        <div class="contentBx">
                          <h2 style={{ fontSize: "23px" }}>
                            {elm.productname}
                            <p
                              style={{ fontSize: "10px", fontWeight: "normal" }}
                            >
                              Hover on card!
                            </p>
                          </h2>

                         {hide.open === true && hide.id === elm._id ?  <div className="size" >
                            <span style={{ width: "170px", fontSize: "14px" , backgroundColor : "white"}} onClick={() => RentCart(elm , "2h" , 1000 )}>
                              2hour - 200Rs
                            </span>
                            <span style={{ width: "170px", fontSize: "14px" , marginTop : "7px" }} onClick={() => RentCart(elm , "4h" , 2000 )} >
                              4hour - 4700Rs
                            </span>
                            <span style={{ width: "170px", fontSize: "14px" , marginTop : "7px" }} onClick={() => RentCart(elm , "6h" , 3000 )}>
                              6hour - 4700Rs
                            </span>
                            <span style={{ width: "170px", fontSize: "14px" , marginTop : "7px" }} onClick={() => RentCart(elm , "24h" , 4000 )}>
                              24hour - 4700Rs
                            </span>

                          </div> : ""}

                          <div>
                            {hide.open === true && hide.id === elm._id ? "" : <a href="#" onClick={() => Sethide({open : true , id : elm._id})}>Rent Now</a>}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </body>
          </StyledDiv>
        </>
      )}
    </>
  );
};

export default Rentcard;

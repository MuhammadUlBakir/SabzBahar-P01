import React from "react";
import Styled from "styled-components";
import FontLoader from "react-google-font-loader";
import PageHeader from "../../Contents/PageHeader";
import Cookie from "cookie_js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Div = Styled.div`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
}

.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: #006E51;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.container {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
  margin-left : 1px
}

.container.left {
  left: 0;
}

.container.right {
  left: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  background: #ffffff;
  border: 2px solid #006E51;
  border-radius: 16px;
  z-index: 1;
}

.container.right::after {
  left: -8px;
}

.container::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 2px;
  top: calc(50% - 1px);
  right: 8px;
  background: #006E51;
  z-index: 1;
}

.container.right::before {
  left: 8px;
}

.container .date {
  position: absolute;
  display: inline-block;
  top: calc(50% - 8px);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #006E51;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.container.left .date {
  right: -120px;
}

.container.right .date {
  left: -120px;
}
3e6553
.container .icon {
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 9px 0;
  top: calc(50% - 20px);
  background: #3e6553;
  border: 2px solid #006E51;
  border-radius: 40px;
  text-align: center;
  font-size: 18px;
  color: #006E51;
  z-index: 1;
}

.container.left .icon {
  right: 56px;
}

.container.right .icon {
  left: 56px;
}

.container .content {
  padding: 30px 90px 30px 30px;
  background: #3e6553;
  position: relative;
  border-radius: 0 500px 500px 0;
}

.container.right .content {
  padding: 30px 30px 30px 90px;
  border-radius: 500px 0 0 500px;
}

.container .content h2 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: white;
  font-weight : bolder
}

.container .content h3 {
    font-size: 0px;
    font-weight: normal;
    color: white;
    font-weight : bolder
  }

.container .content p {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: white;
}

@media (max-width: 767.98px) {
  .timeline::after {
    left: 120px;
    background : ${localStorage.getItem("selected-theme") === "dark" ? "white" : "white"}
    position : relative;
    left : 34px
  }

  .container {
    width: 94%;
    // padding-left: 120px;
    // padding-right: 50px;
    margin-left : 30px
  }

  .container.right {
    left: 0%;
  }

  .container .content h2 {
   
    font-size: 14px;
    font-weight: bold;
    color: white;
    position : relative;
    left : -50px
    font-weight : bolder,
    position : relative;
    left : -30px;
    width : 250px

  }
  
  .container .content p {
    margin: 0;
    font-size: 14px;
    line-height: 22px;
    color: white;
    position : relative;
    left : -30px;
    width : 250px
  }

  .container .content h3 {
    font-size: 10px;
    font-weight: normal;
    color: white;
    position : relative;
    left : -30px;
    margin-top : 10px;
    font-weight : bolder
   
    
  }

  .container.left::after, 
  .container.right::after {
    left: 82px;
    background : ${localStorage.getItem("selected-theme") === "dark" ? "white" : "white"}
    position : relative;
    left : -5px

  }

  .container.left::before,
  .container.right::before {
    left: 100px;
    border-color: transparent #006E51 transparent transparent;
    background : ${localStorage.getItem("selected-theme") === "dark" ? "transparent" : "transparent"}
  }

  .container.left .date,
  .container.right .date {
    right: auto;
    left: -20px;
    color : ${localStorage.getItem("selected-theme") === "dark" ? "transparent" : "transparent"}
  }

  .container.left .icon,
  .container.right .icon {
    right: auto;
    left: 146px;
    background : ${localStorage.getItem("selected-theme") === "dark" ? "transparent" : "white"}
  }

  .container.left .content,
  .container.right .content {
    padding: 30px 30px 30px 90px;
    border-radius: 500px 0 0 500px;
    
  }
}
`;
const OrderHistory = () => {
  const navigate = useNavigate();
    const [data, Setdata] = useState([]);
    let totalprice = 0
  //-------------------
  const Checkuser = () => {
    const token = Cookie.get("Usertoken");
    !token ? navigate("/") : "";
  };
  //--------------------
  const Orderdata = async () => {
    try {
      const orderdata = await axios.get("https://cyan-light-chameleon.cyclic.cloud/api/allorders");
      orderdata.data.orders ? Setdata(orderdata.data.orders) : navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  //--------------------
  useEffect(() => {
    Orderdata();
    Checkuser();
  }, []);
  return (
    <>
      <PageHeader />
      <Div>
        

        <div className="timeline" style={{marginTop : "120px"}}>
          <div>
            {data.map((elm, ind) => {
              const date = elm.createdAt.slice(0, 10);
              return (
                <>
                  <div
                    className={`container ${ind % 2 === 0 ? "left" : "right"}`}
                  >
                    <div className="date">{date}</div>
                    <i className="icon fa fa-home" />
                    <div className="content">
                              <h2>Order #{elm.ordercode} - {elm.status ? elm.status : "Pending"}</h2>
                              <h3>{date}</h3>
                              
                              {elm.orderdata.map((elm, ind) => {
                          totalprice += elm.pprice
                        return (
                          <>
                                <div>
                                <p style={{ display: "flex" }}>
                              {elm.pname} - {elm.qty}x
                                    </p>
                                    
                           </div>
                            
                          </>
                        );
                      })}
                              <p style={{paddingTop : "9px" , fontWeight : "bold"}}>Total Price :  {totalprice + (totalprice * (5 / 100)) + elm.shippingcharges}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Div>
    </>
  );
};

export default OrderHistory;

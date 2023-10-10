import React from 'react'
import styled from 'styled-components';
import cookie from 'cookie_js';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import axios from 'axios';
import { SuccessToast } from '../../GlobalTostify';
const mainColor = '#3e6553';
const lightText = '#ABB0BE';
const Badge = styled.span`
  background-color: ${mainColor};
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 14px;
  line-height: 1.4;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;

const ShoppingCart = styled.div`
  margin: 20px 0;
  position: absolute;
  right: 0;
  top: 20px;
  max-width: 220px;
  border-radius: 13px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: opacity 250ms ease;

`;

const ShoppingCartHeader = styled.div`
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .shopping-cart-total {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const ShoppingCartItems = styled.ul`
  padding-top: 20px;
  list-style: none;
  li {
    margin-bottom: 18px;
    clear: both;
    cursor: pointer;
  }
`;

const ItemImage = styled.img`
  float: left;
  margin-right: 12px;
  width: 50px;
  height: 50px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-size: 16px;
  margin-top: 5px;
`;

const ItemPrice = styled.span`
  color: ${mainColor};
  margin-top: 5px;
`;

const ItemQuantity = styled.span`
  color: ${lightText};
`;

const Button = styled.a`
  background: ${mainColor};
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;

  &:hover {
    background: ${mainColor};
  }
`;

const BagIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Clearfix = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const MainColorText = styled.div`
  font-weight: 600;
  padding-left: 6px;
`
const ShoppingCartTotal = styled.div`
  display:flex;
  justify-content: space-between
`

const ProfileDropdown = ({data , theme}) => {
  const [auth, Setauth] = useState("");
  const [userdata, Setuserdata] = useState([]);
  const [user, Setuser] = useState(false);
  const navigate = useNavigate("");
  //-----------------------
  const Logout = () => {
    cookie.remove("Usertoken");
    navigate("/");
    SuccessToast("Logout Successfully");
    
    CheckAuth(); 
  };
  const CheckAuth = async () => {
    const token = cookie.get("Usertoken");
    token ? Setuser(true) : Setuser(false)
  
    Setauth(token);
  }
  const Checkuserdata = async () => {
    // const token = cookie.get("Usertoken");
    // const Userdata = await axios.get("https://cyan-light-chameleon.cyclic.cloud/api/userdata");
    // const data = Userdata.data.allusers.filter(elm => elm.token === token)
    Setuserdata(data);
  }
  useEffect(() => {
    CheckAuth();
    Checkuserdata();
  },[])
  return (
    <ShoppingCart style={{backgroundColor : theme === "dark" ? "#2f3733" : "white"}}>
      <ShoppingCartHeader>
        <BagIcon>
          <span style={{ fontSize: '17px' , fontWeight : "bolder" }} ></span>
        </BagIcon>
        <ShoppingCartTotal>
        {user === true ? <>  {userdata.map((elm) => {
            return (
              <>
                        <MainColorText style={{position : "relative" , right : "12px"}}>Hi! {elm.username ? (elm.username) : "Wait"}</MainColorText>

              </>
            )
          })}</> : <><h1 style={{color : "red" , fontWeight : "bold" , position : "relative" , right : "13px"}}>User Not Found!</h1></>}
        </ShoppingCartTotal>
      </ShoppingCartHeader>
      <ShoppingCartItems>
        
        <li>
          <Clearfix>
            <ShoppingCartTotal>
              <MainColorText className='button' style={{width : "150px" , height : "40px"}}><p style={{marginTop : "-7px" , marginLeft : "26px" , display : "flex" }} onClick={() => navigate("/userprofile")}><Icon icon="iconamoon:profile-bold" style={{paddingRight : "8px" , paddingBottom : "7px"}} height={30} width={30} />Profile</p></MainColorText>
              
            </ShoppingCartTotal>
          </Clearfix>
        </li>
        <li>
          <Clearfix>
            <ShoppingCartTotal>
{auth ?               <MainColorText className='button' style={{color:'white' , width : "150px" , textAlign : "center" , backgroundColor : "red" , height : "40px" , display : "flex"}} onClick={Logout}><Icon icon="humbleicons:logout" height={24} style={{marginTop : "-8px" , marginLeft : "25px"}}/><p style={{marginTop : "-7px" , marginLeft : "8px"}}>Logout</p></MainColorText>
 :               <MainColorText className='button' style={{color:'white' , width : "150px" , textAlign : "center" , backgroundColor : "lightgreen" , height : "40px" , display : "flex"}} onClick={() => navigate("/signin")}><Icon icon="material-symbols:login" height={24} style={{marginTop : "-8px" , marginLeft : "25px"}}/><p style={{marginTop : "-7px" , marginLeft : "8px"}}>Login</p></MainColorText>
}              
            </ShoppingCartTotal>
          </Clearfix>
        </li>
      </ShoppingCartItems>
    </ShoppingCart>
  )
}

export default ProfileDropdown

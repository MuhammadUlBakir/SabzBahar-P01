import React,{useState} from 'react'

import { Icon } from '@iconify/react';
import styled from 'styled-components';
import ProfileDropdown from './ProfileDropdown';
import cookie from 'cookie_js';
import axios from 'axios';
import { useEffect } from 'react';


const CartWrapper = styled.div`
  position: relative;
`;

const CartIcon = styled.div`
  width: 25px;
  
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileIcon =  ({theme}) => {
  const [isDropdownOpenacc, setIsDropdownOpenacc] = useState(false);
  const [usrdata, Setusrdata] = useState([]);
  const user = async () => {
    const token = cookie.get("Usertoken");
    const Userdata = await axios.get("https://cyan-light-chameleon.cyclic.cloud/api/userdata");
    const data = Userdata.data.allusers.filter(elm => elm.token === token)
    Setusrdata(data);
    } 
    const toggleDropdownacc = () => {
        isDropdownOpenacc ? setIsDropdownOpenacc(false) : setIsDropdownOpenacc(true)
  };
  useEffect(() => {
    user();
  },[])
  return (

    <CartWrapper>
            <CartIcon onClick={toggleDropdownacc}>
            <Icon icon="basil:user-outline" width="160" height="160" />
            </CartIcon>
            {isDropdownOpenacc && <ProfileDropdown data = {usrdata} theme = {theme} />}
        </CartWrapper>
  )
}

export default ProfileIcon

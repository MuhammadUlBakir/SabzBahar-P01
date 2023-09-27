import React,{useState} from 'react'

import { Icon } from '@iconify/react';
import styled from 'styled-components';
import ProfileDropdown from './ProfileDropdown';

const CartWrapper = styled.div`
  position: relative;
`;

const CartIcon = styled.div`
  width: 30px;
  
  height: 30px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileIcon = () => {
    const [isDropdownOpenacc, setIsDropdownOpenacc] = useState(false);

    const toggleDropdownacc = () => {
        isDropdownOpenacc ? setIsDropdownOpenacc(false) : setIsDropdownOpenacc(true)
    };
  return (

    <CartWrapper>
            <CartIcon onClick={toggleDropdownacc}>
                <Icon className='visi' icon="codicon:account"  />
            </CartIcon>
            {isDropdownOpenacc && <ProfileDropdown />}
        </CartWrapper>
  )
}

export default ProfileIcon

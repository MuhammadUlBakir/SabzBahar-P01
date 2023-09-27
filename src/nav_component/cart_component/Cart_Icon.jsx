import React, { useState } from 'react';
import CartDropdown from './CartDropdown';
import { Icon } from '@iconify/react';
// import cartIcon from '@iconify-icons/uil/cart';

import styled from 'styled-components';

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

function Cart_Icon() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        isDropdownOpen ? setIsDropdownOpen(false) : setIsDropdownOpen(true)
    };

    return (
        <CartWrapper>
            <CartIcon onClick={toggleDropdown}>
                <Icon icon="mdi:cart-outline" style={{ fontSize: '22px' }} />
            </CartIcon>
            {isDropdownOpen && <CartDropdown />}
        </CartWrapper>
    );
}

export default Cart_Icon;

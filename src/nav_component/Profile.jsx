import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import cartIcon from '@iconify/icons-uil/cart';

const CartWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 100px
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

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  margin: 0px 10px 10px 10px;
  transition: opacity 300ms ease-in-out;
  ${CartWrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const DropdownItem = styled.div`
  padding: 12px;
  font-size: 14px;
  width: 120px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Cart = () => {
    return (
        <CartWrapper>
            <CartIcon><Icon icon={cartIcon} style={{fontSize: '22px'}} /></CartIcon>
            <Dropdown>
                <DropdownItem>Cart <span>(0)</span></DropdownItem>
                <DropdownItem>Wishlist</DropdownItem>
                <DropdownItem>Order</DropdownItem>
            </Dropdown>
        </CartWrapper>
    );
};

export default Cart;

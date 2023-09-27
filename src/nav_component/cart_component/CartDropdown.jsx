import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
// import cartIcon from '@iconify/icons-uil/cart';

const mainColor = '#3e6553';
const lightText = '#ABB0BE';

const Badge = styled.span`
  background-color: ${mainColor};
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 13px;
  line-height: 1.6;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;

const ShoppingCart = styled.div`
  margin: 20px 0;
  background: white;
  position: absolute;
  right: 0;
  top: 20px;
  max-width: 240px;
  border-radius: 3px;
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

const Cart = () => {
  let Alltotal = 0;
  //-------------------------
  const Cartnumber = localStorage.getItem("TotalClick");
  const data = localStorage.getItem("cartData10");
  const Carddata = JSON.parse(data);
  // -------------------------
  Carddata.map((elm, ind) => {
    const totalprice = elm.price * elm.quantity;
    Alltotal += totalprice
  })
  return (

    <ShoppingCart>
      <ShoppingCartHeader>
        <BagIcon>
          <Icon icon="mdi:cart-outline" style={{ fontSize: '22px' }} />
        </BagIcon>
        <ShoppingCartTotal>
          <span className="lighter-text">Total:</span>
          <MainColorText>{Alltotal}Rs</MainColorText>
        </ShoppingCartTotal>
      </ShoppingCartHeader>
      <ShoppingCartItems>
        <li>
          <Clearfix>
            <ShoppingCartTotal>
              <MainColorText onClick={() => alert("salama")}>Cart</MainColorText>
              <Badge className="badge">{Cartnumber}</Badge>
            </ShoppingCartTotal>
          </Clearfix>
        </li>
        <li>
          <Clearfix>
            <ShoppingCartTotal>
              <MainColorText>Wishlist</MainColorText>
              <Badge className="badge">3</Badge>
            </ShoppingCartTotal>
          </Clearfix>
        </li>
        <li>
          <Clearfix>
            <ShoppingCartTotal>
              <MainColorText>Orders</MainColorText>
              <Badge className="badge">3</Badge>
            </ShoppingCartTotal>
          </Clearfix>
        </li>
      </ShoppingCartItems>
    </ShoppingCart>
  );
};

export default Cart;

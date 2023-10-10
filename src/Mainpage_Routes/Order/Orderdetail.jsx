import React from "react";
import Styled from "styled-components";
import PageHeader from "../../Contents/PageHeader";
import PageFooter2 from "../../Contents/PageFooter2";
import { useParams } from "react-router-dom";
const Div = Styled.div`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');body{background-color: #eeeeee;font-family: 'Open Sans',serif}.container{margin-top:50px;margin-bottom: 50px}.card{position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;min-width: 0;word-wrap: break-word;background-color: #fff;background-clip: border-box;border: 1px solid rgba(0, 0, 0, 0.1);border-radius: 0.10rem}.card-header:first-child{border-radius: calc(0.37rem - 1px) calc(0.37rem - 1px) 0 0}.card-header{padding: 0.75rem 1.25rem;margin-bottom: 0;background-color: #fff;border-bottom: 1px solid rgba(0, 0, 0, 0.1)}.track{position: relative;background-color: #ddd;height: 7px;display: -webkit-box;display: -ms-flexbox;display: flex;margin-bottom: 60px;margin-top: 50px}.track .step{-webkit-box-flex: 1;-ms-flex-positive: 1;flex-grow: 1;width: 25%;margin-top: -18px;text-align: center;position: relative}.track .step.active:before{background: #FF5722}.track .step::before{height: 7px;position: absolute;content: "";width: 100%;left: 0;top: 18px}.track .step.active .icon{background: #ee5435;color: #fff}.track .icon{display: inline-block;width: 40px;height: 40px;line-height: 40px;position: relative;border-radius: 100%;background: #ddd}.track .step.active .text{font-weight: 400;color: #000}.track .text{display: block;margin-top: 7px}.itemside{position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;width: 100%}.itemside .aside{position: relative;-ms-flex-negative: 0;flex-shrink: 0}.img-sm{width: 80px;height: 80px;padding: 7px}ul.row, ul.row-sm{list-style: none;padding: 0}.itemside .info{padding-left: 15px;padding-right: 7px}.itemside .title{display: block;margin-bottom: 5px;color: #212529}p{margin-top: 0;margin-bottom: 1rem}.btn-warning{color: #ffffff;background-color: #ee5435;border-color: #ee5435;border-radius: 1px}.btn-warning:hover{color: #ffffff;background-color: #ff2b00;border-color: #ff2b00;border-radius: 1px}
`;
const Orderdetail = () => {
  const { id } = useParams();
  alert(id);
    return (
        <>
            <Div>
                <PageHeader/>
            <div className="container">
  <article className="card">
    <header className="card-header"> My Orders / Tracking </header>
    <div className="card-body">
      <h6>Order ID: OD45345345435</h6>
      <article className="card">
        <div className="card-body row">
          <div className="col"> <strong>Estimated Delivery time:</strong> <br />29 nov 2019 </div>
          <div className="col"> <strong>Shipping BY:</strong> <br /> BLUEDART, | <i className="fa fa-phone" /> +1598675986 </div>
          <div className="col"> <strong>Status:</strong> <br /> Picked by the courier </div>
          <div className="col"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
        </div>
      </article>
      <div className="track">
        <div className="step active"> <span className="icon"> <i className="fa fa-check" /> </span> <span className="text">Order confirmed</span> </div>
        <div className="step active"> <span className="icon"> <i className="fa fa-user" /> </span> <span className="text"> Picked by courier</span> </div>
        <div className="step"> <span className="icon"> <i className="fa fa-truck" /> </span> <span className="text"> On the way </span> </div>
        <div className="step"> <span className="icon"> <i className="fa fa-box" /> </span> <span className="text">Ready for pickup</span> </div>
      </div>
      <hr />
      <ul className="row">
        <li className="col-md-4">
          <figure className="itemside mb-3">
            <div className="aside"><img src="https://i.imgur.com/iDwDQ4o.png" className="img-sm border" /></div>
            <figcaption className="info align-self-center">
              <p className="title">Dell Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$950 </span>
            </figcaption>
          </figure>
        </li>
        <li className="col-md-4">
          <figure className="itemside mb-3">
            <div className="aside"><img src="https://i.imgur.com/tVBy5Q0.png" className="img-sm border" /></div>
            <figcaption className="info align-self-center">
              <p className="title">HP Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$850 </span>
            </figcaption>
          </figure>
        </li>
        <li className="col-md-4">
          <figure className="itemside mb-3">
            <div className="aside"><img src="https://i.imgur.com/Bd56jKH.png" className="img-sm border" /></div>
            <figcaption className="info align-self-center">
              <p className="title">ACER Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$650 </span>
            </figcaption>
          </figure>
        </li>
      </ul>
      <hr />
      <a href="#" className="btn btn-warning" data-abc="true"> <i className="fa fa-chevron-left" /> Back to orders</a>
    </div>
  </article>
</div>

             <PageFooter2/>           
        </Div>
        </>
 )
};

export default Orderdetail;

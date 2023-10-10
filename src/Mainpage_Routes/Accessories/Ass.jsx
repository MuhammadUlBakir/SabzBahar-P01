import React from 'react'
import { useNavigate } from 'react-router-dom';
import cookie from 'cookie_js'
import Checout from "remixicon-react/Search2LineIcon"
import Styled from "styled-components";
const Productres = Styled.div`
@media (max-width: 767.98px) {
  width : 300px;
  margin-left : 15px;
  }
`
const Buttonres = Styled.div`
@media (max-width: 767.98px) {
  position : relative;
  left : 10px;
  top : 10px;
}
`
const Ass = () => {
    const navigate = useNavigate();
    const Checktoken = async (val) => {
        const token = cookie.get("Usertoken");
        if (token) {
          navigate(`/filter/${val}`);
        } else {
          navigate("/signin")
        }
      }
  return (
      <>
      <Productres>
      <section className="product section container" id="products">
      <h2 className="section__title-center" style={{fontWeight : "bold"}} data-aos = "fade-left" data-aos-duration = "2000">
        Plant Accessories
      </h2>
      {/* <p className="product__description">
        Here have top selected P categories from our showroom, all are in excellent 
        shape and has a long life span. Buy and enjoy best quality.
      </p> */}
      <div className="product__container grid">
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Fertilizer")} data-aos = "fade-down" data-aos-duration = "1200">
          <div className="product__circle" />
          <img src="images/fert.png"  alt className="product__img" />
          <h3 className="product__title">Fertilizer </h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <Buttonres>
          <button className="button--flex product__button">
            <Checout/>
          </button>
          </Buttonres>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Pots")} data-aos = "fade-down" data-aos-duration = "2000">
          <div className="product__circle" />
          <img src="images/pot.png" alt className="product__img" />
          <h3 className="product__title">Plants Pots</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <Buttonres>
          <button className="button--flex product__button">
            <Checout/>
          </button>
          </Buttonres>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Shovel")} data-aos = "fade-down" data-aos-duration = "3000">
          <div className="product__circle" />
          <img src="images/shovel.png" alt className="product__img" />
          <h3 className="product__title">Shovel</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <Buttonres>
          <button className="button--flex product__button">
            <Checout/>
          </button>
          </Buttonres>
        </article>
       
      </div>
    </section>
          </Productres>
      </>
  )
}

export default Ass
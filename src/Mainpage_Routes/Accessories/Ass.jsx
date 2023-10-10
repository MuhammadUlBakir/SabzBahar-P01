import React from 'react'
import { useNavigate } from 'react-router-dom';
import cookie from 'cookie_js'
import Checout from "remixicon-react/Search2LineIcon"

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
          <section className="product section container" id="products">
      <h2 className="section__title-center" style={{fontWeight : "bold"}}>
        Plant Accessories
      </h2>
      {/* <p className="product__description">
        Here have top selected P categories from our showroom, all are in excellent 
        shape and has a long life span. Buy and enjoy best quality.
      </p> */}
      <div className="product__container grid">
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Fertilizer")}>
          <div className="product__circle" />
          <img src="images/fert.png"  alt className="product__img" />
          <h3 className="product__title">Fertilizer </h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <button className="button--flex product__button">
            <Checout/>
            
          </button>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Pots")}>
          <div className="product__circle" />
          <img src="images/pot.png" alt className="product__img" />
          <h3 className="product__title">Plants Pots</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <button className="button--flex product__button">
            <Checout/>
          </button>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Shovel")}>
          <div className="product__circle" />
          <img src="images/shovel.png" alt className="product__img" />
          <h3 className="product__title">Shovel</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <button className="button--flex product__button">
            <Checout/>
          </button>
        </article>
       
      </div>
    </section>
      </>
  )
}

export default Ass
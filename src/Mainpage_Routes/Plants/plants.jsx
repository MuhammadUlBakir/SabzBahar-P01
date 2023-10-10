import React from 'react'
import PageHeader from '../../Contents/PageHeader'
import { useNavigate } from 'react-router-dom'
import Checout from "remixicon-react/Search2LineIcon"
import FontLoader from 'react-google-font-loader';
import cookie from 'cookie_js'
import Pagetitle from '../../Contents/Pagetitle';
import Styled from "styled-components";
const Productres = Styled.div`
@media (max-width: 767.98px) {
  width : 330px;
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
const Test = Styled.div`
width : 50px;
`
const Plants = () => {
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
          <Pagetitle title = "Products"/>
          <Test><PageHeader /></Test>
      <Productres>
      <section className="product section container" id="products">
      <h2 className="section__title-center" style={{fontWeight : "bold"}} data-aos = "fade-left" data-aos-duration = "2000">
       Plant Categories
      </h2>
      {/* <p className="product__description">
        Here have top selected P categories from our showroom, all are in excellent 
        shape and has a long life span. Buy and enjoy best quality.
      </p> */}
      <div className="product__container grid">
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Flower")} data-aos = "fade-down" data-aos-duration = "1200">
          <div className="product__circle" />
          <img src="/images/flowerp.png"  alt className="product__img" />
          <h3 className="product__title">Flower Plants </h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <Buttonres>
          <button className="button--flex product__button">
            <Checout/> 
          </button>
          </Buttonres>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Outdoor")} data-aos = "fade-down" data-aos-duration = "2000">
          <div className="product__circle" />
          <img src="images/product2.png" alt className="product__img" />
          <h3 className="product__title">Outdoor Plants</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <Buttonres>
          <button className="button--flex product__button">
            <Checout/>
          </button>
          </Buttonres>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Indoor")} data-aos = "fade-down" data-aos-duration = "3000">
          <div className="product__circle" />
          <img src="images/product3.png" alt className="product__img" />
          <h3 className="product__title">Indoor Plant</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <Buttonres>
          <button className="button--flex product__button">
            <Checout/>
          </button>
          </Buttonres>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Succulents")} data-aos = "fade-down" data-aos-duration = "1200">
          <div className="product__circle" />
          <img src="images/product4.png" alt className="product__img" />
          <h3 className="product__title">Succulent Plant</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <Buttonres>
          <button className="button--flex product__button">
            <Checout/>
          </button>
          </Buttonres>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Nonflower")} data-aos = "fade-down" data-aos-duration = "2000">
          <div className="product__circle" />
          <img src="images/product5.png" alt className="product__img" />
          <h3 className="product__title">Non-Flower Plant</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <Buttonres>
          <button className="button--flex product__button">
            <Checout/>
          </button>
          </Buttonres>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Medicinal")} data-aos = "fade-down" data-aos-duration = "3000">
          <div className="product__circle" />
          <img src="images/product6.png" alt className="product__img" />
          <h3 className="product__title">Medicnal Plants</h3>
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

export default Plants
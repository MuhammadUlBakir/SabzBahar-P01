import React from 'react'
import PageHeader from '../../Contents/PageHeader'
import PageFooter from '../../Contents/PageFooter'
import Checout from "remixicon-react/Search2LineIcon"
import cookie from 'cookie_js'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Signin from '../../UserAuthentiaction/Signin/Signin'
import Helmet from "react-helmet";
import { useParams } from 'react-router-dom'
import PageQuestions from '../QA/PageQuestions'
import ContactPage from '../Contact/ContactPage'
const Homepage = () => {
  //----------------
  const navigate = useNavigate();
  navigate(0);
  //----------------
  const Checktoken = async (val) => {
    const token = cookie.get("Usertoken");
    if (token) {
      navigate(`/filter/${val}`);
    } else {
      navigate("/signin")
    }
  }
  //--------------------
  useEffect(() => {
  },[])
  return (
    <>
      <Helmet>
      <script src="assets/js/main.js"></script>
      </Helmet>
    <div>
        {/*==================== HEADER ====================*/}
        <PageHeader/>
  <main className="main">
    {/*==================== HOME ====================*/}
    <section className="home" id="home">
      <div className="home__container container grid">
        <img src="images/home.png" alt className="home__img" />
        <div className="home__data">
          <h1 className="home__title">
            Plants will make <br /> your life better
          </h1>
          <p className="home__description">
            Create incredible plant design for your offices or apastaments. 
            Add fresness to your new ideas.
          </p>
          <a href="#about" className="button button--flex">
            Explore <i className="ri-arrow-right-down-line button__icon" />
          </a>
        </div>
        <div className="home__social">
          <span className="home__social-follow">Follow Us</span>
          <div className="home__social-links">
            <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
              <i className="ri-facebook-fill" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
              <i className="ri-instagram-line" />
            </a>
            <a href="https://twitter.com/" target="_blank" className="home__social-link">
              <i className="ri-twitter-fill" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/*==================== ABOUT ====================*/}
    
    {/*==================== STEPS ====================*/}
    <section className="steps section container" id='about'>
      <div className="steps__bg">
        <h2 className="section__title-center steps__title">
          Steps to start your <br /> plants off right
        </h2>
        <div className="steps__container grid">
          <div className="steps__card">
            <div className="steps__card-number">01</div>
            <h3 className="steps__card-title">Choose Plant</h3>
            <p className="steps__card-description">
              We have several varieties plants you can choose from.
            </p>
          </div>
          <div className="steps__card">
            <div className="steps__card-number">02</div>
            <h3 className="steps__card-title">Place an order</h3>
            <p className="steps__card-description">
              Once your order is set, we move to the next step which is the shipping.
            </p>
          </div>
          <div className="steps__card">
            <div className="steps__card-number">03</div>
            <h3 className="steps__card-title">Get plants delivered</h3>
            <p className="steps__card-description">
              Our delivery process is easy, you receive the plant direct to your door.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/*==================== PRODUCTS ====================*/}
    <section className="product section container" id="products">
      <h2 className="section__title-center">
        Check out our <br /> Categories
      </h2>
      <p className="product__description">
        Here have top selected plants categories from our showroom, all are in excellent 
        shape and has a long life span. Buy and enjoy best quality.
      </p>
      <div className="product__container grid">
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Flower")}>
          <div className="product__circle" />
          <img src="images/med.png" style={{height : "230px" , width : "230px"}} alt className="product__img" />
          <h3 className="product__title">Flower Plants </h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <button className="button--flex product__button">
            <Checout/>
          </button>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Outdoor")}>
          <div className="product__circle" />
          <img src="images/product2.png" alt className="product__img" />
          <h3 className="product__title">Outdoor Plants</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <button className="button--flex product__button">
            <Checout/>
          </button>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Indoor")}>
          <div className="product__circle" />
          <img src="images/product3.png" alt className="product__img" />
          <h3 className="product__title">Indoor Plant</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <button className="button--flex product__button">
            <Checout/>
          </button>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Succulent")}>
          <div className="product__circle" />
          <img src="images/product4.png" alt className="product__img" />
          <h3 className="product__title">Succulent Plant</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <button className="button--flex product__button">
            <Checout/>
          </button>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Nonflower")}>
          <div className="product__circle" />
          <img src="images/product5.png" alt className="product__img" />
          <h3 className="product__title">Non-Flower Plant</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <button className="button--flex product__button">
            <Checout/>
          </button>
        </article>
        <article className="product__card" style={{cursor : "pointer"}} onClick={() => Checktoken("Medicnal")}>
          <div className="product__circle" />
          <img src="images/product6.png" alt className="product__img" />
          <h3 className="product__title">Medicnal Plants</h3>
          <span className="product__price" style={{fontSize : "13px"}}>Check Out</span>
          <button className="button--flex product__button">
            <Checout/>
          </button>
        </article>
      </div>
    </section>
          {/*==================== QUESTIONS ====================*/}
          
    
    {/*==================== CONTACT ====================*/}
    {/* <section className="contact section container" id="contact">                
      <div className="contact__container grid">
        <div className="contact__box">
          <h2 className="section__title">
            Reach out to us today <br /> via any of the given <br /> information
          </h2>
          <div className="contact__data">
            <div className="contact__information">
              <h3 className="contact__subtitle">Call us for instant support</h3>
              <span className="contact__description">
                <i className="ri-phone-line contact__icon" />
                +999 888 777
              </span>
            </div>
            <div className="contact__information">
              <h3 className="contact__subtitle">Write us by mail</h3>
              <span className="contact__description">
                <i className="ri-mail-line contact__icon" />
                user@email.com
              </span>
            </div>
          </div>
        </div>
        <form action className="contact__form">
          <div className="contact__inputs">
            <div className="contact__content">
              <input type="email" placeholder=" " className="contact__input" />
              <label htmlFor className="contact__label">Email</label>
            </div>
            <div className="contact__content">
              <input type="text" placeholder=" " className="contact__input" />
              <label htmlFor className="contact__label">Subject</label>
            </div>
            <div className="contact__content contact__area">
              <textarea name="message" placeholder=" " className="contact__input" defaultValue={""} />                              
              <label htmlFor className="contact__label">Message</label>
            </div>
          </div>
          <button className="button button--flex">
            Send Message
            <i className="ri-arrow-right-up-line button__icon" />
          </button>
        </form>
      </div>
    </section> */}
          <ContactPage/>
  </main>
        {/*==================== FOOTER ====================*/}
        <p className="footer__copy">© PLANTEX. All rigths reserved</p>

        {/* <PageFooter/> */}
  {/*=============== SCROLL UP ===============*/}
  <a href="#" className="scrollup" id="scroll-up"> 
    <i className="ri-arrow-up-fill scrollup__icon" />
  </a>
  {/*=============== SCROLL REVEAL ===============*/}
</div>
    </>
  )
}

export default Homepage
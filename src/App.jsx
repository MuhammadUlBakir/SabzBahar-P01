import React from 'react'
import PageHeader from './Contents/PageHeader'
import PageFooter from './Contents/PageFooter'
import Helmet from "react-helmet";
const App = () => {
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
        <img src="assets/img/home.png" alt className="home__img" />
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
    <section className="about section container" id="about">
      <div className="about__container grid">
        <img src="assets/img/about.png" alt className="about__img" />
        <div className="about__data">
          <h2 className="section__title about__title">
            Who we really are &amp; <br /> why choose us
          </h2>
          <p className="about__description">
            We have over 4000+ unbiased reviews and our customers 
            trust our plant process and delivery service every time
          </p>
          <div className="about__details">
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon" />
              We always deliver on time.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon" />
              We give you guides to protect and care for your plants.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon" />
              We always come over for a check-up after sale.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon" />
              100% money back guaranteed.
            </p>
          </div>
          <a href="#" className="button--link button--flex">
            Shop Now <i className="ri-arrow-right-down-line button__icon" />
          </a>
        </div>
      </div>
    </section>
    {/*==================== STEPS ====================*/}
    <section className="steps section container">
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
        Check out our <br /> products
      </h2>
      <p className="product__description">
        Here are some selected plants from our showroom, all are in excellent 
        shape and has a long life span. Buy and enjoy best quality.
      </p>
      <div className="product__container grid">
        <article className="product__card">
          <div className="product__circle" />
          <img src="assets/img/product1.png" alt className="product__img" />
          <h3 className="product__title">Cacti Plant</h3>
          <span className="product__price">$19.99</span>
          <button className="button--flex product__button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
        <article className="product__card">
          <div className="product__circle" />
          <img src="assets/img/product2.png" alt className="product__img" />
          <h3 className="product__title">Cactus Plant</h3>
          <span className="product__price">$11.99</span>
          <button className="button--flex product__button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
        <article className="product__card">
          <div className="product__circle" />
          <img src="assets/img/product3.png" alt className="product__img" />
          <h3 className="product__title">Aloe Vera Plant</h3>
          <span className="product__price">$7.99</span>
          <button className="button--flex product__button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
        <article className="product__card">
          <div className="product__circle" />
          <img src="assets/img/product4.png" alt className="product__img" />
          <h3 className="product__title">Succulent Plant</h3>
          <span className="product__price">$5.99</span>
          <button className="button--flex product__button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
        <article className="product__card">
          <div className="product__circle" />
          <img src="assets/img/product5.png" alt className="product__img" />
          <h3 className="product__title">Succulent Plant</h3>
          <span className="product__price">$10.99</span>
          <button className="button--flex product__button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
        <article className="product__card">
          <div className="product__circle" />
          <img src="assets/img/product6.png" alt className="product__img" />
          <h3 className="product__title">Green Plant</h3>
          <span className="product__price">$8.99</span>
          <button className="button--flex product__button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
      </div>
    </section>
    {/*==================== QUESTIONS ====================*/}
    <section className="questions section" id="faqs">
      <h2 className="section__title-center questions__title container">
        Some common questions <br /> were often asked
      </h2>
      <div className="questions__container container grid">
        <div className="questions__group">
          <div className="questions__item">
            <header className="questions__header">
              <i className="ri-add-line questions__icon" />
              <h3 className="questions__item-title">
                My flowers are falling off or dying?
              </h3>
            </header>
            <div className="questions__content">
              <p className="questions__description">
                Plants are easy way to add color energy and transform your 
                space but which planet is for you. Choosing the right plant.
              </p>
            </div>
          </div>
          <div className="questions__item">
            <header className="questions__header">
              <i className="ri-add-line questions__icon" />
              <h3 className="questions__item-title">
                What causes leaves to become pale?
              </h3>
            </header>
            <div className="questions__content">
              <p className="questions__description">
                Plants are easy way to add color energy and transform your 
                space but which planet is for you. Choosing the right plant.
              </p>
            </div>
          </div>
          <div className="questions__item">
            <header className="questions__header">
              <i className="ri-add-line questions__icon" />
              <h3 className="questions__item-title">
                What causes brown crispy leaves?
              </h3>
            </header>
            <div className="questions__content">
              <p className="questions__description">
                Plants are easy way to add color energy and transform your 
                space but which planet is for you. Choosing the right plant.
              </p>
            </div>
          </div>
        </div>
        <div className="questions__group">
          <div className="questions__item">
            <header className="questions__header">
              <i className="ri-add-line questions__icon" />
              <h3 className="questions__item-title">
                How do i choose a plant?
              </h3>
            </header>
            <div className="questions__content">
              <p className="questions__description">
                Plants are easy way to add color energy and transform your 
                space but which planet is for you. Choosing the right plant.
              </p>
            </div>
          </div>
          <div className="questions__item">
            <header className="questions__header">
              <i className="ri-add-line questions__icon" />
              <h3 className="questions__item-title">
                How do I change the pots?
              </h3>
            </header>
            <div className="questions__content">
              <p className="questions__description">
                Plants are easy way to add color energy and transform your 
                space but which planet is for you. Choosing the right plant.
              </p>
            </div>
          </div>
          <div className="questions__item">
            <header className="questions__header">
              <i className="ri-add-line questions__icon" />
              <h3 className="questions__item-title">
                Why are gnats flying around my plant?
              </h3>
            </header>
            <div className="questions__content">
              <p className="questions__description">
                Plants are easy way to add color energy and transform your 
                space but which planet is for you. Choosing the right plant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*==================== CONTACT ====================*/}
    <section className="contact section container" id="contact">                
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
    </section>
  </main>
        {/*==================== FOOTER ====================*/}
        <PageFooter/>
  {/*=============== SCROLL UP ===============*/}
  <a href="#" className="scrollup" id="scroll-up"> 
    <i className="ri-arrow-up-fill scrollup__icon" />
  </a>
  {/*=============== SCROLL REVEAL ===============*/}
</div>

    </>
  )
}

export default App
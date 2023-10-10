import React from 'react'
import { useState } from 'react'
import { ErrorToast, InfoToast, SuccessToast, WarningToast } from '../GlobalTostify';

const PageFooter = () => {
  const [data, Setdata] = useState("");
  const Checkdata = () => {
    if (!data) {
      ErrorToast("Enter Your Email");
      Setdata("");
    } else {
      SuccessToast("Subscribe Successfully");
    }
  }
  return (
      <>
      <footer className="footer section">
  <div className="footer__container container grid">
    <div className="footer__content">
      <a href="#" className="footer__logo">
       <img src="/images/smp3logo.png" alt="" style={{height : "50px"}}/> SabzBahar
      </a>
      <h3 className="footer__title">
        Subscribe to our newsletter <br /> to stay update
      </h3>
      <div className="footer__subscribe">
        <input type="email" placeholder="Enter your email" className="footer__input" onChange={(e) => Setdata(e.target.value)} value={data} required/>
        <button className="button button--flex footer__button" onClick={Checkdata}>
          Subscribe
          <i className="ri-arrow-right-up-line button__icon" />
        </button>
      </div>
    </div>
    <div className="footer__content">
      <h3 className="footer__title">Our Address</h3>
      <ul className="footer__data">
        <li className="footer__information">Nursery 15-A, Gulberg III,</li>
        <li className="footer__information">Lahore, Pakistan - 17000</li>
        <li className="footer__information">+92-3313505302</li>
      </ul>
    </div>
    <div className="footer__content">
      <h3 className="footer__title">Contact Us</h3>
      <ul className="footer__data">
        <li className="footer__information">+92 3313505302</li>
        <div className="footer__social">
          <a href="https://www.facebook.com/" className="footer__social-link">
            <i className="ri-facebook-fill" />
          </a>
          <a href="https://www.instagram.com/" className="footer__social-link">
            <i className="ri-instagram-line" />
          </a>
          <a href="https://twitter.com/" className="footer__social-link">
            <i className="ri-twitter-fill" />
          </a>
        </div>
      </ul>
    </div>
    <div className="footer__content">
      <h3 className="footer__title">
        We accept all credit cards
      </h3>
      <div className="footer__cards">
        <img src="/images/card1.png" alt className="footer__card" />
        <img src="/images/card2.png" alt className="footer__card" />
        <img src="/images/card3.png" alt className="footer__card" />
        <img src="/images/card4.png" alt className="footer__card" />
      </div>
    </div>
  </div>
  <p className="footer__copy">© MJ Solutions. All rigths reserved</p>
</footer>

      </>
  )
}

export default PageFooter

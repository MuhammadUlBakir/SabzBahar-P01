import React from "react";
import Pagetitle from "../../Contents/Pagetitle";
import { useContext } from "react";
import { ThemeContext } from "../Test/Testpage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components";
const Aboutres = Styled.div`
@media (max-width: 767.98px) {
width : 300px;
margin-left : 30px;
}
`
const About = () => {
  const Test = localStorage.getItem("cartData10");
  const Data = JSON.parse(Test);
  //------------------
  const navigate = useNavigate();
  //------------------
  console.log(Data);
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <>
      <Pagetitle title = {"AboutPage"} />
      <Aboutres>
      <section className="about section container" id="about" >
        <div className="about__container grid">
          <img src="images/about.png" alt className="about__img" data-aos = "fade-right" data-aos-duration = "3000" />
          <div className="about__data" data-aos = "fade-left" data-aos-duration = "3000">
            <h2 className="section__title about__title">
              Who we really are <br /> why choose us 
            </h2>
            <p className="about__description">
              We have over 4000+ unbiased reviews and our customers trust our
              plant process and delivery service every time
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
            <a href="#" className="button--link button--flex" onClick={() => navigate("/product")}>
              Shop Now <i className="ri-arrow-right-down-line button__icon" />
            </a>
          </div>
        </div>
      </section>
      </Aboutres>
    </>
  );
};

export default About;

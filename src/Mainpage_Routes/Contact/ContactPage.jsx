import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagetitle from "../../Contents/Pagetitle";
import { ErrorToast, SuccessToast } from "../../GlobalTostify";
import Styled from "styled-components";
const Test = Styled.div`
@media (max-width: 767.98px) {
width : 300px;
}
`
const ContactPage = () => {
  const [data, Setdata] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();
  const Inputval = (e) => {
    const { name, value } = e.target;
    Setdata((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const ContactUs = () => {
    const { email, subject, message } = data;
    if (!email || !subject || !message) {
      ErrorToast("Please fill all the fields");
    } else {
      const ContactData = localStorage.setItem( "ContactData" , [email , message , subject]);
      SuccessToast("Submit Successfully")
      setTimeout(() => navigate("/"), 3000);
      
    }
  };
  return (
    <>
      <Pagetitle title = {"Contact-Us"} />
      <Test>
      <section className="contact section container" id="contact">
        <div className="contact__container grid">
          <div className="contact__box" data-aos = "fade-right" data-aos-duration = "3000">
            <h2 className="section__title">
              Reach out to us today <br /> via any of the given <br />{" "}
              information
            </h2>
            <div className="contact__data">
              <div className="contact__information">
                <h3 className="contact__subtitle">
                  Call us for instant support
                </h3>
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
          <form action className="contact__form" onSubmit={(e) => e.preventDefault()} data-aos = "fade-left" data-aos-duration = "3000">
            <div className="contact__inputs">
              <div className="contact__content">
                <input
                  type="email"
                  className="contact__input"
                  onChange={Inputval}
                  name="email"
                  value={data.email}
                  required
                />
                <label htmlFor className="contact__label">
                  Email{" "}
                </label>
              </div>
              <div className="contact__content">
                <input
                  type="text"
                  placeholder=" "
                  className="contact__input"
                  onChange={Inputval}
                  value={data.subject}
                  name="subject"
                  required
                />
                <label htmlFor className="contact__label">
                  Subject
                </label>
              </div>
              <div className="contact__content contact__area">
                <textarea
                  name="message"
                  placeholder=" "
                  className="contact__input"
                  onChange={Inputval}
                  value={data.message}
                  required
                />
                <label htmlFor className="contact__label">
                  Message
                </label>
              </div>
            </div>
            <button className="button button--flex" onClick={ContactUs}>
              Send Message
              <i className="ri-arrow-right-up-line button__icon" />
            </button>
          </form>
        </div>
      </section>
     </Test>
      {/* -------------- */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default ContactPage;

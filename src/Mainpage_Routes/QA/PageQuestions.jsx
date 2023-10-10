import React from "react";
import Pagetitle from "../../Contents/Pagetitle";
import { useState } from "react";
import Styled from "styled-components";
const Aboutres = Styled.div`
@media (max-width: 767.98px) {
width :40px;
// position : fixed;
}
`
const Faq = Styled.div`
@media (max-width: 767.98px) {

width : 300px;
position : relative;
left : 65px;
border-radius : 20px;
}

`
const PageQuestions = () => {
    const [toogle, Settoogle] = useState({
        open: false,
        qnum : 0
    });
  return (
      <>
          <Pagetitle title = {"FAQ"} />
          <Aboutres>
              <Faq>
              <section class="questions section" id="faqs">
                <h2 class="section__title-center questions__title container" data-aos = "fade-right" data-aos-duration = "2000">
                    Some common questions <br/> were often asked
                </h2>

                <div class="questions__container container grid">
                    <div class="questions__group">
                        <div class="questions__item" data-aos = "fade-right" data-aos-duration = "3000">
                            <header class="questions__header" onClick={() => Settoogle({open : true , qnum : 1})}>
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title" >
                                    My flowers are falling off or dying?
                                </h3>
                            </header>

                           {toogle.open === true && toogle.qnum === 1 ? <> <div >
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div></> : "" }
                        </div>

                        <div class="questions__item" data-aos = "fade-right" data-aos-duration = "3000">
                            <header class="questions__header" onClick={() => Settoogle({open : true , qnum : 2})}>
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                  What causes leaves to become pale? 
                                </h3>
                            </header>

                            {toogle.open === true && toogle.qnum === 2 ? <><div >
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div></> : ""}
                        </div>

                        <div class="questions__item" data-aos = "fade-right" data-aos-duration = "3000">
                            <header class="questions__header" onClick={() => Settoogle({open : true , qnum : 3})}>
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    What causes brown crispy leaves?
                                </h3>
                            </header>
                            {toogle.open === true && toogle.qnum === 3 ? <><div >
                                <div>
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                               </div></> : ""}
                            
                        </div>
                    </div>

                    <div class="questions__group">
                        <div class="questions__item" data-aos = "fade-left" data-aos-duration = "3000">
                            <header class="questions__header" onClick={() => Settoogle({open : true , qnum : 4})}>
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    How do i choose a plant?
                                </h3>
                            </header>
                            {toogle.open === true && toogle.qnum === 4 ? <><div >
                                <div >
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                               </div></> : ""}
                           
                        </div>

                        <div class="questions__item" data-aos = "fade-left" data-aos-duration = "3000">
                            <header class="questions__header" onClick={() => Settoogle({open : true , qnum : 5})}>
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    How do I change the pots?
                                </h3>
                            </header>
                            {toogle.open === true && toogle.qnum === 5 ? <><div >
                                <div >
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                               </div></> : ""}
                            
                        </div>

                        <div class="questions__item" data-aos = "fade-left" data-aos-duration = "3000">
                            <header class="questions__header" onClick={() => Settoogle({open : true , qnum : 6})}>
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    Why are gnats flying around my plant?
                                </h3>
                            </header>
                            {toogle.open === true && toogle.qnum === 6 ? <><div >
                                <div >
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your 
                                    space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                               </div></> : ""}
                                
                        </div>
                    </div>
                </div>
            </section>
         </Faq>
          </Aboutres>
    </>
  );
};

export default PageQuestions;

import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
const PageFooter2 = () => {
  useEffect(() => {
    Aos.init();
  },[])
  return (
      <>
      <footer className="footer section" data-aos = "fade-right" data-aos-duration = "3000">
      <p className="footer__copy">© Muhammad-ul-Bakir Jamali Solutions All rigths Reserved</p>
</footer>

      </>
  )
}

export default PageFooter2

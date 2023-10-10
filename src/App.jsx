import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Helmet from "react-helmet"
import Pagebound2 from './PageRoutes/Pagebound';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <>
      <Helmet>
        <script type="module" src="../assets/js/scrollreveal.min.js">

      </script>

      </Helmet>
      <Pagebound2/>

    </>
  )
}

export default App
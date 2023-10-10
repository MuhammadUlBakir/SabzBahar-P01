import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Helmet from "react-helmet"
import Pagebound2 from './PageRoutes/Pagebound';
const App = () => {
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
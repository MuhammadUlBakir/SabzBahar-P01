import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../Contents/PageHeader";
import PageFooter from "../Contents/PageFooter";
import Styled from "styled-components";
const Test = Styled.div`
@media (max-width: 767.98px) {
width : 100px;
}
`
const Masterpage = () => {
    return (
        <>
            <Test><PageHeader/></Test>
            <Outlet />
            <PageFooter/>
        </>
  )
};

export default Masterpage;

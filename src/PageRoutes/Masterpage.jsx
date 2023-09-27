import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../Contents/PageHeader";
import PageFooter from "../Contents/PageFooter";

const Masterpage = () => {
    return (
        <>
            <PageHeader/>
            <Outlet />
            <PageFooter/>
        </>
  )
};

export default Masterpage;

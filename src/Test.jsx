import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Test = () => {
    const [data, Setdata] = useState([]);
    const [sdata, Setsdata] = useState([]);
    const [pdata, Setpdata] = useState("");
    //-------------------
    const Productdata = async () => {
        try {
            const pdata = await axios.get("https://good-cyan-angler-wrap.cyclic.cloud/api/getproduct")
            Setdata(pdata.data.Allproduct);
        } catch (error) {
            console.log(error);
        }
    };
    const Getalldata = () => {
        const Storeddata = JSON.parse(localStorage.getItem("add102"));
        Storeddata ? Setsdata(Storeddata) : []
    }
    const AddProd = (val , ind) => {
        const FindIndex = sdata.findIndex((item) => item.id === val._id);
        if (FindIndex !== -1) {
            sdata[FindIndex].qty += 1;
            alert("Product Quantity Updated")
        } else {
            const newdata = { id: val._id, Pname: val.productname, Category: val.productcategory , qty : 1 };
            sdata.push(newdata);
            alert("New Product Created ")
            
        }
        localStorage.setItem("add102", JSON.stringify(sdata));
    }
    const Testfunc = () => {
        Setsdata([]);
        localStorage.removeItem("add102")
    }
    
    useEffect(() => {
        Productdata();
        Getalldata();
    },[])
  return (
      <>
          <div style={{ textAlign: "center" }}>
          <button style={{ marginTop : "40px" , backgroundColor : "orangered"}} className='button' onClick={() => Testfunc()}>Remove All </button>
         </div>
          {data.map((elm, ind) => {
              return (
                  <>
                      <div style={{ textAlign: "center" }}>
                          <button className='button' style={{width : "190px" , marginTop : "8px"}} onClick={() => AddProd(elm , ind)}>{elm.productname}</button>
                  </div>
                  </>
        )
    })}
    </>
  )
}

export default Test
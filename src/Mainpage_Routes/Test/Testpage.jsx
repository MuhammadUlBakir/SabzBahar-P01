import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Testpage = () => {
  const { cname } = useParams();
    const [data, Setdata] = useState([]);
  const fetchData = async () => {
    if (cname) {
      try {
        const productdata = await axios.get("https://tiny-pink-loafers.cyclic.app/api/getproduct");
          const Filterproduct = productdata.data.Productdata.filter(elm => elm.productcategory === cname);
          Setdata(Filterproduct);
        // Do something with Filterproduct
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [cname]);

  return (
    <>
          {data.map((elm, ind) => {
              return (
                  <>
                      <div>
                          <h1>{`Productname : ${elm.productname}`}</h1>
                          <h1>Product Image</h1><span><img src={elm.mainimage} style={{height : "200px"}}/></span>
                      </div>
                  </>
         )
     })}
    </>
  );
};

export default Testpage;

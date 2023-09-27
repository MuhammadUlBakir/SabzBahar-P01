import React from "react";
import Styled from "styled-components";
import Pageheader from "../../Contents/PageHeader";
import PageFooter2 from "../../Contents/PageFooter2";
import PageFooter from "../../Contents/PageFooter";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const StyledDiv = Styled.div`
@import url("https://fonts.googleapis.com/css?family=Fjalla+One|Montserrat:300,400,700,800|Open+Sans:300");

main {
  max-width: 720px;
  margin: 5% auto;
}

.card {
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
  transition: 200ms;
  background: #fff;
}
.card .card__title {
  display: flex;
  align-items: center;
  padding: 30px 40px;
}
.card .card__title h3 {
  flex: 0 1 200px;
  text-align: right;
  margin: 0;
  color: #252525;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
}
.card .card__title .icon {
  flex: 1 0 10px;
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);  color: #fff;
  padding: 10px 10px;
  transition: 200ms;
}
.card .card__title .icon > a {
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
}
.card .card__title .icon:hover {
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);}
.card .card__body {
  padding: 0 40px;
  display: flex;
  flex-flow: row no-wrap;
  margin-bottom: 25px;
}
.card .card__body > .half {
  box-sizing: border-box;
  padding: 0 15px;
  flex: 1 0 50%;
}
.card .card__body .featured_text h1 {
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  font-size: 64px;
  line-height: 50px;
  color: #181e28;
}
.card .card__body .featured_text p {
  margin: 0;
  padding: 0;
}
.card .card__body .featured_text p.sub {
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  text-transform: uppercase;
  color: #686e77;
  font-weight: 300;
  margin-bottom: 5px;
}
.card .card__body .featured_text p.price {
  font-family: "Fjalla One", sans-serif;
  color: #252525;
  font-size: 26px;
}
.card .card__body .image {
  padding-top: 15px;
  width: 100%;
}
.card .card__body .image img {
  display: block;
  max-width: 100%;
  height: auto;
}
.card .card__body .description {
  margin-bottom: 25px;
}
.card .card__body .description p {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  line-height: 27px;
  font-size: 16px;
  color: #555;
}
.card .card__body span.stock {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #a1cc16;
}
.card .card__body .reviews .stars {
  display: inline-block;
  list-style: none;
  padding: 0;
}
.card .card__body .reviews .stars > li {
  display: inline-block;
}
.card .card__body .reviews .stars > li .fa {
  color: #f7c01b;
}
.card .card__body .reviews > span {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  margin-left: 5px;
  color: #555;
}
.card .card__footer {
  padding: 30px 40px;
  display: flex;
  flex-flow: row no-wrap;
  align-items: center;
  position: relative;
}
.card .card__footer::before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 40px;
  width: calc(100% - 40px);
  height: 3px;
  background: #115dd8;
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);}
.card .card__footer .recommend {
  flex: 1 0 10px;
}
.card .card__footer .recommend p {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  color: #555;
}
.card .card__footer .recommend h3 {
  margin: 0;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: green;
}
.card .card__footer .action button {
  cursor: pointer;
  border: 1px solid green;
  padding: 14px 30px;
  border-radius: 200px;
  color: green;
  background: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  transition: 200ms;
}
.card .card__footer .action button:hover {
  background: #fff;
  color: #115dd8;
}
`;
const Product_details = () => {
  const { id } = useParams();
  const [data, Setdata] = useState([]);
  const Testfunc = async () => {
    try {
      const Getproduct = await axios.get("https://good-cyan-angler-wrap.cyclic.cloud/api/getproduct");
      const Filterproduct = Getproduct.data.Allproduct.filter(elm => elm._id === id);
      Setdata(Filterproduct)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (id) {
      Testfunc();
  }
  },[])
  return (
    <>
      <StyledDiv>
        <body>
          <main>
            <Pageheader />
            {/* <h1 className='text-center' style={{ fontWeight : "bolder" , fontSize : "40px" , marginTop : "-30px"}}>Product Deatail</h1> */}
            {data.map((elm, ind) => {
              return (
                <>
                 <div className="card">
              <div className="card__title">
                <div className="icon">
                  <a href="#">
                    <i className="fa fa-arrow-left" />
                  </a>
                </div>
                <h3>Product Deatail</h3>
              </div>
              <div className="card__body">
                <div className="half">
                  <div className="featured_text">
                          <h1>{elm.productname}</h1>
                          <p className="sub">{elm.productcategory} Plant</p>
                          <p className="price">Rs{elm.productprice}</p>
                  </div>
                  <div className="image">
                    <img
                      src={elm.secondaryimage.url}
                      alt
                    />
                  </div>
                </div>
                <div className="half">
                        <div className="description">
                          <h4 style={{fontWeight : "bolder"}}>Description : </h4>
                    <p>
                     {elm.longdescription}
                    </p>
                  </div>
                  <span className="stock">
                    <i className="fa fa-pen" /> In stock
                  </span>
                  <div className="reviews">
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                    <span>(64 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="card__footer">
                <div className="recommend">
                  <p>Category of</p>
                        <h3>{elm.productcategory}s Plant</h3>
                </div>
                <div className="action">
                  <button type="button" style={{fontWeight : "bolder"}}>Add to cart</button>
                </div>
              </div>
            </div>
                </>
             )
           })}
          </main>
        </body>
      </StyledDiv>
      <PageFooter />
    </>
  );
};

export default Product_details;

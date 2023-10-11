import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Errorstyled = styled.div`
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: calc(4em + 10vw);
    text-align: center;
    color: #fff;
    background-image: linear-gradient(-225deg, #cf2778, #7c64d5, #4cc3ff);
    overflow: hidden;
}

h1 {
    font-weight: 700;
    text-shadow: 0 0 0.1em rgba(0, 0, 0, 0.5);
}

h1 span::after {
    content: '🕛';
    font-size: 0.9em;
    animation: clock 5s linear infinite;
}

h2 {
    font-size: 0.15em;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 1em;
    text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.5);
}

.apple-os h1 span {
    margin: 0 0.1em;
}

.apple-os h2 {
    margin-top: 0.4em;
}

@keyframes clock {
    8.333% {
        content: '🕐';
    }

    16.666% {
        content: '🕑';
    }

    25% {
        content: '🕒';
    }

    33.333% {
        content: '🕓';
    }

    41.666% {
        content: '🕔';
    }

    50% {
        content: '🕕';
    }

    58.333% {
        content: '🕖';
    }

    66.666% {
        content: '🕗';
    }

    75% {
        content: '🕘';
    }

    83.333% {
        content: '🕙';
    }

    91.666% {
        content: '🕚';
    }
}
`;
const CustomStyle = styled.div`
position : relative;
left : 690px;
top : 200px;
height : 700px;
width : 700px;
h1 {
    font-size : 200px;
};
h2 {
    font-size : 30px;
    position : relative;
    left : 135px;
    top : -30px;
}
@media (max-width: 767.98px) {
    h1 {
        font-size : 100px;
        position : relative;
        left : -655px;
    };
    h2 {
        position : relative;
        left : -615px;
        font-size : 20px;
        top : -20px;
    };
}
@media (max-width: 480px) {
position : relative;
margin-left : 30px;
}
@media (max-width: 350px) {
    position : relative;
    margin-left : 20px;
    }
`
const Buttonres = styled.div`
position : relative;
left : 190px;
@media (max-width: 767.98px) {
position : relative;
left : -595px;
}
`
const Errorpage = () => {
    const navigate = useNavigate();
    //----------------
  return (
    <>
      <Errorstyled>
              <CustomStyle>
              <h1 aria-label="408 Error">4<span></span>4</h1>
                  <h2>Page Not Found!</h2>
                  <Buttonres><button style={{height : "40px" , width : "140px" , backgroundColor : "#3e6553" , color : "white" , borderRadius : "7px"}} onClick={() => navigate("/")}>Go Back</button></Buttonres>
    </CustomStyle>
      </Errorstyled>
    </>
  );
};

export default Errorpage;

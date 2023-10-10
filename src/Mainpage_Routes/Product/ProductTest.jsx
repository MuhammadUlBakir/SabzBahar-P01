import React from 'react'
import Plants from '../Plants/plants'
import Ass from '../Accessories/Ass'
import PageFooter2 from '../../Contents/PageFooter2'
import Styled from "styled-components";
const Productres = Styled.div`
@media (max-width: 767.98px) {
  width : 30px;
  margin-left : 20px;
  }
`
const ProductTest = () => {
    return (
        <>
            <Productres>
            <Plants />
            <div style={{marginTop : "-80px"}}>
            <Ass/>
            </div>
            <PageFooter2/>
            </Productres>
        </>
  )
}

export default ProductTest
import React from 'react'
import Plants from '../Plants/plants'
import Ass from '../Accessories/Ass'
import PageFooter2 from '../../Contents/PageFooter2'

const ProductTest = () => {
    return (
        <>
            <Plants />
            <div style={{marginTop : "-80px"}}>
            <Ass/>
            </div>
            <PageFooter2/>
        </>
  )
}

export default ProductTest
import React from 'react'
import './style.css'
import '../OverlayComponent.css'
import PageHeader from '../../Contents/PageHeader'
import { useNavigate } from 'react-router-dom'
import PageFooter2 from '../../Contents/PageFooter2'
function Product_page() {
    const navigate = useNavigate();
    return (
        <>
            <PageHeader/>
            <div className='flex-col md:flex-row mt-[8rem] flex w-full justify-center items-center md:mx-0 px-5 md:px-2'>
                {/* Plants Category Card */}
                <div className='shadow-2xl h-[360px] lg:mx-5 md:mx-4 mb-20 md:w-[350px]'>
                    <div className="relative overflow-hidden w-max h-full cursor-pointer" onClick={() => navigate("/plants")}>
                        <div className="hovering absolute inset-0 flex items-center justify-center opacity-10 z-10 bg-black hover:opacity-70 transition-opacity">
                            <span className="bg-white text-5xl font-bold text-black mix-blend-screen px-2 py-1 uppercase">Plants</span>
                        </div>
                        <img
                            src={"data:image/jpeg;base64,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"}
                            alt="Plant"
                            className="transform transition-transform duration-300 h-full object-cover w-[350px]"
                        />
                    </div>
                    <div className='py-3 font-bold font-mono text-2xl text-center w-full' >PLANTS</div>
                </div>

                {/* Accessories Card */}
                <div className='shadow-2xl h-[360px] lg:mx-5 md:mx-4 mb-20 md:w-[350px]' onClick={() => navigate("/ass")}>
                    <div className="relative overflow-hidden w-max h-full cursor-pointer ">
                        <div className="hovering absolute inset-0 flex items-center justify-center opacity-5 z-10 bg-black hover:opacity-70 transition-opacity">
                            <span className="bg-white text-4xl font-bold text-black mix-blend-screen px-2 py-1 uppercase">Accessories</span>
                        </div>
                        <img
                            src='/images/ass.png'
                            alt="Plant"
                            className="transform transition-transform duration-300 h-full object-cover w-[350px]"
                        />
                    </div>
                    <div className='py-3 font-bold font-mono text-2xl text-center uppercase w-full'>Accessories</div>
                </div>
            </div>
            <PageFooter2/>
        </>
    )
}

export default Product_page

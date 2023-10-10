import React from 'react';
import './style.css';
import '../OverlayComponent.css';
import PageHeader from '../../Contents/PageHeader';
import { useNavigate } from 'react-router-dom';
import PageFooter2 from '../../Contents/PageFooter2';
import Pagetitle from '../../Contents/Pagetitle';

function Product_page() {
  const navigate = useNavigate();

  const cardStyles = {
    borderRadius: '10px',
    overflow: 'hidden',
  };

  return (
    <>
      <Pagetitle title = {"Products"} />
      <PageHeader />
      <div className='flex-col md:flex-row mt-32 flex w-full justify-center items-center md:mx-0 px-5 md:px-2'>
        {/* Plants Category Card */}
        <div className='shadow-2xl h-96 lg:mx-5 md:mx-4 mb-20 md:w-96 rounded-lg' style={cardStyles}>
          <div className="relative overflow-hidden w-max h-full cursor-pointer" onClick={() => navigate("/plants")}>
            <div className="hovering absolute inset-0 flex items-center justify-center opacity-10 z-10 bg-black hover:opacity-70 transition-opacity">
              <span className="bg-white text-5xl font-bold text-black mix-blend-screen px-2 py-1 uppercase">Plants</span>
            </div>
            <img
              src={"/images/plantp.jpg"}
              alt="Plant"
              className="transform transition-transform duration-300 h-full object-cover w-96"
            />
          </div>
          <div className='py-3 font-bold font-mono text-2xl text-center w-full'>PLANTS</div>
        </div>

        {/* Accessories Card */}
        <div className='shadow-2xl h-96 lg:mx-5 md:mx-4 mb-20 md:w-96 rounded-lg' style={cardStyles}>
          <div className="relative overflow-hidden w-max h-full cursor-pointer" onClick={() => navigate("/ass")}>
            <div className="hovering absolute inset-0 flex items-center justify-center opacity-10 z-10 bg-black hover:opacity-70 transition-opacity">
              <span className="bg-white text-5xl font-bold text-black mix-blend-screen px-2 py-1 uppercase">Accessories</span>
            </div>
            <img
              src={"/images/ass.png"}
              alt="Plant"
              className="transform transition-transform duration-300 h-full object-cover w-96"
            />
          </div>
          <div className='py-3 font-bold font-mono text-2xl text-center w-full'>PLANTS</div>
        </div>

      </div>
      <PageFooter2 />
    </>
  );
}

export default Product_page;

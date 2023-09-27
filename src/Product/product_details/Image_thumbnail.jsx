import React, { useState } from 'react';
import '../OverlayComponent.css';
import './style.css'

function Image_thumbnail({ product }) {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };
    return (
        <>
            <div className="flex-col-reverse flex w-full sm:pr-5">
                <div className="sm:w-full  object-center border  rounded-xl border-black mb-1 overflow-hidden">
                    <img src={selectedImage} alt="Selected Product" className={`sm:w-full hover:scale-[1.2] overflow-hidden cursor-pointer bg-white sm:h-[280px] h-[240px] mx-auto lg:h-[450px] rounded-xl transition-all ${selectedImage ? 'opacity-100' : 'opacity-0'
                        }`} />
                </div>
            </div>
        </>
    )
}

export default Image_thumbnail

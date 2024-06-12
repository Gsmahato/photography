import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import p1 from '../assets/p1.jpg.webp';
import p2 from '../assets/p2.jpg.webp';
import p3 from '../assets/p3.jpg.webp';
import p4 from '../assets/p4.jpg.webp';
import p5 from '../assets/p5.jpg.webp';
import p6 from '../assets/p6.jpg.webp';
import p7 from '../assets/p7.jpg.webp';
import p8 from '../assets/p8.jpg.webp';
import p9 from '../assets/p9.jpg.webp';
import p10 from '../assets/p10.jpg.webp';
import p11 from '../assets/p11.jpg.webp';
import p12 from '../assets/p12.jpg.webp';
import p13 from '../assets/p13.jpg.webp';
import p14 from '../assets/p14.jpg.webp';
import p15 from '../assets/p15.jpg.webp';
import p16 from '../assets/p16.jpg.webp';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="w-full py-24 bg-black/85">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div className="text-center text-white px-4 pb-12 mb-6">
                        <h1 className='text-3xl md:text-4xl font-bold mb-6'>My Recent Photos</h1>
                        <p className='text-base md:text-lg text-white/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        download={false}
                        zoom={false}
                    >
                        {[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16].map((image, index) => (
                            <a href={image} key={index} className="block mb-4">
                                <img alt={`img${index + 1}`} src={image} className="w-full h-auto object-cover" />
                            </a>
                        ))}
                    </LightGallery>
                </div>
            </div>
        </div>
    );
}

export default Gallery;

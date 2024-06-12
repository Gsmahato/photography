import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

function BannerArea() {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, 4000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <section className="banner-area relative mt-[-70px] block h-screen group">
      <div className="h-full w-full relative overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/20 bg-opacity-50 pt-24 md:pt-[450px] md:pl-[600px] md:pr-48 sm:pt-48">
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 uppercase">wildlife photography</h2>
              <p className="text-white text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
        <div
          className="hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={goToPrevImage}
        >
          <ChevronLeft size={30} />
        </div>
        <div
          className="hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={goToNextImage}
        >
          <ChevronRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default BannerArea;

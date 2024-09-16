import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Devices from './Devices'; 
import '../Home/Doctor/DoctorsCarousel.css'; // Import CSS file

const DevicesCarousel = ({ devices }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAverage, setIsAverage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
      setIsAverage(window.innerWidth > 768 && window.innerWidth <= 1200); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed of transition
    slidesToShow: isMobile ? 1 : isAverage ? 2 : 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500 // Set autoplay speed to 2.5 seconds
  };

  return (
    <div className="devices-carousel-container">
      <Slider {...settings}>
        {devices.map((device) => (
          <div key={device.id}>
            <Devices device={device} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DevicesCarousel;

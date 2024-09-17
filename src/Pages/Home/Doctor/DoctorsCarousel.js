import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Doctor from './Doctor'; // Doctor component
import './DoctorsCarousel.css'; // Import CSS file

const DoctorsCarousel = ({ doctors }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAverage, setIsAverage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Breakpoint for mobile
      setIsAverage(window.innerWidth > 768 && window.innerWidth <= 1200); // Breakpoint for average
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
    speed: 1000, // Speed of transition
    slidesToShow: isMobile ? 1 : isAverage ? 2 : 4, // Adjust the number of slides based on screen size
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500 // Set autoplay speed to 2.5 seconds
  };

  return (
    <div className="doctors-carousel">
      <Slider {...settings}>
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-item">
            <Doctor doctor={doctor} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DoctorsCarousel;

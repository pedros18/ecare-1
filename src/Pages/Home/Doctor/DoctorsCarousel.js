import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Doctor from './Doctor'; // Doctor component
import './DoctorsCarousel.css'; // Import CSS file

const DoctorsCarousel = ({ doctors }) => {
  const [isMobile, setIsMobile] = useState(false);
<<<<<<< HEAD
  const [isAverage, setIsAverage] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
      setIsAverage(window.innerWidth > 768 && window.innerWidth <= 1200); // Adjust the breakpoint as needed
    };



=======

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

>>>>>>> origin/main
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
<<<<<<< HEAD
    slidesToShow: isMobile ? 1 : isAverage ? 2 : 4,
=======
    slidesToShow: 4,
>>>>>>> origin/main
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500 // Set autoplay speed to 3 seconds
  };

  return (
    <div>
<<<<<<< HEAD
      <Slider {...settings}>
        {doctors.map((doctor) => (
          <div key={doctor.id}>
            <Doctor doctor={doctor} />
          </div>
        ))}
      </Slider>
=======
      {isMobile ? (
        <div className="doctors-carousel">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-item">
              <Doctor doctor={doctor} />
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <Doctor doctor={doctor} />
            </div>
          ))}
        </Slider>
      )}
>>>>>>> origin/main
    </div>
  );
};

export default DoctorsCarousel;

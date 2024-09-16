<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServicesSection.css"; // Import CSS file

const ServicesSection = () => {
  const [services] = useServices();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed of transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set autoplay speed to 3 seconds
  };
=======
import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const ServicesSection = () => {
  const [services] = useServices();
>>>>>>> origin/main

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">
        <i className="fas fa-flask"></i> OUR MAIN SERVICES
      </h2>
<<<<<<< HEAD
      <p className="text-center fs-5">
        Human care is more than healthcare. We prefer quality over anything.
      </p>
      <div className="container">
        {isMobile ? (
          <Slider {...settings}>
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="service-item">
                <Service service={service} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="row g-3">
            {services.slice(0, 6).map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        )}
        {!isMobile && (
          <Link to="/services" className="text-decoration-none">
            <button className="btn btn-secondary d-block mx-auto">
              More Services
            </button>
          </Link>
        )}
=======
      <p className="text-center fs-5">Human care is more than healthcare. We prefer quality over anything.</p>
      <div className="container">
        <div className="row g-3">
          {services.slice(0, 6).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <Link to="/services" className="text-decoration-none">
          <button className="btn btn-secondary d-block mx-auto">More Services</button>
        </Link>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default ServicesSection;

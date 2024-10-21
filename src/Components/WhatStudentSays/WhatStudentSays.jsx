import React from "react";
import Slider from "react-slick";
import "./studentsays.css";
import student1 from "../../Images/testimonial1.jpg"; // Ensure this path is correct

const WhatStudentSays = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768, // Screens smaller than 768px (tablets)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Screens smaller than 480px (mobile phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Andre Lukakku",
      role: "Student",
      feedback:
        "Cras ut ipsum et erat accumsan aliquam. Cras feugiat eu dolor a imperdiet. Vestibulum ornare, nunc a pulvinar pellentesque, mi ipsum elementum velit, lobortis convallis lacus ipsum eget nisi.",
      image: student1,
    },
    {
      name: "Lubaba Hike",
      role: "PHP Student",
      feedback:
        "Vestibulum ornare, nunc a pulvinar pellentesque, mi ipsum elementum velit, lobortis convallis lacus ipsum eget nisi. Mauris eget est lorem praesent et metus laoreet.",
      image: student1,
    },
    {
      name: "John Doe",
      role: "React Student",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      image: student1,
    },
    {
      name: "Jane Smith",
      role: "UI/UX Student",
      feedback:
        "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      image: student1,
    },
  ];

  return (
    <>
      <div className="studentsays">
        <div className="overlaystudent">
          <div className="container py-5">
            <div className="text-center text-white mb-5">
              <h2>
                <b>What Students Say</b>
              </h2>
              <p>
                Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.
                Sed nec molestie justo.
              </p>
            </div>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3">
                  <div
                    className="testimonial-card p-4"
                    style={{
                      backgroundColor: "rgb(23 31 50 / 55%)",
                      borderRadius: "8px",
                    }}
                  >
                    <div className="quote d-flex justify-content-center">
                      <i
                        style={{
                          color: "hsl(14 98% 57% / 1)",
                          fontSize: "80px",
                        }}
                        className="bi bi-quote"
                      ></i>
                    </div>
                    <p className="mb-4">{testimonial.feedback}</p>
                    <div className="testimonial d-flex align-items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small>{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatStudentSays;

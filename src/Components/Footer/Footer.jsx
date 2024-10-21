import React from "react";
import "./Footer.css"; // Import the CSS file for custom styles if needed
import insta1 from "../../Images/footer1.png";
import insta2 from "../../Images/footer2.png";
import insta3 from "../../Images/footer3.png";
import insta4 from "../../Images/footer4.png";
import insta5 from "../../Images/footer5.png";
import insta6 from "../../Images/footer6.png";
import insta7 from "../../Images/footer7.png";
import insta8 from "../../Images/footer8.png";
import insta9 from "../../Images/footer9.png";
const Footer = () => {
  const images = [
    { src: insta1 },
    { src: insta2 },
    { src: insta3 },
    { src: insta4 },
    { src: insta5 },
    { src: insta6 },
    { src: insta7 },
    { src: insta8 },
    { src: insta9 },
  ];

  return (
    <>
      <div className="container">
        <div className="footertopSection">
          <div className="row">
            <div className="col-md-3">
              <h5>
                <b>Address</b>
              </h5>
              <p>1. 315, Daroga Market, Burari Chowk, 1st floor, Burari Delhi-84</p>
              <p className="m-0">2. Main Bus Stand, Nathupura , Burari Delhi -84</p>
            </div>
            <div className="col-md-3">
              <h5>
                <b>Email</b>
              </h5>
              <p>
                <a className="text-white text-decoration-none" href="">
                  support@education.com
                </a>
                <br />
                <a className="text-white text-decoration-none" href="">
                  info@education.com
                </a>
              </p>
            </div>
            <div className="col-md-2">
              <h5>
                <b>Phone</b>
              </h5>
              <p>
                <a className="text-white text-decoration-none" href="tel:+91">+44 44859 4875</a>
                <br />
                <a className="text-white text-decoration-none" href="tel:+91">+44 44859 4875</a>
              </p>
            </div>
            <div className="col-md-4">
              <h5>
                <b>Approval</b>
              </h5>
             <p className="m-0">UGC ENTITLED</p>
             <p className="m-0">AICTE APPROVED</p>
             <p className="m-0">MEMBER OF DISTANCE EDUCATION COUNCIL</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-white">
        <div className="container">
          {/* Upper Section */}

          {/* Lower Section */}
          <div className="row">
            {/* About Us */}
            <div className="col-md-3 mb-4">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="social-icons">
                <a href="#" className="text-white me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Menu */}
            <div className="col-md-2 mb-4">
              <h5>Quick Menu</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Instagram Feed */}
            <div className="col-md-4 mb-4">
              <h5>Instagram Feed</h5>
              <div className="row">
                {images.map((item, index) => (
                  <div className="col-4 mb-2" key={index}>
                    <img
                      src={item.src}
                      alt={`img${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <h5>Newsletter</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <form>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-primary w-100">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

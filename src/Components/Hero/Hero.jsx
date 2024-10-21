import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="container-fluid hero">
        <div className="row career-bg">
          <div className="col-md-7">
            <div className="forCareerbg">
              <div className="career_content">
                <p className="career-para">FOR YOUR CAREER</p>
                <button className="button">Enroll Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-5 homeEnquiry">
            <h2>For any inquiry</h2>
            <hr />
            <form action="">
              <div className="enquiry_form">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  fullwidth
                  id=""
                />
              </div>
              <div className="enquiry_form">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  fullwidth
                  id=""
                />
              </div>
              <div className="enquiry_form">
                <input
                  className="form-control"
                  type="number"
                  name="number"
                  placeholder="Enter Mobile Number"
                  fullwidth
                  id=""
                />
              </div>
              <div className="enquiry_form">
                <select className="form-control" name="" id="">
                  <option value="select Course">Select Course</option>
                  <option value="select Course">1</option>
                  <option value="select Course">2</option>
                  <option value="select Course">3</option>
                </select>
              </div>
              <div className="enquiry_form">
                <select className="form-control" name="" id="">
                  <option value="select branch">Select Branch</option>
                  <option value="select Course">1</option>
                  <option value="select Course">2</option>
                  <option value="select Course">3</option>
                </select>
              </div>
              <div className="enquiry_form">
               <button className="button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="card-section">
        <div className="card_sections">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card-section-main">
                  <div className="icon">
                    <i class="bi bi-people-fill"></i>
                  </div>
                  <h3>Trending Courses</h3>
                  <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-section-main">
                  <div className="icon">
                    <i class="bi bi-file-earmark-text"></i>
                  </div>
                  <h3>Books & Liberary</h3>
                  <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-section-main">
                  <div className="icon">
                    <i class="bi bi-person-fill"></i>
                  </div>
                  <h3>Certified Teachers</h3>
                  <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-section-main">
                  <div className="icon">
                    <i class="bi bi-mortarboard-fill"></i>
                  </div>
                  <h3>Certification</h3>
                  <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

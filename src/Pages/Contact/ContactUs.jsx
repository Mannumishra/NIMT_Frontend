import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="breadcrump">
        <div className="breadcrumbOverlay">
          <div className="container">
            <h2>CONTACT US</h2>
            <p>
              <span>
                <Link to="/">Home</Link>
              </span>
              / <span>Contact Us</span>
            </p>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <h1>CONTACT US</h1>
            <p>
              Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed
              nec molestie justo.!
            </p>
          </div>

          <div className="contact">
            <div className="row">
              <div className="col-md-6 p-4">
                <h2>Our Contacts</h2>
                <hr />
                <p>
                  We provide free pick up and drop off at home or school for all
                  behind-the-wheel lessons. And, we offer a payment plan at no
                  additional charge.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <div className="icons fs-1">
                      <i class="bi bi-hourglass-split"></i>
                      </div>
                      <div>
                        <h5>Phone 24/7</h5>
                        <p>(855)374-6211</p>
                        <p>3567654</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <div className="icons fs-1">
                      <i class="bi bi-stopwatch"></i>
                      </div>

                      <div>
                        <h5>Operating Hours</h5>
                        <p>Mon-Fri: 9:00 am - 5:00 pm </p>
                        <p>Sat-Sun: 11:00 am - 16:00 pm</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <div className="icons fs-1">
                        <i class="bi bi-geo-alt"></i>
                      </div>

                      <div>
                        <h5>Our address</h5>
                        <p>1. 315, Daroga Market, Burari Chowk, 1st floor, Burari Delhi-84</p>
                        <p>2. Main Bus Stand, Nathupura , Burari Delhi -84</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <div className="icons fs-1">
                      <i class="bi bi-envelope"></i>
                      </div>

                      <div>
                        <h5>Email address</h5>
                        <p>support@.com </p>
                        <p>info@.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg-light">
                <div className="p-4">
                  <h2>For any inquiry</h2>
                  <hr />
                  <form action="">
                    <div className="mb-2">
                      <input
                        className="form-control"
                        type="text"
                        name="fullname"
                        placeholder="Enter your full name..."
                        id=""
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        placeholder="Enter your last name..."
                        id=""
                      />
                    </div>
                    <div className="mb-2">
                      <textarea
                        className="form-control"
                        placeholder="Enter Message"
                        name=""
                        rows={6}
                        id=""
                      ></textarea>
                    </div>
                    <div>
                      <button className="button">SUBMIT</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="map mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.624309212272!2d77.08410077429787!3d28.730771579614938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1728724286991!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{border:'0'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="anyQuestion p-3 bg-light mt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10">
                <h5>
                <span>
                  <i class="bi bi-tablet"></i>
                </span> &nbsp;
                  If you Have Any Questions Call Us On &nbsp;
                  <a style={{color:`var(--color-heading)`}} href="tel:+91"><b>(010)123-456-7890</b></a>
                </h5>
              </div>
              <div className="col-md-2">
                <button className="button">Appointment</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

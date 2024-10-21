import React from "react";

const ReserveSeatForm = () => {
  return (
    <>
      <section className="reserve mt-3">
        <div className="container">
          <div className="text-center">
            <h2>RESERVE YOUR SEAT</h2>
            <p>Fill In The Form Below To Reserve Your Seat Asap!</p>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  className="form-control"
                  name="website"
                  id="website"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="reason">Reason for Inquiry</label>
                <input
                  type="text"
                  className="form-control"
                  name="reason"
                  id="reason"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="ChooseCourse">Choose Course</label>
                <select
                  name="ChooseCourse"
                  id="ChooseCourse"
                  className="form-select"
                  required
                >
                  <option value="">Select a Course</option>
                  <option value="computer">Computer</option>
                  <option value="iti">ITI</option>
                  <option value="webDesigning">Web Designing</option>
                  <option value="webDevelopment">Web Development</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="ChooseCourse">Choose Teacher</label>
                <select
                  name="ChooseCourse"
                  id="ChooseCourse"
                  className="form-select"
                  required
                >
                  <option value="">Select a Course</option>
                  <option value="computer">Computer</option>
                  <option value="iti">ITI</option>
                  <option value="webDesigning">Web Designing</option>
                  <option value="webDevelopment">Web Development</option>
                </select>
              </div>
              <div className="col-md-12 mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  id=""
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <div className="col-md-12 mb-3 text-center">
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="anyQuestion p-3 bg-light mt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10">
                <h5>
                  <span>
                    <i class="bi bi-tablet"></i>
                  </span>{" "}
                  &nbsp; If you Have Any Questions Call Us On &nbsp;
                  <a style={{ color: `var(--color-heading)` }} href="tel:+91">
                    <b>(010)123-456-7890</b>
                  </a>
                </h5>
              </div>
              <div className="col-md-2">
                <button className="button">Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReserveSeatForm;

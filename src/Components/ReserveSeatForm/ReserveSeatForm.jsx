import axios from "axios";
import React, { useEffect, useState } from "react";

const ReserveSeatForm = () => {
  const [courseData ,setCourseData] = useState([])
  const getApiData = async()=>{
    try {
      const res = await axios.get("http://localhost:8000/api/get-all-course")
      if(res.status===200){
        setCourseData(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getApiData()
  },[])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    branch: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // null = no status, true = success, false = error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form before submission
    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.branch) {
      alert("Please fill out all required fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/api/send-query", formData)
      setLoading(false);
      if (res.status === 200) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          branch: "",
          message: "",
        });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      console.error("Error submitting form:", error);
    }
    finally {
      // Reset success state after 2 seconds
      setTimeout(() => {
        setSuccess(null);
      }, 2000);
    }
  };

  return (
    <>
      <section className="reserve mt-3">
        <div className="container">
          <div className="text-center">
            <h2>RESERVE YOUR SEAT</h2>
            <p>Fill In The Form Below To Reserve Your Seat Asap!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="ChooseCourse">Choose Course</label>
                <select
                  name="course"
                  id="ChooseCourse"
                  className="form-select"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" selected disabled>Select Course</option>
                  {
                  courseData.map((item,index)=>
                  <option value={item.courseName}>{item.courseName}</option>
                  )
                 }
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="ChooseBranch">Choose Branch</label>
                <select
                  name="branch"
                  id="ChooseBranch"
                  className="form-select"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                >
                  <option value="" selected disabled>Select Branch</option>
                  <option value="315, Daroga Market, Burari Chowk, 1st floor, Burari Delhi-84">315, Daroga Market, Burari Chowk, 1st floor, Burari Delhi-84</option>
                  <option value="Main Bus Stand, Nathupura , Burari Delhi -84">Main Bus Stand, Nathupura , Burari Delhi -84</option>
                </select>
              </div>
              <div className="col-md-12 mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Your Message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-md-12 mb-3 text-center">
                <button type="submit" className="button" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>

          {/* Show success/error message */}
          {success === true && <h2 className="text-success text-center">Seat reserved successfully!</h2>}
          {success === false && <h2 className="text-danger text-center">Something went wrong. Please try again.</h2>}
        </div>
      </section>
    </>
  );
};

export default ReserveSeatForm;

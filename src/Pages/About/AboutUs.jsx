import React from "react";
import { Link } from "react-router-dom";
import WelcomeNimt from "../../Components/WelcomeNimt/WelcomeNimt";
import OurAchievement from "../../Components/OurAchievement/OurAchievement";
import OurTeam from "../../Components/OurTeam/OurTeam";
import WhatStudentSays from "../../Components/WhatStudentSays/WhatStudentSays";
import CompanyLogos from "../../Components/CompanyLogos/CompanyLogos";
import ReserveSeatForm from "../../Components/ReserveSeatForm/ReserveSeatForm";

const AboutUs = () => {
  return (
    <>
      <div className="breadcrump">
        <div className="breadcrumbOverlay">
          <div className="container">
            <h2>ABOUT US</h2>
            <p>
              <span>
                <Link to="/">Home</Link>
              </span>
              / <span>About</span>
            </p>
          </div>
        </div>
      </div>
      <section>
        <WelcomeNimt />
        <OurAchievement />
        <OurTeam />
        <WhatStudentSays />
        <CompanyLogos />
      </section>
      <ReserveSeatForm />
    </>
  );
};

export default AboutUs;

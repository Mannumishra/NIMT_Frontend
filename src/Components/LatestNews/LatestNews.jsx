import React from "react";
import newsmain1 from "../../Images/newsMain1.png";
import newsmain2 from "../../Images/news1.png";
import newsmain3 from "../../Images/news2.png";
import newsmain4 from "../../Images/news3.png";

import "./news.css";
const LatestNews = () => {
  return (
    <>
      <div className="latestNews">
        <div className="container my-5">
          <h2 className="text-center">OUR LATEST NEWS</h2>
          <p className="text-center text-muted">
            Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed
            nec molestie justo.
          </p>
          <hr className="w-25 mx-auto" />

          <div className="row mt-4">
            {/* Left large news card */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="newsBigImage">
                <div>
                <img src={newsmain1} className="w-100" alt="" />
                </div>
                <div className="p-2 mt-3">
                <p>
                  <span>
                    <i class="bi bi-calendar-check"></i> &nbsp;
                  </span>
                  Jun 23, 2018
                </p>
                <h3>The Expenses You Are Thinking</h3>
                <p>
                  When to Use Lorem Ipsum generally, lorem ipsum is best suited
                  to keeping templates from looking bare or minimizing the...
                </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row newsSection">
                <div className="col-md-4">
                  <img src={newsmain2} className="w-100" />
                </div>
                <div className="col-md-8">
                  <div>
                    <h5>The Expenses You Are Thinking</h5>
                    <p>
                      <span>
                        <i class="bi bi-calendar-check"></i> &nbsp;
                      </span>
                      Jun 23, 2018
                    </p>
                    <p>
                      When to Use Lorem Ipsum generally, lorem ipsum is best
                      suited to keeping templates from...
                    </p>
                  </div>
                </div>
              </div>
              <div className="row newsSection">
                <div className="col-md-4">
                  <img src={newsmain3} className="w-100" />
                </div>
                <div className="col-md-8">
                  <div>
                    <h5>The Expenses You Are Thinking</h5>
                    <p>
                      <span>
                        <i class="bi bi-calendar-check"></i> &nbsp;
                      </span>
                      Jun 23, 2018
                    </p>
                    <p>
                      When to Use Lorem Ipsum generally, lorem ipsum is best
                      suited to keeping templates from...
                    </p>
                  </div>
                </div>
              </div>
              <div className="row newsSection">
                <div className="col-md-4">
                  <img src={newsmain4} className="w-100" />
                </div>
                <div className="col-md-8">
                  <div>
                    <h5>The Expenses You Are Thinking</h5>
                    <p>
                      <span>
                        <i class="bi bi-calendar-check"></i> &nbsp;
                      </span>
                      Jun 23, 2018
                    </p>
                    <p>
                      When to Use Lorem Ipsum generally, lorem ipsum is best
                      suited to keeping templates from...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;

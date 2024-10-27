import React from "react";
import "../style/style.css";

const CTA = () => {
  return (
    <section className="py-lg-8 py-6 mb-5">
      <div className="container py-lg-8">
        {/*row*/}
        <div className="row align-items-center">
          <div className="offset-xl-1 col-xl-4 col-lg-6 d-none d-lg-block">
            {/*img*/}
            <div className="position-relative ">
              <img
                src={require("../../src/images/job-hero-section - Copy.png")}
                alt="mentor img"
                className="img-fluid w-100 rounded-4"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 offset-lg-1 offset-xl-1 p-5">
            <div className="d-flex flex-column gap-6">
              <div className="d-flex flex-column gap-2">
                {/*heading*/}
                <h2 className="mb-0 h2 fw-semibold">
                  Sign Up To Gain Knowledge
                </h2>
                {/*para*/}
                <p className="mb-0 text-secondary small mb-4">
                  Follow these three simple steps to get started with Long Term
                  Mentorship
                </p>
              </div>
              <div className="d-flex flex-column gap-8">
                <div className="d-flex flex-column gap-5">
                  <div className="row gap-xxl-3 gap-0">
                    <div className="col-md-1 col-lg-2 col-xxl-1 col-2">
                      {/*svg*/}
                      <div className="icon-shape icon-lg bg-danger-subtle rounded-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          className="bi bi-bullseye text-danger"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                      </div>
                    </div>
                    {/*text*/}
                    <div className="col-md-6 col-lg-10 col-xxl-6 col-10">
                      <h4 className="mb-0">
                        You've invested a lot of time to learn your skill,
                        craft, or expertise
                      </h4>
                    </div>
                  </div>
                  <div className="row gap-xxl-3">
                    <div className="col-md-1 col-lg-2 col-xxl-1 col-2">
                      {/*svg*/}
                      <div className="icon-shape icon-lg bg-warning-subtle rounded-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          className="bi bi-cash-stack text-warning"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                          <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                        </svg>
                      </div>
                    </div>
                    {/*text*/}
                    <div className="col-md-6 col-lg-10 col-xxl-6 col-10">
                      <h4 className="mb-0">
                        Get paid for talking about the things you already know
                        and love
                      </h4>
                    </div>
                  </div>
                  <div className="row gap-xxl-3">
                    <div className="col-md-1 col-lg-2 col-xxl-1 col-2">
                      {/*svg*/}
                      <div className="icon-shape icon-lg bg-success-subtle rounded-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          className="bi bi-calendar-check text-success"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                        </svg>
                      </div>
                    </div>
                    {/*text*/}
                    <div className="col-md-6 col-lg-10 col-xxl-6 col-10">
                      <h4 className="mb-0">
                        Set your own availability and meet on your time
                      </h4>
                    </div>
                  </div>
                </div>
                <div>
                  <a
                    href="#!"
                    className="btn btn-primary mt-5"
                    style={{ backgroundColor: "#3366cc" }}
                  >
                    Join to explore more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Course from "../components/courses";
import CoursesTrend from "../components/coursestrend";
import Stats from "../components/stats";
import CTA from "../components/cta";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Course />
      <CoursesTrend />
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <hr className="border-dark-subtle" />
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </>
  );
};

export default Index;

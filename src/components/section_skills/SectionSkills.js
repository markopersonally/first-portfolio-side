import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SectionSkills.css";

const SectionSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="sectionSkills" className="section-skills">
      <h3 className="section-skills-title">skills</h3>
      <div className="section-skills-box">
        <div className="section-skills-item">
          <h3 data-aos='fade-up"' className="section-skills-item-text ">
            html
          </h3>{" "}
          <img
            data-aos="fade-up"
            className="section-skills-picture"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
            }
            alt="logo html"
          />
        </div>
        <div className="section-skills-item">
          <img
            data-aos="fade-up"
            className="section-skills-picture"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png"
            }
            alt="logo css"
          />
          <h3 data-aos="fade-up" className="section-skills-item-text">
            css
          </h3>
        </div>
        <div className="section-skills-item">
          <h3 data-aos="fade-up" className="section-skills-item-text">
            sass
          </h3>
          <img
            data-aos="fade-up"
            className="section-skills-picture"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
            }
            alt="logo sasss"
          />
        </div>
        <div className="section-skills-item">
          <img
            data-aos="fade-up"
            className="section-skills-picture"
            src={
              "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png"
            }
            alt="logo javascript"
          />
          <h3 data-aos="fade-up" className="section-skills-item-text">
            javascript
          </h3>
        </div>
        <div className="section-skills-item">
          <h3 data-aos="fade-up" className="section-skills-item-text">
            react
          </h3>
          <img
            data-aos="fade-up"
            className="section-skills-picture"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            }
            alt="logo react"
          />
        </div>
        <div className="section-skills-item">
          <img
            data-aos="fade-up"
            className="section-skills-picture"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
            }
            alt="logo bootstap"
          />
          <h3 data-aos="fade-up" className="section-skills-item-text">
            bootstap
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;

import React from "react";

import uniqid from "uniqid";

import { skills, categories } from "../../../portfolio";

import "./ResumePage.css";

const ResumePage = () => {
  return (
    <React.Fragment>
      <div className="resume center">
        <header className="header">
          <h1>
            <span className="resume__name">Resume</span>
          </h1>
          <nav className="center nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <a className="link link--nav" href="#education">
                  Education
                </a>
              </li>
              <li className="nav__list-item">
                <a className="link link--nav" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav__list-item">
                <a className="link link--nav" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav__list-item">
                <a className="link link--nav" href="#certification">
                  Certifications
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="education" className="resume__section">
            <h3 className="resume__title">Education</h3>
            <div className="resume__content">
              <ul>
                <li>
                  <span>Bachelor of Engineering, Information Technology</span>
                </li>
                <li>
                  <span>
                    <a
                      href="http://www.unipune.ac.in/"
                      className="capitalize link link--nav"
                    >
                      University of Pune
                    </a>
                    , 2013
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section id="experience" className="resume__section">
            <h3 className="resume__title">Experience</h3>
            <article>
              <header>
                <h4>
                  <a
                    href="http://calanceus.com"
                    className="capitalize link link--nav"
                  >
                    Calance
                  </a>{" "}
                  - Senior Consultant
                </h4>
                <p>Mar, 2019 - Present</p>
              </header>
              <ul className="resume__project-list">
                <li className="resume__project-list-item">
                  Involved in the research, design, development, documentation,
                  testing and rollout of enterprise applications with quick
                  turn-around times.
                </li>
                <li className="resume__project-list-item">
                  Experience in architect and designing large scale, distributed
                  and scalable infrastructure.
                </li>
                <li className="resume__project-list-item">
                  Ability to leverage full-stack knowledge and experience to
                  build and design interactive user- centric scalable websites.
                </li>
                <li className="resume__project-list-item">
                  <u>Technical skills acquired:</u>{" "}
                  <i>
                    Distributed Computing, Machine Learning, Dask, Python,
                    Docker, Spark, PostgreSQL, MySQL, Redis, RabbitMQ, React,
                    FastAPI, Flask, Tensorflow, scikit-learn, AWS
                  </i>
                </li>
              </ul>
              <footer></footer>
            </article>
            <article>
              <header>
                <h4>
                  <a
                    href="http://calanceus.com"
                    className="capitalize link link--nav"
                  >
                    Calance
                  </a>{" "}
                  - Consultant
                </h4>
                <p>Sep, 2013 - Mar, 2019</p>
              </header>
              <ul className="resume__project-list">
                <li className="resume__project-list-item">
                  Involved in the research, design, development, documentation,
                  testing and rollout of enterprise applications with quick
                  turn-around times.
                </li>
                <li className="resume__project-list-item">
                  Experience in architect and designing large scale, distributed
                  and scalable infrastructure.
                </li>
                <li className="resume__project-list-item">
                  Ability to leverage full-stack knowledge and experience to
                  build and design interactive user- centric scalable websites.
                </li>
                <li className="resume__project-list-item">
                  <u>Technical skills acquired:</u>{" "}
                  <i>
                    Distributed Computing, Machine Learning, Dask, Python,
                    Docker, Spark, PostgreSQL, MySQL, Redis, RabbitMQ, React,
                    FastAPI, Flask, Tensorflow, scikit-learn, AWS
                  </i>
                </li>
              </ul>
            </article>
          </section>
          <section id="skill" className="resume__section">
            <h3 className="resume__title">Skills</h3>
            <article>
              {/* <header>
                <h4></h4>
                <p></p>
              </header> */}
              <ul className="resume__skills">
                {skills.map((skill, index) => (
                  <li
                    key={uniqid()}
                    style={{
                      width: `${(skill.competency / 5) * 100}%`,
                      backgroundColor: `${
                        categories.filter((category) =>
                          skill.category.includes(category.name)
                        )[0].color
                      }`,
                    }}
                  >
                    <p className="resume__skills-title">
                      {skill.title}
                      <span className="resume__skills-percent">{`${skill.competency}/5`}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <footer></footer>
            </article>
          </section>
          <section id="certification" className="resume__section">
            <h3 className="resume__title">Certifications</h3>
            <article>
              <ul className="resume__project-list">
                <li className="resume__project-list-item">
                  Microsoft Certified Professional (Credential ID 880781)
                </li>
                <li className="resume__project-list-item">
                Cisco Certified Network Associate (Credential ID 402094170773ITXK)
                </li>
              </ul>
              <footer></footer>
            </article>
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ResumePage;

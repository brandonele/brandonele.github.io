import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    // Hardcoded section name
    const sectionName = "Experience";

    // Hardcoded work experiences
    const experiences = [
      {
        title: "Software Engineer Intern",
        company: "F5 Networks",
        years: "June 2024 - September 2024 *SOON*",
        mainTech: ["???"],
        technologies: ["???"],
      },
      {
        title: "Teaching Assistant",
        company: "UC San Diego Computer Science & Engineering Department",
        years: "September 2021 - Present",
        mainTech: ["CSE 12", "CSE 8A", "CSE 95"],
        technologies: ["Python", "Java", "Canvas","Gradescope","Edstem"],
      },
      {
        title: "Software Engineer",
        company: "TriDev",
        years: " January 2022 – April 2022",
        mainTech: ["Flask", "Python"],
        technologies: ["Git", "ZenHub", "SQL"],
      },
      {
        title: "Course Instructor",
        company: "La Jolla Elementary School",
        years: "January 2022– May 2022",
        mainTech: ["Scratch", "CS First"],
        technologies: ["Teaching", "Communication"],
      }
      // Add more experiences as needed
    ];

    // Map through hardcoded experiences
    var work = experiences.map((work, i) => {
      var mainTech = work.mainTech.map((technology, i) => (
        <Badge pill className="main-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      ));
      var tech = work.technologies.map((technology, i) => (
        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      ));
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: "#ccc",
            color: "#fff",
            textAlign: "center",
          }}
          
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTech}
          </div>
          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {work.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {work.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>{work}</VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;

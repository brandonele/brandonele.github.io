import React, { Component } from "react";

class Skills extends Component {
  render() {
    // Hardcoded section name
    const sectionName = "Skills";

    // Hardcoded skills data
    const skillsData = [
      {
        name: "Python",
        class: "fab fa-python" // Font Awesome class for Python icon
      },
      {
        name: "Java",
        class: "fab fa-java" // Font Awesome class for Java icon
      },
      {
        name: "C++",
        class: "fab fa-cuttlefish" // No specific C++ icon in Font Awesome, using 'cuttlefish' as a placeholder
      },
      {
        name: "GIT",
        class: "fab fa-git-alt" // Font Awesome class for Git icon
      },
      {
        name: "Leadership",
        class: "fas fa-users" // Generic icon for leadership
      },
      {
        name: "TensorFlow",
        class: "fas fa-brain" // No specific TensorFlow icon, using a brain icon as a placeholder
      },
      {
        name: "PyTorch",
        class: "fas fa-fire" // No specific PyTorch icon, using a fire icon as a placeholder
      },
      // Add more skills as needed
    ];
    

    // Map through hardcoded skills
    const skills = skillsData.map((skill, i) => {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={skill.class} style={{ fontSize: "220%" }}>
                <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                  {skill.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      );
    });

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

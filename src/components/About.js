import React, { Component } from "react";


class About extends Component {
  render() {
    // Hardcoded text values
    const profilepic = "/pumpkin.png"; // Update with your image path
    const sectionName = "About"; // Your hardcoded section name
    const hello = "hey there!"; // Your hardcoded header
    const about = "I am currently pursuing a M.S. in Computer Science with a focus in Artificial Intelligence at UC San Diego. I just finished my B.S. in Computer Science in December of 2023. I am going to be partaking in a Software Engineering Internship at F5 Networks in the Summer of 2024. But besides going to school, I enjoy powerlifting and playing video games!"; // Your hardcoded about text
    const find = "You can reach me at @ bele@ucsd.edu"
    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  {/* <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}  </span>
                    <br />
                    <br />
                    {about}
                    <div>
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
</div>
                    <div></div>
                    {find}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

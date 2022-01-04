import React from "react";
import Fade from 'react-reveal/Fade';


const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = "images/" + data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <Fade bottom>
          <div className="three columns" style={{
            display: "flex",
            justifyContent: "center",
          }}>
            <img
              // className="profile-pic"
              style={{
                width: 114,
                height: 114,
                borderRadius: "50%",
                // margin:0,
              }}
              src={profilepic}
              alt="mazenT Profile Pic"
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button" download>
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;

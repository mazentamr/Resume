import React from "react";
import Fade from 'react-reveal/Fade';

const Footer = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <Fade bottom>
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        </Fade>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>
              Made by{" "}
              <a title="PAPA" href="http://www.papareact.com/">
                MT
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

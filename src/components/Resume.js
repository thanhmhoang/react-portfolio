import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={"./ThanhHoang_Resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>React, MongoDB, MySQL, Bootstrap</li>
            <li>JQuery, Node.js, Express.js</li>
            <li>JQuery, Git, NPM</li>
            <li>GitHub pages, Heroku, Netlify</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
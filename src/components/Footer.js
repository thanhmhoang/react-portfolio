import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio - by Thanh Hoang</strong> 
          <hr />
          <a
            href="https://www.linkedin.com/in/thanh-m-hoang/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://github.com/thanhmhoang" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
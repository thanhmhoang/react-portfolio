import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light"></nav>
        <div class="footerContent">
          <a
            href="https://github.com/thanhmhoang"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon
              alt="github"
              sx={{ width: 40, height: 40, color: "black" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thanhmhoang/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              alt="linkedin"
              sx={{ width: 40, height: 40, color: "black" }}
            />
          </a>
        </div>
        <p>© 2023 Thanh Hoang | All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
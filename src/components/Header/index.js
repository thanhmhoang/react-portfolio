import pfp from "../../assets/Thanh.jpg";
import resume from "../../assets/ThanhHoang_Resume.pdf";

function Header() {
  return (
    <div className="container header">
      <div className="profilePic">
        <img alt="thanh hoang headshot" src={pfp}></img>
      </div>
      <div className="intro">
        <h1>
          Hi, I'm <b>Thanh Hoang</b>.
        </h1>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          <button className="resume">
            <b>My Resume</b>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
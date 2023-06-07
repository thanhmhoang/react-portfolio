import FinHub from "../../assets/FinHub.png";
import Ecommerce from "../../assets/ecommercebackend.png";
import NoteTaker from "../../assets/notetaker.png";
import PasswordGen from "../../assets/passwordgenerator.png";
import SocialApi from "../../assets/socialnetworkapi.png";
import TeamProfile from "../../assets/teamprofile.png";
import Work from "../../assets/workscheduler.png";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="container">
        <div className="card">
          <img src={FinHub} alt="FinHub"></img>
          <h2>
            <strong>FinHub</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/brenthouston/finnhub-frontend"
              >
                Front-End Code
              </a>
            </button>
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/thanhmhoang/finhub-backend"
              >
                Back-End Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://finnhub.netlify.app/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={Ecommerce} alt="Ecommerce"></img>
          <h2>
            <strong>E-Commerce Backend</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/thanhmhoang/ecommerce-backend"
              >
                Code
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={NoteTaker} alt="Note Taker"></img>
          <h2>
            <strong>Note Taker</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/thanhmhoang/note-taker"
              >
                Code
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={PasswordGen} alt="Password Generator"></img>
          <h2>
            <strong>Password Generator</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/thanhmhoang/module-3-challenge"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://thanhmhoang.github.io/module-3-challenge/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={SocialApi} alt="Social Network API"></img>
          <h2>
            <strong>Social Network API</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/thanhmhoang/socialnetwork-api"
              >
                Code
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={TeamProfile} alt="Team Profile Generator"></img>
          <h2>
            <strong>Team Profile Generator</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/thanhmhoang/team-profile-generator"
              >
                Code
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={Work} alt="Work Day Scheduler"></img>
          <h2>
            <strong>Work-Day Scheduler</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/thanhmhoang/work-day-scheduler"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://thanhmhoang.github.io/work-day-scheduler/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
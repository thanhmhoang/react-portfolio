function About() {
    return (
      <div className="container aboutSkills">
        <div className="container about">
          <h1>About Me</h1>
          <div className="aboutMe">
            <p>
              My name is Thanh Hoang. I am located in Seattle, WA. I am currently a UW Full Stack Developer Bootcamp student. I am in the process of transition from my previous career in wealth management to the product side of FinTech!
            </p>
          </div>
        </div>
        <div className="container skills">
          <h1>My Skills</h1>
          <div className="listFlex">
            <ul className="list">
              <li>
                <img
                  alt="html svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                />
                <img
                  alt="css svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                />
                <img
                  alt="javascript svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                />
                <img
                  alt="bootstrap svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                />
              </li>
            </ul>
            <ul className="list">
              <li>
                <img
                  alt="mongodb svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                />
                <img
                  alt="express svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                />
                <img
                  alt="react svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                />
                <img
                  alt="node svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                />
                <img
                  alt="mysql svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                />
              </li>
            </ul>
            <ul className="list">
              <li>
                <img
                  alt="jquery svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                />
                <img
                  alt="heroku svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
                />
                <img
                  alt="git svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                />
                <img
                  alt="npm svg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
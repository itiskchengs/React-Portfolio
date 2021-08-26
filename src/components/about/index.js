import style from "./style.module.css";
import Profile from "../../assets/img/profile-picture.jpg";
//import wave from '../../assets/img/wave5.svg';

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.sectionAboutContainer}>
        <div className={style.aboutHeadingContainer}>
          <div className={style.aboutSmallHeadingContainer}>
            <h3 className={style.smallAboutHeading}>About</h3>
            <hr className={style.smallAboutHeadingLine} />
          </div>
          <h4 className={style.bigAboutHeading}>Who Is Kenny?</h4>
        </div>
        <div className={style.aboutInformationContainer}>
          <div className={style.aboutInformation}>
            <p>
              I’m a full stack web developer with an eye for design. I graduated
              with a B.A. in Digital Media (Web Design) from the University of
              Central Florida and completed a full MERN stack coding boot camp
              from Northwestern University. My current development toolkit
              includes using Javascript, NodeJS, React, MySQL, MongoDB, Express
              and CSS–however, I’m quick to pick up new languages.
            </p>
            <p>
              Apart from the technical aspects, my strengths include
              multitasking, communication and time management. Because of this,
              I thrive working under a collaborative and fast-paced agile
              environment. I’m familiar with industry standard workflows and
              follow best practices based on my experience as a web designer.
              Although that role has been fulfilling, my interest leans more
              toward the problem-solving mindset that flourishes in development
              and I’m ready to use my new skills to build better and more
              meaningful experiences on the web.
            </p>
            <p>Technologies that I have have recently been working with:</p>
            <div className={style.technologyContainer}>
              <ul className={style.technologyList}>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Node.JS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
              <ul className={style.technologyList}>
                <li>Express</li>
                <li>Sequelize</li>
                <li>JQuery</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
              <ul className={style.technologyList}>
                <li>Git</li>
                <li>Wordpress</li>
                <li>Bootstrap 5</li>
                <li>Materialize</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
          <div className={style.aboutImageContainer}>
            <img src={Profile} alt="Kenny"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

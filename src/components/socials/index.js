import style from './style.module.css';
import githubImg from '../../assets/img/github-logo.svg';
import instagramImg from '../../assets/img/instagram.svg';
import linkedinImg from '../../assets/img/linkedin.svg';

const Socials = () => {
  return (
    <div>
      <div className={style.socialsContainer}>
        <ul className={style.socialIconList}>
          <li>
            <a href="https://github.com/itiskchengs">
              <img src={githubImg}  alt="Github Logo"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kenneth-cheng-783816142/">
              <img id={style.linkedin} alt="Linkedin Logo" src={linkedinImg} />
            </a>
          </li>
          <li id={style.socialInstagram}>
            <a href="https://www.instagram.com/itiskcheng/">
              <img src={instagramImg} alt="Instagram Logo" />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.emailContainer}>
        <div className={style.emailList}>
          <a href="mailto:itskcheng@gmail.com">itskcheng@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Socials;

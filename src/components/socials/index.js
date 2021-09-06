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
            <a href="">
              <img src={githubImg} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={linkedinImg} />
            </a>
          </li>
          <li id={style.socialInstagram}>
            <a href="">
              <img src={instagramImg} />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.emailContainer}>
        <div className={style.emailList}>
          <a href="">itskcheng@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Socials;

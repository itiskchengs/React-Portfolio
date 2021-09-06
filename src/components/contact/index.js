import style from "./style.module.css";

const Contact = () => {
  return (
    <div id="contact" className={style.contactSection}>
      <div className={style.contactContainer}>
        <div className={style.contactHeadingContainer}>
          <div className={style.contactSmallHeadingContainer}>
            <h3 className={style.smallContactHeading}>Contact</h3>
            <hr className={style.smallContactHeadingLine} />
          </div>
          <h4 className={style.bigContactHeading}>Let's Connect</h4>
        </div>
        <div className={style.contactMeContainer}>
          <h3 className={style.contactHeaderNew}>Get In Touch</h3>
          <p className={style.contactParagraph}>
            My inbox is always open. Whether you have any request or question,
            don't hesitate to message me. I will try my best to get back to you!
          </p>
          <div className={style.contactButtonContainer}>
            <a className={style.contactButton} href="mailto:itskcheng@gmail.com">Message Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

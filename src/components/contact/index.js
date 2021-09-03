import style from "./style.module.css";
import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.formContacts}>
              <label className={style.formLabelName}>
                Name:
                <input defaultValue="Name" type="text" name="name" {...register("example")} />
              </label>
              <label className={style.formLabelEmail}>
                Email:
                <input defaultValue="test@test.com" type="text" name="email" {...register("exampleRequired", {required: true})}/>
              </label>
            </div>
            <div className={style.formTextArea}>
              <label>
                Message
                <input type="textarea" name="text" />
              </label>
            </div>
            <div className={style.formSubmit}>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

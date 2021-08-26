import style from "./style.module.css";
import { projectData } from "../../data/projectData";

const Project = () => {

    const projects = projectData.map((project, index) => {
        return(
            <div className={style.projectItems} key={index}>
              <div>
                {/*<img src={require(`../../assets/img/${projectData.image}.png`)} alt="" />*/}
                <img src='https://via.placeholder.com/300' alt='placeholder'/>
              </div>
              <div className={style.paragraph}>
                <h3 className={style.projectTitle}>{project.projectTitle}</h3>
                <p className={style.projectDescription}>{project.projectDescription}</p>
                <p className={style.projectLanguages}>{project.projectLanguages}</p>
                <div className={style.projectButtonsContainer}>
                  <a href={project.githubLink}>Github Link</a>
                  <a href={project.deployedLink}>Deployed Link</a>
                </div>
              </div>
            </div>
        )
    })

  return (
    <div className={style.projectSection}>
      <div className={style.projectContainer}>
        <div className={style.projectHeadingContainer}>
          <div className={style.projectSmallHeadingContainer}>
            <h3 className={style.smallProjectHeading}>Featured Projects</h3>
            <hr className={style.smallProjectHeadingLine} />
          </div>
          <h4 className={style.bigProjectHeading}>Stuff I've Worked on</h4>
        </div>
        <div className={style.projectItemsContainer}>
            {projects}
        </div>
      </div>
    </div>
  );
};

export default Project;

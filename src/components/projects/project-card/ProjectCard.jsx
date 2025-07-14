import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
    const imgPath = `/portfolio-fe/public/project-imgs/${props.image}`;
    console.log(imgPath);

    return(
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={imgPath} alt={props.projectName} title={props.projectName}/>
            </div>
            <h3>{props.projectName}</h3>
            <div className={styles.descContainer}>
                <p>{props.description}</p>
            </div>
            <div className={styles.skillsContainer}>
                {props.skills.map((skill, index) => {
                    return(
                        <p>{skill}</p>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectCard
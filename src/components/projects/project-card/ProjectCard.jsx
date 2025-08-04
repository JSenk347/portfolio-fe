import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
    const isLive = Boolean(props.liveURL);
    console.log(isLive);
    const imgPath = `/portfolio-fe/public/project-imgs/${props.image}`;
    const ghURL = `https://github.com/JSenk347/${props.ghRepo}`;


    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={imgPath} alt={props.projectName} title={props.projectName} />
            </div>
            <h3>{props.projectName}</h3>
            <div className={`${styles.buttonContainer} ${isLive ? "Live" : "notLive"}`}>
                <a href={ghURL} target="_blank">
                    <button className={styles.ghButton}>
                        GitHub Repo
                    </button>
                </a>
                {isLive && (
                    <a href={props.liveURL} target="_blank">
                        <button className={styles.liveButton}>
                            Live App
                        </button>
                    </a>
                )}
            </div>
            <div className={styles.descContainer}>
                <p>{props.description}</p>
            </div>
            <div className={styles.skillsContainer}>
                {props.skills.map((skill, index) => {
                    return (
                        <p>{skill}</p>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectCard
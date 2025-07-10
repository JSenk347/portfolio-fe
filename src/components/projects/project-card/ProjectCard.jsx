import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
    const imgPath = `../../../assets/project-imgs/${props.image}`;
    console.log(props);
    return(
        <div className={styles.cardContainer}>
            <img src={imgPath}/>
            <p>{props.image}</p>
        </div>
    );
}

export default ProjectCard
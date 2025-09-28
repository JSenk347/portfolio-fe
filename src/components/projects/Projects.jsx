import ProjectCarousel from "./project-carousel/ProjectCarousel.jsx"
import styles from "./Projects.module.css"
import projectData from "../../data/projects.json"

const Projects = ({ projects }) => {
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.headerContainer}>
                <p>Browse My</p>
                <h1>Projects</h1>
            </div>
            <div className={styles.carouselContainer}>
                <ProjectCarousel projects={projectData} />
            </div>
        </div>
    );
}

export default Projects
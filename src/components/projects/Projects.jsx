import ProjectCard from "./project-card/ProjectCard.jsx"
import styles from "./Projects.module.css"

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.headerContainer}>
                <p>Browse My</p>
                <h1>Projects</h1>

                {/* UP NEXT:
                    - Design a project card
                        - Figure out how a "sneaky window" would work after clicking a projects to view it  
                    - Place the projectCards in a carasoul
                    - Take the project data from a projects.json
                        - See resources for reading a json file in JS
                    - 
                */}
            </div>
        </div>
    );
}

export default Projects
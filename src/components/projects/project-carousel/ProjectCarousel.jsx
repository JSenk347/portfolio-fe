import ProjectCard from "../project-card/ProjectCard";

const ProjectCarousel = (props) => {
    
    return(
        props.projects.map(project => {
            <ProjectCard 
                project-name={project.project-name}
            />
        })
    );
}

export default ProjectCarousel
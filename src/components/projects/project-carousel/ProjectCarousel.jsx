import React, {useEffect} from 'react';
import ProjectCard from "../project-card/ProjectCard";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from "./ProjectCarousel.module.css";

// projects surrounded with {} for OBJECT DESTRUCTURING
const ProjectCarousel = ({projects}) => {
    // useEmblaCarousel enable PLUGINS passed as arguments in an array. Eg: [Autoplay()]
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);

    useEffect(() => {
        if(emblaApi) {
            console.log(emblaApi.slideNodes());
        }
    }, [emblaApi]);

    return(
        <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.carouselContainer}> 
                {projects.map((project, index) => {
                    return(
                        <div className={styles.slide}>
                            <ProjectCard
                                key={index}
                                projectName={project["project-name"]}
                                image={project.image}
                                ghRepo={project["gh-repo"]}
                                liveURL={project["live-url"]}
                                skills={project.skills}
                                description={project.description}
                            />
                        </div>    
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectCarousel
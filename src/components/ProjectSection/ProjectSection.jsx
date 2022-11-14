import { projects } from "../../data/data";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./projectsection.module.css"

function ProjectSection() {
    return (
        <section className={styles.project_section}>
            <h2 className={styles.heading}>
                Portfolio
            </h2>
            <div className={styles.project_card_container}>
                {
                    projects.map((projectObj, index) => {
                        return <ProjectCard
                            key={index}
                            image={projectObj.image}
                            title={projectObj.title}
                            desc={projectObj.desc}
                            link={projectObj.link}
                        />
                    })
                }
            </div>
        </section>
    )
}

export default ProjectSection;
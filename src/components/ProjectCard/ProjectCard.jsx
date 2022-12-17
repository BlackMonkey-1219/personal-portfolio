import styles from "./projectcard.module.css"

function ProjectCard({ image, title, desc, link }) {
    return (
        <div className={styles.project_card}>
            <img className={styles.background_image} src={image} alt="project image" />
            <div className={styles.detail_container}>
                <b className={styles.title}>{title}</b>
                <p className={styles.details}>
                    {desc}
                </p>
                <a className={styles.link} href={link} target="blank">
                    Visit Project
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;
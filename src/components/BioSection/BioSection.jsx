import { bio } from "../../data/data";
import ExperienceWheel from "../ExperienceWheel/ExperienceWheel";
import styles from "./biosection.module.css"

function BioSection() {
    return (
        <section className={styles.bio_section}>
            <div className={styles.left}>
                <ExperienceWheel />
            </div>
            <div className={styles.right}>
                <h2 className={styles.heading}>About Me</h2>
                <p className={styles.paragraph}>
                    {bio}
                </p>
            </div>
        </section>
    )
}

export default BioSection;
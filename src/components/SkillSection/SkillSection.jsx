import SkillCard from "../SkillCard/SkillCard";
import styles from "./skillsection.module.css"
import { skills } from "../../data/data";

function SkillSection() {
    return (
        <section className={styles.skill_section}>
            <h2 className={styles.heading}>My Skills</h2>
            <div className={styles.skill_card_container}>
                {skills.map((skillObj, index) => {
                    return <SkillCard
                        key={index}
                        image={skillObj.image}
                        title={skillObj.title}
                    />
                })}
            </div>
        </section>
    )
}


export default SkillSection;
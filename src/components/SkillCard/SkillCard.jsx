import styles from "./skillcard.module.css"
import logo from "./../../assets/react.svg"

function SkillCard({ image, title }) {
    return (
        <div className={styles.skill_card}>
            <img className={styles.skill_image} src={image} alt="skill iamge" />
            <p className={styles.skill_title}>{title}</p>
        </div>
    )
}
export default SkillCard;
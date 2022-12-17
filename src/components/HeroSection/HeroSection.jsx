import styles from "./herosection.module.css"
import { logo } from "./../../assets"

function HeroSection() {
    return (
        <section className={styles.hero_section}>
            <span className={styles.frontend_text}>Frontend</span>
            <span className={styles.backend_text}>Backend</span>
            <div className={styles.spinner}></div>
            <img className={styles.hero_image} src={logo} alt="hero image" />
        </section>
    )
}

export default HeroSection;
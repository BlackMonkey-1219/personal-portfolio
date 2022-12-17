import styles from "./experiencewheel.module.css"

function ExperienceWheel() {
    return (
        <div className={styles.wheel}>
            <div className={styles.cell}>
                <b className={styles.number}>6+</b>
                <p className={styles.field}>HTML5</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>6</b>
                <p className={styles.field}>CSS3</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>1+</b>
                <p className={styles.field}>React</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>3+</b>
                <p className={styles.field}>JavaScript</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>1</b>
                <p className={styles.field}>TypeScript</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>2</b>
                <p className={styles.field}>NodeJS</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>1+</b>
                <p className={styles.field}>NEXTJS</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>1+</b>
                <p className={styles.field}>ExpressJS</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>5+</b>
                <p className={styles.field}>Python</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>1+</b>
                <p className={styles.field}>MongoDB</p>
            </div>
            <div className={styles.cell}>
                <b className={styles.number}>2</b>
                <p className={styles.field}>MySQL</p>
            </div>
        </div>
    )
}

export default ExperienceWheel;
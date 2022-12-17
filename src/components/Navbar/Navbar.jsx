import styles from "./navbar.module.css"
import { logo_wide } from "./../../assets"

function Navbar() {

    return (
        <nav className={`${styles.navbar} navbar`}>
            <div className={styles.left}><img src={logo_wide} alt="personal logo" /></div>
            <div className={styles.right}>
                <ul className={styles.nav_item_container}>
                    <li className={styles.nav_item}>
                        <a href="https://www.fiverr.com/share/bLjgzm" target={"blank"}>Fiverr</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="https://www.upwork.com/freelancers/~01b796ebcdeaf2a3c9" target={"blank"}>Upwork</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a href="https://github.com/BlackMonkey-1219" target={"blank"}>GitHub</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
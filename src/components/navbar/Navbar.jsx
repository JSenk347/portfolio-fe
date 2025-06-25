import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <header>
            <div className={styles.navContainer}>
                <a>
                    <h1 className={styles.navText}> Jordan Senko </h1>
                </a>
                <div className={styles.navSections}>
                    <a>About</a>
                    <a>Projects</a>
                    <a>Experience</a>
                    <a>Contact</a>
                </div>
            </div>
        </header>

    );
}

/*            <div className={styles.navSocials}>

            </div> */

export default Navbar
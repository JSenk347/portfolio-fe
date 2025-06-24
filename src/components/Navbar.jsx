import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navContainer}>
            <h1 className={styles.navText}> Jordan Senko </h1>

            <div className={styles.navSocials}>
                <a href='' target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a target="_blank" href='https://www.linkedin.com/in/jordan-senko-a48067220/?originalSubdomain=ca'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>

            


        </div>
    );
}

export default Navbar
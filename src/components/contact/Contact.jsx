import styles from "./Contact.module.css"

function Contact() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.headerContainer}>
                <p>Get in Touch</p>
                <h1>Contact Me</h1>
            </div>
            <div className={styles.linkContainer}>
                <div className={styles.buttonContainer}>
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto: jsenk347@mtroyal.ca">
                        jsenk347@mtroyal.ca
                    </a>
                </div>
                <div className={styles.buttonContainer}>
                    <i class="fa-brands fa-linkedin"></i>
                    <a href="https://ca.linkedin.com/in/jordan-senko-a48067220" target="_blank">
                        Linkedin
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Contact
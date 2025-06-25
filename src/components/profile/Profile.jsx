import styles from "./Profile.module.css"
import headShot from "../../assets/headshot.webp"

const Profile = () => {
    const handleViewCV = () => {
        window.open("/resume.pdf", "_blank");
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.headShot}>
                <img src={headShot} alt="Jordan Senko's headshot" />
            </div>
            <div className={styles.profileText}>
                <p> Hello, I'm </p>
                <h1> Jordan Senko </h1>
                <p className={styles.profileTextTitle}>Computer Science Student</p>
                <button onClick={handleViewCV} className={styles.button1}>
                    View CV
                </button>
                <button className={styles.button2}>
                    Contact Info
                </button>
                <div className={styles.socialsContainer}>
                    <a href='' target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/jordan-senko-a48067220/?originalSubdomain=ca'>
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>


    );
}

export default Profile
import styles from "./Profile.module.css"
import headShot from "../../assets/headshot.webp"

const Profile = () => {
    const handleViewCV = () => {
        window.open("/Jordan_Senko-Resume.pdf", "_blank");
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.headShot}>
                <img src={headShot} alt="Jordan Senko's headshot" />
            </div>
            <div className={styles.profileText}>
                <p> Hey, I'm </p>
                <h1> Jordan Senko </h1>
                <p className={styles.profileTextTitle}>Computer Science Student</p>
                <div className={styles.profileButtons}>
                    <button onClick={handleViewCV} className={styles.button1}>
                        View CV
                    </button>
                    <button className={styles.button2}>
                        Contact Info
                    </button>
                </div>

                <div className={styles.socialsContainer}>
                    <a href='' target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a target="_blank" href='https://ca.linkedin.com/in/jordan-senko-a48067220'>
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>


    );
}

export default Profile
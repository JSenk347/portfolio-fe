import styles from "./Profile.module.css";
import headShot from "../../assets/headShot.webp";

const Profile = () => {
    const handleViewCV = () => {
        window.open(`${window.location.hostname == "localhost" ? "/portfolio-fe/" : import.meta.env.BASE_URL}Jordan_Senko-Resume.pdf`, "_blank");
        
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.headShot}>
                <img src={headShot} alt="Jordan Senko's headshot" />
            </div>
            <div className={styles.profileText}>
                <p> Hey, I'm </p>
                <h2> Jordan Senko </h2>
                <p className={styles.profileTextTitle}>Computer Science Student</p>
                <div className={styles.profileButtons}>
                    <button onClick={handleViewCV} className={styles.button1}>
                        View CV
                    </button>
                    <button className={styles.button2}>
                        <a href="#contact">
                            Contact Info
                        </a>

                    </button>
                </div>

                <div className={styles.socialsContainer}>
                    <a href='https://github.com/JSenk347' target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href='https://ca.linkedin.com/in/jordan-senko-a48067220' target="_blank" >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>


    );
}

export default Profile
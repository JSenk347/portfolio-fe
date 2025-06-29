import styles from "./AchievementCard.module.css";

const AchievementCard = () => {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <h2>Education</h2><br/>
                <i class="fa-solid fa-school"></i>
            </div>
            <div className={styles.cardText}>
                <p>B.Sc. Computer Science</p>
                <p>GPA: 3.97/4.00</p>
            </div>
        </div>
    );
}

export default AchievementCard
import XPCard from "./xp-card/XPCard.jsx";
import styles from "./XP.module.css";

const XP = () => {
    return (
        <>
            <div className={styles.xpContainer}>
                <div className={styles.headerContainer}>
                    <p>Explore My</p>
                    <h1>Experience</h1>
                </div>
                <div className={styles.xpCardsContainer}>
                    <XPCard
                        title="Back-End Dev"
                        skills={["MySQL", "NodeJS", "Git", "Python", "Java", "C++", "C", "Assembly"]}
                    />
                    <XPCard
                        title="Front-End Dev"
                        skills={["HTML", "CSS", "Javascript", "React", "Vercel"]}
                    />
                </div>

            </div>
        </>
    );
}

export default XP;
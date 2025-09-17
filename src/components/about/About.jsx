import AchievementCard from "./AchievementCard";
import styles from "./About.module.css"
import aboutImg from "../../assets/aboutImg.webp"

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeader}>
                <p>Get to know more</p>
                <h1>About Me</h1>
            </div>
            <div className={styles.aboutCard}>
                <img src={aboutImg} />
                <div className={styles.cardContent}>
                    <AchievementCard />
                    <p className={styles.cardParagraph}>
                        I’m a Computer Science student at Mount Royal University
                        with a strong foundation in Python, Java, and JavaScript,
                        and hands-on experience using frameworks like React, Flask,
                        and Node.js. My academic journey includes hackathon wins,
                        peer tutoring, and real-world projects that blend technical
                        skill with user-centered design. I thrive in collaborative
                        environments, communicate clearly, and approach challenges
                        with curiosity and grit. I’m excited to grow as a developer
                        and contribute to impactful, well-crafted software.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default About
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
                        I am a Computer Science student at the University of Calgary with
                        a passion for developing innovative software solutions that solve
                        real-world problems. Proficient in Python, Java, and JavaScript,
                        I have hands-on experience with frameworks like React and Node.js,
                        as well as cloud platforms such as AWS. My academic journey is
                        complemented by a successful internship at a leading fintech startup,
                        where I contributed to building scalable web applications and
                        optimizing backend performance. I thrive in collaborative environments,
                        value clear communication, and approach challenges with a growth
                        mindset. Eager to launch my career as a software developer, I am
                        seeking opportunities where I can contribute to impactful projects and
                        continue expanding my technical expertise.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default About
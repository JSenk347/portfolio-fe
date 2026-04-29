import styles from "./XPCard.module.css";

const XPCard = (props) => {
    const skills = props.skills.map((skill, index) =>
        <div key={index} className={styles.skill}>
            <i className="fa-solid fa-square-check"></i>
            <span>{skill}</span>
        </div>
    );

    return (
        <>
            <div className={styles.xpCardContainer}>
                <h2>{props.title}</h2>
                <div className={styles.skillsContainer}>
                    {skills}
                </div>
            </div>
        </>
    );
}

export default XPCard
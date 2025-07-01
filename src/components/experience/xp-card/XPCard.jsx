import styles from "./XPCard.module.css";

const XPCard = (props) => {
    /* ".map(FOR EACH skill IN skills, DO <li key=..."*/
    /* index is the CURRENT INDEX of the loop from . 
    /* .map() SYNTAX: .map(currVal (req), index (opt), array (opt))*/
    const skills = props.skills.map((skills, index) => <li key={index}>{skills}</li>);

    return(
        <>
            <div className={styles.xpCardContainer}>
                <h2>{props.title}</h2>
                <div className={styles.skillsContainer}>
                    <ol>{skills}</ol>
                </div>
                
            </div>
        </>
    );
}

export default XPCard
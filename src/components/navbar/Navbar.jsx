import React, {useState, useEffect} from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    
    useEffect(() => {
        document.body.classList.add("menu-open") ? isOpen : document.body.classList.remove("menu-open");

        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId, e) => {
        //e.preventDefault();
        setIsOpen(false); // close menu for mobile device view

        const section = document.getElementById(sectionId);
        if (section) {
            // get nav height to offset scroll pos
            const nav = document.querySelector(`.${styles.navContainer}`); // returns first element that matches a CSS selector
            const navHeight = nav ? nav.offsetHeight: 0; // offsetHeight returns viewable height of an element, including all but margin

            const offsetTop = section.offsetTop - navHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={styles.navMetaContainer}>
            <div className={styles.navContainer}>
                <a href='#profile'>
                    <h1 className={styles.navText}> Jordan Senko </h1>
                </a>
                <div className={styles.navSections}>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#experience'>Experience</a>
                    <a href='#contact'>Contact</a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar
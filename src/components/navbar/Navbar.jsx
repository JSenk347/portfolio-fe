import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const menuRef = useRef(null);
    const iconRef = useRef(null);

    const toggleMenu = () => {
        // isOpen needed to stop scrolling when dropdown menu is open
        // menuRef and iconRef needed to add the open class to the associated elements (menuLinks and hamburgerIcon)
        const isOpen = menuRef.current.classList.toggle(styles.open);
        iconRef.current.classList.toggle(styles.open);

        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }

    return (
        <>
            <nav className={styles.desktopNav}>
                <div className={styles.navContainer}>
                    <a href='#profile'>
                        <h1 className={styles.dNavLogo}> Jordan Senko </h1>
                    </a>
                    <div className={styles.navSections}>
                        <a href='#about'>About</a>
                        <a href='#projects'>Projects</a>
                        <a href='#experience'>Experience</a>
                        <a href='#contact'>Contact</a>
                    </div>
                </div>
            </nav>
            <nav className={styles.hamburgerNav}>
                <a href='#profile'>
                    <h1 className={styles.hNavLogo}> Jordan Senko </h1>
                </a>
                <div className={styles.hamburgerMenu}>
                    <div className={styles.hamburgerIcon} onClick={toggleMenu} ref={iconRef}>
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className={styles.menuLinks} ref={menuRef}>
                        <li><a href='#about' onClick={toggleMenu}>About</a></li>
                        <li><a href='#projects' onClick={toggleMenu}>Projects</a></li>
                        <li><a href='#experience' onClick={toggleMenu}>Experience</a></li>
                        <li><a href='#contact' onClick={toggleMenu}>Contact</a></li>
                    </div>
                </div>
            </nav>
        </>


    );
}

export default Navbar
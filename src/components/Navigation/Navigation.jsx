import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>Company</div>

                <ul className={styles.menu}>
                    <li><NavLink to='/'>Dashboard</NavLink></li>
                    <li><NavLink to='/tasks'>Tasks</NavLink></li>
                    <li><NavLink to='/tags'>Tags</NavLink></li>
                    <li><NavLink to='/calendar'>Calendar</NavLink></li>

                    <p>Misc</p>
                    <li><Link to='/support'>Support</Link></li>
                    <li><Link to='/documentation'>Documentation</Link></li>
                </ul>
            </div>

            <div className={styles.header__bottom}>
                <NavLink to='setting'>Setting</NavLink>
            </div>
        </div>
    );
}

export { Navigation };

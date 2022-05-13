import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from "./Navigation.module.css";

const Navigation = () => {
    const isActive = ({ isActive }) => {
        return isActive ? styles.active : styles.inactive;
    };

    return (
        <div className={styles.container}>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <NavLink className={isActive} to='/'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to='/countries'>Countries</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to='/search'>Search</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export { Navigation };

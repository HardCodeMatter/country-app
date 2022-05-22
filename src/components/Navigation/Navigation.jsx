import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { ThemeContext } from '@context/ThemeProvider';

import styles from "./Navigation.module.css";

const Navigation = () => {
    const isActive = ({ isActive }) => {
        return isActive ? styles.active : styles.inactive;
    };

    const { theme } = useContext(ThemeContext);

    return (
        <div className={cn(styles.container, styles[`${theme}__container`])}>
            <nav>
                <ul className={cn(styles.menu, styles[`${theme}__menu`])}>
                    <li>
                        <NavLink className={isActive} to='/'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to='/countries'>Countries</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to='/search'>Search</NavLink>
                    </li>
                    <li>
                        <NavLink className={isActive} to='/setting'>Setting</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export { Navigation };

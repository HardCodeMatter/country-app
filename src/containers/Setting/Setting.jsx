import React, { useContext } from 'react';

import { ThemeContext } from '@context/ThemeProvider';

import styles from "./Setting.module.css";

const Setting = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <h2>Setting</h2>

            <button onClick={() => {
                toggleTheme();
                console.log(theme);
            }}>Toggle theme</button>
        </>
    );
}

export { Setting };

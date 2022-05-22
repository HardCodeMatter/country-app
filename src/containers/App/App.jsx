import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import cn from 'classnames';

import routesConfig from '@routes/routesConfig';

import { Navigation } from '@components/Navigation/Navigation';
import { ThemeContext } from '@context/ThemeProvider';

import styles from "./App.module.css";

const App = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={cn(styles.container, styles[`${theme}__container`])}>
            <nav>
                <Navigation />
            </nav>

            <div className={cn(styles.content, styles[`${theme}__content`])}>
                <Routes>
                    {routesConfig.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </div>
        </div>
    );
}

export { App };

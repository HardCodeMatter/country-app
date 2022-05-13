import React from 'react';
import { Routes, Route } from 'react-router-dom';

import routesConfig from '@routes/routesConfig';

import { Navigation } from '@components/Navigation/Navigation';

import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.container}>
            <nav>
                <Navigation />
            </nav>

            <div className={styles.content}>
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

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navigation } from '@components/Navigation/Navigation';
import { Dashboard } from '@containers/Dashboard/Dashboard';
import { Tasks } from '@containers/Tasks/Tasks';

import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.container}>
            <Navigation />

            <div className={styles.content}>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='tasks' element={<Tasks />} />
                </Routes>
            </div>
        </div>
    );
}

export { App };

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { ThemeContext } from '@context/ThemeProvider';

import styles from "./CountryCard.module.css";

const CountryCard = ({ countries }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <ul className={cn(styles.list__container, styles[`${theme}-list__container`])}>
            {countries.map(({ id, name, capital, media, population }) => (
                <li className={cn(styles[`${theme}-list__item`])} key={id}>
                    <Link to={`/countries/${id}`}>
                        <img className={styles.country__flag} src={media.flag} alt="" />
                        <div className={styles.country__content}>
                            <h2 className={styles.country__name}>{name}</h2>
                            <div className={styles.country__capital}>Capital: <span>{capital}</span></div>
                            <div className={styles.country__population}>Population: <span>{population}</span></div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export { CountryCard };

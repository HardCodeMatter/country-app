import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./SearchCard.module.css";

const SearchCard = ({ countries }) => {
    return (
        <>
            {countries.length
                ? (
                    <ul>
                        {countries.map(({ id, name, capital, media }) => (
                            <li key={id}>
                                <Link to={`/countries/${id}`}>
                                    <img src={media.flag} alt="" />
                                    <p>{name}</p>
                                    <p>{capital}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )
                : <h2>No results</h2>
            }
        </>
    );
}

export { SearchCard };

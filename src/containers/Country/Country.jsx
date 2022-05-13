import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getApiResource } from '@utils/network';
import { API_COUNTRIES } from '@constants/constants';

import styles from "./Country.module.css";

const Country = () => {
    const [countries, setCountries] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    const getResponse = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const countriesList = res.map(({ id, name, capital, media, population, abbreviation, currency, phone }) => {
                return { id, name, capital, media, population, abbreviation, currency, phone };
            });

            setCountries(countriesList);
        }
    };
    
    useEffect(() => {
        getResponse(API_COUNTRIES);
    }, []);

    return (
        <>
            <h2 className={styles.header}>Country
                <a className={styles.back} href="#" onClick={handleGoBack}>Go back</a>
            </h2>
            
            <div className={styles.container}>
                {countries && countries.filter(item => item.id == id).map(({ id, name, capital, media, population, abbreviation, currency, phone }) => (
                    <div className={styles.country} key={id}>
                        <img src={media.flag} alt="" />
                        <div className={styles.country__content}>
                            <h2 className={styles.country__name}>{name}</h2>
                            <ul>
                                <div className={styles.country__main}>
                                    <li className={styles.country__capital}><span>Capital: </span>{capital}</li>
                                    <li className={styles.country__population}><span>Population: </span>{population}</li>
                                </div>
                                <div className={styles.country__other}>
                                    <li className={styles.country__abbreviation}><span>Abbreviation: </span>{abbreviation}</li>
                                    <li className={styles.country__currency}><span>Currency: </span>{currency}</li>
                                    <li className={styles.country__phone}><span>Phone: </span>{phone}</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export { Country };

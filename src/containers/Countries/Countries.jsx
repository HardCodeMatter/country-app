import React, { useState, useEffect } from 'react';

import { CountryCard } from '@components/CountryCard/CountryCard';

import { API_COUNTRIES } from '@constants/constants';
import { getApiResource } from '@utils/network';

import styles from "./Countries.module.css";

const Countries = () => {
    const [countries, setCountries] = useState(null);

    const getResponse = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const countriesList = res.map(({ id, name, capital, media, population }) => {
                return { id, name, capital, media, population };
            });

            setCountries(countriesList);
        }
    };

    useEffect(() => {
        getResponse(API_COUNTRIES);
    }, []);

    return (
        <>
            <h2>Countries</h2>
            {countries && <CountryCard countries={countries} />}
        </>
    );
}

export { Countries };

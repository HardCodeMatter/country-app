import React, { useState, useEffect } from 'react';

import { getApiResource } from '@utils/network';
import { API_COUNTRIES } from '@constants/constants';

import { CountryCard } from '@components/CountryCard/CountryCard';

import styles from "./Search.module.css";

const Search = () => {
    const [countries, setCountries] = useState(null);
    const [countriesName, setCountriesName] = useState(null);

    const handleCountries = (e) => {
        e.preventDefault();
        setCountriesName(e.target.value);
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
            <h2>Search</h2>
            <input onChange={handleCountries} type="text" />
            {countries && <CountryCard countries={countries.filter(({ name }) => name.includes(countriesName)).map(item => item)} />}
        </>
    );
}

export { Search };

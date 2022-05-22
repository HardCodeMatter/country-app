import React, { useState, useEffect } from 'react';

import { getApiResource } from '@utils/network';
import { API_COUNTRIES } from '@constants/constants';

import { SearchCard } from '@components/SearchCard/SearchCard';

import styles from "./Search.module.css";

const Search = () => {
    const [countries, setCountries] = useState();
    const [searchValue, setSearchValue] = useState();

    const handleCountries = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    };

    const searchCountries = searchValue 
        ? countries.filter(({ name }) => name.includes(searchValue)) 
        : countries;

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
            {countries && <SearchCard countries={searchCountries} />}
        </>
    );
}

export { Search };

import React, { useState, useEffect } from 'react';

import { getApiResource } from '@utils/network';
import { API_COUNTRIES } from '@constants/constants';

import styles from "./Country.module.css";
import { useParams } from 'react-router-dom';

const Country = () => {
    const [countryName, setCountryName] = useState(null);
    const [countryId, setCountryId] = useState(null);
    const [countryFlag, setCountryFlag] = useState(null);
    const [countryInfo, setCountryInfo] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        async () => {
            const res = await getApiResource(API_COUNTRIES);

            if (res) {
                setCountryName(res.name);
                // setCountryId(res.id);
                setCountryInfo([
                    { title: 'Capital', data: res.capital },
                    { title: 'Population', data: res.population },
                    { title: 'Currency', data: res.currency },
                    { title: 'Abbreviation', data: res.abbreviation },
                ]);
            }
        };
    }, []);

    return (
        <>
            <h2>Country</h2>
            {id}

            {/* {countryInfo.map(({ id }) => (
                <p>{id === idPar}</p>
            ))} */}
            {/* <h3>{countryName}</h3> */}
            <ul>{countryInfo && countryInfo.map(({ title, data }) => (
                <li key={Math.random() * 10}>{title} : {data}</li>
            ))}</ul>
        </>
    );
}

export { Country };

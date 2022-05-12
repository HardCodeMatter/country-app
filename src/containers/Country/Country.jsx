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
            <h2>Country</h2>
            {id}
            <a href="#" onClick={handleGoBack}>Go back</a>
            <div>
                {countries && countries.filter(item => item.id == id).map(({ id, name, capital, media, population }) => (
                    <ul key={id}>
                        <li>{name}</li>
                        <li>{capital}</li>
                        <li>{population}</li>
                    </ul>
                ))}
            </div>
        </>
    );
}

export { Country };

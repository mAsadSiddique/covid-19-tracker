import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './countries.css';





export default function AllCountries() {

    const [globalData, setGlobalData] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const response = await fetch("https://covid19.mathdro.id/api/countries");
            const data = await response.json();
            const ModifiedData = {
                Country: data.countries.map((Country) => Country.name),
            }
            setGlobalData(ModifiedData.Country)
            console.log(ModifiedData.Country)
        }
        fetchData();
    }, [setGlobalData])


    return ( <
            FormControl className = { styles.formControl } >
            <
            NativeSelect >
            <
            option value = "Global" > Global < /option> {
                globalData.map((country, ind) => < option key = { ind }
                    value = { country } > { country } < /option>)} <
                    /NativeSelect> <
                    /FormControl>
                )
            }
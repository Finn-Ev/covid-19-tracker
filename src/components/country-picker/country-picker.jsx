import React, { useState, useEffect } from 'react';
import "./country-picker.scss"

import { NativeSelect, FormControl } from "@material-ui/core"
import { fetchCountries } from "../../api"

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()


    }, [setFetchedCountries])

    return (
        <FormControl className="form-control">
            <NativeSelect defaultValue="" onChange={(e) => { handleCountryChange(e.target.value) }}>
                <option value="">Global</option>
                {fetchedCountries.map((country, idx) => (
                    <option key={idx} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;
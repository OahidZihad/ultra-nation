import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height:'50px'}
    const countryStyle = {border: '1px solid tomato', margin: '10px', padding: '10px'}
    const btnStyle = {border: '1px solid tomato', borderRadius: '5px', backgroundColor: 'tomato', color: 'white', height: '30px', width: '120px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <img style={flagStyle} src={flag} alt=""/>
            <h4>Country Name: {name}</h4>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={() => handleAddCountry(props.country)} style={btnStyle}>Add Country</button>
        </div>
    );
};

export default Country;
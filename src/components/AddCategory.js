import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({seTcategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleSearch = (e) =>{
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //Para que no refresque la pagina
        if (inputValue){
            seTcategories(cat=>[inputValue,...cat])
        }
        setinputValue('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="Text"
            value={inputValue}
            placeholder='Escribe algo'
            onChange={handleSearch}/>
        </form>
    )
}

AddCategory.propTypes = {
    seTcategories: PropTypes.func.isRequired
}




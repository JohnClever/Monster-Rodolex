import React from 'react'
import './Searchbox.style.css'

const Searchbox = ({placeholder, handleChange}) => (
    (
        <input 
            className = "search"
            type="search" 
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
)

export default Searchbox
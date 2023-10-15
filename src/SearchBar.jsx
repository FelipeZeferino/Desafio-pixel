import React, {useState} from 'react'
import "./SearchBar.css"

function SearchBar({ input, onChange }) {
    return (
        <div className="input-wrapper">
        <input 
        placeholder='Entre com o ID'
        value={input}
        onChange={(e) => onChange(e.target.value)}></input>    
        </div>
    )
}
export default SearchBar;
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'
import React from 'react'

const Search = ({filter, setFilter}) => {
  return (
    <div className='wrapper__products-search-container'>
        <IconButton sx={{backgroundColor: "#f8f9fa", borderRadius:"3px"}}><SearchIcon /></IconButton>
        <input 
            placeholder='Haryt gözlemek' 
            type="search" 
            name="product-search" 
            id="product-search" 
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
        />
    </div>
  )
}

export default Search
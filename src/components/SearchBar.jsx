import React, { useState } from 'react'
import "./SearchBar.css"

function SearchBar({onSubmit}) {
  const [term,setTerm]=useState('')
  const handleClick=(event)=>{
    //  onSubmit('cars');
 
    event.preventDefault()
    onSubmit(term)
  }
  const handleChange=(event)=>{
setTerm(event.target.value)
  }
  return (
    <div className='search-bar'>
      {/* <h1>{term}</h1> */}
      <form onSubmit={handleClick}>
        <label>Enter Here</label>
      <input value={term} onChange={handleChange} type="text" />
      {/* <h5>{term.length<3 && "term must be more than 3 letter"}</h5> */}
      </form>
      
    
    </div>
  )
}

export default SearchBar
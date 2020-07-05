import React from 'react';

const Search = ({onSearch}) => (
    <div>
        <label htmlFor = "searchInput"> Search : </label>
      <input 
      id="searchInput" 
      type="text" 
      onChange = {onSearch}
      
      />
    </div>
)

export default Search;
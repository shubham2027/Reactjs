import React, { useState } from 'react'

const FilterList = () => {
        const [search, setSearch] = useState("");
  
      const items = ["apple", "banana", "orange", "mango"];
  
      const  filter = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));
      
    return (
      <>
        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
  
        <ul>
          {filter.map((item)=>(
               <li>{item}</li>
          ))}
        
        </ul>
      </>
    )
}

export default FilterList

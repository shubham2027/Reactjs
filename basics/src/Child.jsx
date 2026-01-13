import React, { useContext } from 'react'

const Child = () => {
    const name = useContext(NameContext);
  return (
    <div>
      
        <h2> Hello, I am {name} from Child Component </h2>
    </div>
  )
}

export default Child

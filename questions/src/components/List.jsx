import React from 'react'
import { useSearchParams } from 'react-router-dom'

const List = () => {
    const [params] = useSearchParams();
    const id = params.get('id');
    const name = params.get('name');
  return (
    <div>
      <h1 className='text-2xl m-2 p-2'>List Page</h1>
        <h2>ID: {id}</h2>
        <h2>Name: {name}</h2>

    </div>
  )
}

export default List;


import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
        <h1 className='heading-primary'>{ greeting }</h1>
    </div>
  )
}

export default ItemListContainer
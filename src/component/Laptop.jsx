import React from 'react'

const Laptop = ({brandName, price}) => {
  return (
    <div style={{backgroundColor:'gray', padding:'10px'}}>
      <h1 style={{backgroundColor:'red',height:'50px'}}>{brandName}</h1>
      <h1>{price}</h1>
    </div>
  )
}

export default Laptop

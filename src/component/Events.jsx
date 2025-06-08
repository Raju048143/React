import React from 'react'

const Events = () => {
    const handleClick = () =>{
        alert("You click the Button")
    }
  return (
    <div>
      <h1>We are learning Events</h1>
      <button onClick={handleClick}>Click this button</button>
    </div>
  )
}

export default Events

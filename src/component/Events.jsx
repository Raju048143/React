import React from 'react'

const Events = () => {
    const handleClick = () =>{
        alert("You click the Button")
    }
    const addition = (a) =>{
        alert(a + 10)
    }
  return (
    <div>
      <h1>We are learning Events</h1>
      <button onClick={handleClick}>Click this button</button>
      <button onClick={()=>addition(20)}>Button 2</button>
    </div>
  )
}

export default Events

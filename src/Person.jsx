import React from 'react'

const Person = () => {
    const name = 'Raju'
    const age = 23
    const person = {
        name : "Raju",
        age : 23,
        gamil: 'raju@gmail.com'
    }
  return (
    <div>
    {/* <h1>Hii</h1>
    <p>Hello {name}</p>
    <h1>{2 + 6}</h1> */}
    <h1>Name = {person.name}</h1>
    <h1>Age = {person.age}</h1>
 </div>
  )
}

export default Person

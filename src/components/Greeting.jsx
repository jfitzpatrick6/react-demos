import React from 'react'

function Greeting() {
    const name = "John"
    const date = new Date().toLocaleDateString()
    return (
    <div>
        <h1>Hello, {name}</h1>
        <p>{date}</p>
    </div>
  )
}

export default Greeting
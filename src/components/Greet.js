import React from 'react'
import './styles/Greet.css'

const Greet = (props) => {
  return (
    <div className="Greet">
      <h1>React. Welcome on board {props.email}! </h1>
    </div>
  )
}

export default Greet
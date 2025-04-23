import React from 'react'

const GreetingCondition = ({timeOfDay}) => {
  return timeOfDay === "Morning" ? <h3>Good Morning!</h3> : <h3>Good Afternoon</h3>
}

export default GreetingCondition
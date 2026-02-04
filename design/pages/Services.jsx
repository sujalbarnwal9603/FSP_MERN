import React, { useEffect, useState } from 'react'

function Services() {
  const [value, setValue] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Services Component will mount")
    return () => {
      console.log("Services Component will unmount")
    }
  }, [])

  useEffect(() => {
    if (count !== 0) {
      console.log(`Services Component Updated - count is now: ${count}`)
    }
  }, [count])

  const handleIncrement = () => {
    setValue(value + 1)
  }

  const handleDcrement = () => {
    setValue(value - 1)
  }

  console.log("value", value)

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDcrement}>Deccrement</button>
      <h2>{value}</h2>
      <hr />
      <h2>component life cycle</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  )
}

export default Services
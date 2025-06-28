import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Button = () => {
  const { count, setCount } = useContext(counterContext)
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>


  )
}

export default Button
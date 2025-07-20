import React from 'react'

const username = ({params}) => {
  return (
    <div className='text-white h-3'>
      {params.username}
    </div>
  )
}

export default username
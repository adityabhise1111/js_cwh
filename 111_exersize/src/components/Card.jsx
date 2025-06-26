import React from 'react'
import './Card.css'

const Card = (info) => {
  return (
    <div key={info.userId} className="card">
        <div className="id">{info.id}</div>
        <div className="title">{info.title}</div>
        <div className="body">{info.body}</div>
    </div>
  )
}

export default Card
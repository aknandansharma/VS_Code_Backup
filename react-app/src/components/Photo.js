import React from 'react'
import {useNavigate, Link} from 'react-router-dom'

const Photo = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 style={{color:"red"}}>404</h1>
      <h2>Page Not Found</h2>

      <button onClick={() => navigate(-1)} >
        Go Back
      </button>
    </div>
  )
}

export default Photo
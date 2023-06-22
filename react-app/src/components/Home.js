import React from 'react'
import About from './About'

const Home = (props) => {
  return (
    <div>
      <h1>this is Props data inside home {props.name}</h1>
      <About name={props.name} />
    </div>
  )
}

export default Home
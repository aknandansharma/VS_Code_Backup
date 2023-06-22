import React from 'react'
import Contact from './Contact'

const About = (props) => {
  return (
    <div>
      <h1>This is javascript about {props.name}.</h1>
      <Contact name={props.name} />
    </div>
  )
}

export default About
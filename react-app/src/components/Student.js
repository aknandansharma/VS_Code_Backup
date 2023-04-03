import React from 'react'
import Comp from './Comp'
import propTypes from "prop-types";

const Student = ({name, age}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <Comp name={name} />
    </div>
  )
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

Student.defaultProps = {
  name: "name",
  age: 0,
};

export default Student
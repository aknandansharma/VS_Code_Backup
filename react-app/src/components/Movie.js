import React from 'react'

const Movie = (props) => {
  return (
    <div className="movie">
      <img src={props.thumbnail} alt="mobile" />
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Movie
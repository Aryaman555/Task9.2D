import React from 'react';
import "../CSS/Card.css"

function Card(props) {
  return (
    <div className="column">
      <img src={props.avatar} alt="Staff" width={200} height={200} />
      <h3>{props.name}</h3>
      <p>{props.position}</p>
      <div className="Rating">
        {props.rating}
        <div className="author">{props.author}</div>
      </div>
    </div>
  );
}

export default Card;
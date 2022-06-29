import React from 'react';
import {Link} from 'react-router-dom';

function BeerCard({title, beerId, image_url, description, tagline, onChildClick}) {
  
// This lets you send a click event to the parent for that to fire a function
const sendtoparent = e => {
  e.preventDefault();
  if (onChildClick) onChildClick();
}

  return (
      <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p className="tagline">{tagline}</p>
          <img src={image_url} alt={title} />
          <Link to={`/beer/${beerId}`}><h3>DRINK ME &gt;&gt;</h3></Link>
          <button onClick={sendtoparent}>test parent click</button>
      </div>
  )
}

export default BeerCard;
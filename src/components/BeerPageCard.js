import React from 'react';

function BeerPageCard({title, beerId, image_url, description, tagline}) {
  return (
      <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p class="tagline">{tagline}</p>
          <img src={image_url} alt={title} />
      </div>
  )
}

export default BeerPageCard;
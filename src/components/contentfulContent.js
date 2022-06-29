import React from 'react';

function ContentfulContent({title, paragraph}) {
  return (
      <div>
          <h1>{title}</h1>
          <p>{paragraph}</p>
      </div>
  )
}

export default ContentfulContent;
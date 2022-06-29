import React, { Component, useEffect, useState } from 'react';
import * as contentful from 'contentful';
import ContentfulContent from './contentfulContent';

export default function Contact() {

  const [contentfulData, setContentfulData] = useState([]);

  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  })
  

  const fetchPosts = () => client.getEntries()
  const setPosts = response => {
    setContentfulData(response.items)
  }

  useEffect(() => {
    fetchPosts().then(setPosts);
    // console.log('datLoaded');
  }, []);
  
  return (
    <div>
      <h2>Second content type here</h2>
      {
       contentfulData
       .filter((content) => content.sys.contentType.sys.id === "secondContentType")
       .map((content, index) => 
       <ContentfulContent key={index} title={content.fields.tileTwo} paragraph={content.fields['paragraphTwo']['content'][0]['content'][0]['value']} />
       )
      }
      <h2>First content type here. dat a bit different as only 1 output instead of multiple</h2>
      {
        contentfulData
        .filter((content) => content.sys.contentType.sys.id === "section")
        .map((content, index) =>
        <ContentfulContent key={index} title={content.fields.title} paragraph={content.fields.paragraph} />
        )
      }
    </div>
  )

};
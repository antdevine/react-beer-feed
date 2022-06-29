import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerPageCard from './BeerPageCard';

export default function BeerPage(beerId) {
  const [beers, setBeers] = useState([]);

  const dataLoad = () => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => {
        const beers = res.data;
        setBeers(beers);
      })
  }

  useEffect(() => {
    dataLoad();
    console.log('datLoaded');
  }, []);

    return (
      <>
        {beers.filter(element => element.id === Number(beerId.match.params.beerId)).map(
          beer =>
          <BeerPageCard 
            beerId={beer.id}
            key={beer.id}
            title={beer.name}
            image_url={beer.image_url}
            description={beer.description}
            tagline={beer.tagline}
          />
        )}
      </>
    );
};
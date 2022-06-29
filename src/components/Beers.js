import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';

export default function Beers() {
  const [beers, setBeers] = useState([]);
  const [nameSort, setNameSort] = useState('Ascending');
  const [allBeers, setAllBeers] = useState([]);
  const [searched, setSearched] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [noResults, setNoResults] = useState(false);

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

   const sortedArray = () => {
    let sortedData = beers;
    if(nameSort === "Ascending") {
        sortedData = sortedData.sort((a,b) => {
            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            
            return 0;
        })
        setNameSort('Descending');
    } else {
        sortedData.reverse();
        setNameSort('Ascending');
    }
  
    setBeers(sortedData);
  }

  const searchBeers = (e) => {
    e.preventDefault();

    const searchValue = document.getElementById("searchInput").value;
    setAllBeers(beers);
    console.log('searchValue', searchValue);
    let searchBeers = beers;
    
    if (searchValue != '' && searchValue) {
          searchBeers = searchBeers.filter((item) => {
            return item.name
              .toUpperCase()
              .includes(searchValue.toUpperCase())
          })
        }
      setBeers(searchBeers);
      setSearched(true);
    }

    const clearSearch = (e) => {
      e.preventDefault();
      setBeers(allBeers);
      setSearched(false);
    }

    const alcholPercentFilter = (e) => {
      // Need to add all of the beers be added to the ALLBEERS array so that when we change the radio can clear the item on filtered to be the original amount.
      setAllBeers(beers);
      let filteredBeers = beers;
      var radioChoice = e.target.value;
       filteredBeers = filteredBeers.filter((item) => {
          return (item.abv <= radioChoice);
        })
        
        if (filteredBeers.length >= 1) {
          setFiltered(true);
          setBeers(filteredBeers);
          setNoResults(false);
        } else {
          console.log('not enough items to filter');
          setNoResults(true);
        }
        
    }

    const resetFilters = () => {
      setBeers(allBeers);
      setFiltered(false);
      setSearched(false);
    }

    const beerLinkClick = () => {
      console.log('click me');
    }


  
  return (
    <div>

    <button onClick={sortedArray}>
      Sort name by {nameSort}
    </button>

    
    
      <input
        type="text"
        className="input"
        id="searchInput"
        placeholder="Search for something..."
      />
      <button className="button is-info" onClick={searchBeers}>
        Search beers
      </button>

      {searched === true ? (
        <button onClick={clearSearch}>Clear search</button>
      ) : (
        <p>Try searching...</p>
      )}


      <h3>Alchol Percentage</h3>
      <input type="radio" id="alcholpercent1" name="alcholpercent" value="3.5" onChange={alcholPercentFilter} />
      <label for="alcholpercent">3.5%</label><br />
      <input type="radio" id="alcholpercent2" name="alcholpercent" value="4.5" onChange={alcholPercentFilter} />
      <label for="alcholpercent">4.5%</label><br />
      <input type="radio" id="alcholpercent3" name="alcholpercent" value="5.5" onChange={alcholPercentFilter} />
      <label for="alcholpercent">5.5%</label><br />

      {noResults === true ? (
        <p>There is nothing for this percentage...</p>
      ) : (<p></p>)}

      {filtered === true ? (
        <button onClick={resetFilters}>Reset filters</button>
      ) : (
        <p>Try filters...</p>
      )}
      

      <ul>
      {
        beers
          .map(beer =>
                <BeerCard 
                beerId={beer.id}
                key={beer.id}
                title={beer.name}
                image_url={beer.image_url}
                description={beer.description}
                tagline={beer.tagline}
                onChildClick={beerLinkClick}
                />
          )
      }
    </ul>

    </div>
    
  );
};
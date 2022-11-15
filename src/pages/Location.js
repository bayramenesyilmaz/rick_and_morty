import React, { useEffect, useState } from 'react';
import EpisodesCharacterCard from '../components/CharacterCard/EpisodesCharacterCard';
import axios from 'axios';

function Location() {

  const [locationCount, setLocationCount] = useState(1);
  const [location, setLocation] = useState();

  let total = [...Array(126).keys()];

  useEffect(() => {
    async function getlocation() {
      const locationData = await axios.get(`https://rickandmortyapi.com/api/location/${locationCount}`);
      const data = await locationData.data;

      setLocation(data);
    }
    getlocation();
  }, [locationCount]);


  return (
    <div className='container'>
      <h1 className="container-title">Locations Characters</h1>

      <div className="container-info">

        <article className='filterbox'>

          <select className='episode-select' onChange={(e) => setLocationCount(e.target.value)}>
            <option >Locations...</option>
            {
              total.map(locationkey => {
                return <option key={locationkey + 1} value={locationkey + 1}>Location - {locationkey + 1}</option>
              })

            }

          </select>

          {
            location && <div className='episode-info'>
              <h1 className='episode-info-title'>{location.name}</h1>
              <p className='episode-info-date'>{location.type}</p>
              <p className='episode-info-episode'>{location.dimension}</p>
              <p className='episode-info-characters'>{location.residents.length} Cahracters </p>
            </div>
          }

        </article>

        <article className='main'>

          <div className='characters-list'>

            {
              location && location.residents.length > 0 ? location.residents.map((characterURL, i) => {
                return <EpisodesCharacterCard key={i} characterURL={characterURL} />
              })
                :
                <div className='not-found'>Not Found Character</div>
            }

          </div>

        </article>

      </div>

    </div>
  )
}

export default Location
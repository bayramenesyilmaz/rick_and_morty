import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EpisodesCharacterCard from '../components/CharacterCard/EpisodesCharacterCard';
import EpisondeInfo from '../components/CharacterCard/EpisondeInfo';

function Episodes() {

  const [episodeCount, setEpisodeCount] = useState(1);
  const [episode, setEpisode] = useState();

  let total = [...Array(51).keys()];

  useEffect(() => {
    async function getEpisode() {
      const rmData = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeCount}`);
      const data = await rmData.data;

      setEpisode(data);
    }
    getEpisode();
  }, [episodeCount]);


  return (
    <div className='container'>

      <h1 className="container-title">Episodes Characters</h1>

      <div className="container-info">

        <article className='filterbox'>

          <select className='episode-select' onChange={(e) => setEpisodeCount(e.target.value)}>
            <option >Episodes...</option>
            {
              total.map(episodekey => {
                return <option key={episodekey + 1} value={episodekey + 1}>Episode {episodekey + 1}</option>
              })

            }

          </select>

          {
            episode && <EpisondeInfo episode={episode} />
          }

        </article>

        <article className='main'>

          <div className='characters-list'>


            {
              episode && episode.characters.map((characterURL, i) => {
                return <EpisodesCharacterCard key={i} characterURL={characterURL} />
              })
            }

          </div>
        </article>
      </div>

    </div>
  )
}

export default Episodes
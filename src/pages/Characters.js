import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';
import axios from 'axios';

import Filter from '../components/Filter/Filter'
import CharacterCard from '../components/CharacterCard/CharacterCard';

function Characters() {

  const [characters, setCharacters] = useState();

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(42);

  const [notFound, setNotFound] = useState(false);


  useEffect(() => {
    async function getData() {
      try {

        const rmData = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${status}&species=${species}&gender=${gender}`);
        const data = await rmData.data;

        setTotalPages(data.info.pages);
        setCharacters(data.results);
        setNotFound(false);

      } catch (error) {

        setNotFound(true);

      }
    }

    getData();
  }, [currentPage, status, species, gender]);

  const filteredCharacters = !search ? characters : characters.filter(character => {
    if (character.name.toLowerCase().includes(search.toLowerCase())) {
      return character
    }
  })



  return (
    <div className='container'>

      <h1 className="container-title">Characters</h1>

      <input
        className='searchbar'
        type="text"
        placeholder='Search characters...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="container-info">

        <article className='filterbox'>
          <Filter setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} setCurrentPage={setCurrentPage} />
        </article>

        <article className='main'>

          {

            !notFound &&
            <Pagination
              {...bootstrap5PaginationPreset}
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />

          }

          <div className='characters-list'>

            {
              !notFound ?
                characters && filteredCharacters.map(character => {

                  return <Link className='router-link' key={character.id} to={`/detail/${character.id}`}> <CharacterCard character={character} /> </Link>

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

export default Characters
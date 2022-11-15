import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CharacterDetails() {

    let status = "";

    const { id } = useParams();

    const [character, setCharacter] = useState();

    useEffect(() => {
        async function getData() {
            const chData = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await chData.data;

            setCharacter(data);
        }
        getData();
    }, [id]);

    if (character) {

        if (character.status === "Alive") {
            status = "ch-status-alive";
        } else if (character.status === "Dead") {
            status = "ch-status-dead";
        } else if (character.status === "unknown") {
            status = "ch-status-unknown";
        }
    }


    return (

        character && <div className={`detail-container ${status} `}>

            <div className='detail-card'>
                <div className="detail-image">
                    <img
                        src={character.image}
                        alt="character"
                    />
                </div>

                <div className="detail-info">

                    <div className="ch-title">
                        <span className="ch-name">{character.name}</span>
                        <span className={`ch-status ${status ? status : ""}`}>{character.status}</span>
                    </div>

                    <div>

                        <p className="location-title">Origin :</p>
                        <p className="location">{character.origin.name}</p>

                        <p className="location-title">Last location :</p>
                        <p className="location">{character.location.name}</p>

                        <p className="location-title">Species :</p>
                        <p className="location">{character.species}</p>

                        <p className="location-title">Gender :</p>
                        <p className="location">{character.gender}</p>

                        <p className="location-title">Episodes Count :</p>
                        <p className="location">{character.episode.length}</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default CharacterDetails
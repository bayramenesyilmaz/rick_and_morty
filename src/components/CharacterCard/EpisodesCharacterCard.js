import "./styles.css";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function EpisodesCharacterCard({ characterURL }) {

    let status = "";

    const [character, setCharacter] = useState();

    useEffect(() => {
        async function getData() {
            const chData = await axios.get(characterURL);
            const data = await chData.data;

            setCharacter(data);
        }
        getData();
    }, [characterURL]);

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

        character && <Link className="router-link" to={`/detail/${character.id}`}>

            <div className='character-card'>
                <div className="ch-image">
                    <img
                        src={character.image}
                        alt="character"
                    />
                </div>

                <div className="ch-info">
                    <div className="ch-title">
                        <span className="ch-name">{character.name}</span>
                        <span className={`ch-status ${status ? status : ""}`}>{character.status}</span>
                    </div>
                    <p className="location-title">Last location :</p>
                    <p className="location">{character.location.name}</p>
                </div>

            </div>

        </Link>
    )
}

export default EpisodesCharacterCard
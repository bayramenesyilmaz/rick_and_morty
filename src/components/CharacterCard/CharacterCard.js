import "./styles.css";

function CharacterCard({ character }) {

    let status = "";

    if (character.status === "Alive") {
        status = "ch-status-alive";
    } else if (character.status === "Dead") {
        status = "ch-status-dead";
    } else if (character.status === "unknown") {
        status = "ch-status-unknown";
    }


    return (

        character && <div className='character-card'>
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
    )
}

export default CharacterCard
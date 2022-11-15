function EpisondeInfo({ episode }) {

    return (
        <div className='episode-info'>
            <h1 className='episode-info-title'>{episode.name}</h1>
            <p className='episode-info-date'>{episode.air_date}</p>
            <p className='episode-info-episode'>{episode.episode}</p>
            <p className='episode-info-characters'>{episode.characters.length} Cahracters </p>
        </div>
    )
}

export default EpisondeInfo
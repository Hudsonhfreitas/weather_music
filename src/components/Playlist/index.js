import { useContext } from "react"
import { GlobalContext } from "../../context/Global"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Playlist() {
    const { playlist, genre, data, city } = useContext(GlobalContext)

    function handleLocal() {
        const localList =  localStorage.getItem('playlists')

        let savedPlaylists = JSON.parse(localList) || [];
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
        let newPlaylist = {
            date: date+' '+time,
            temperature: Math.round(data.main.temp),
            city: city,
            genre: genre,
            playlist: playlist.tracks.data
        }

        savedPlaylists.push(newPlaylist)
        localStorage.setItem('playlists', JSON.stringify(savedPlaylists))
        alert('Playlist salva com sucesso!')
    }    
    
    return (
        <div className="playlist">
            {genre === 'Rock' ? <p>Aqui vai uma playlist de <strong>{genre}</strong> para você curtir o clima!</p> : <p>Aqui vai uma playlist <strong>{genre}</strong> para você curtir o clima!</p>}
            { playlist &&
                <>
                <div className="save">
                    <button onClick={handleLocal}>Salvar essa playlist</button>
                </div>
                <ul className="list">
                    {playlist.tracks.data.map( item => (
                        <li key={item.id}>
                            <div className="item">
                                <div className="cover">
                                    <img src={item.album.cover}></img>
                                </div>
                                <div className="info">
                                    <h4>{item.title}</h4>
                                    <p>{item.artist.name}</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>                        
                        </li>
                    ))}
                </ul>
                </>
            }
        </div>
    )
}
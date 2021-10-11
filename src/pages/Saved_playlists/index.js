import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'; 

export default function SavedPlaylists() {
    
    const [localPlaylists, setLocalPlaylists] = useState([]);
 
    useEffect(() => {
        const local = localStorage.getItem('playlists')
        setLocalPlaylists(() => JSON.parse(local) || [])
    }, []);

    function handleDelete(date) {
        let newPlaylist = localPlaylists.filter( item => item.date != date);
        setLocalPlaylists(newPlaylist);
        localStorage.setItem('playlists',JSON.stringify(newPlaylist));
        console.log('ola')
    }

    function handleExpand(e) {       
       const listItem = e.target.parentElement.parentElement
       listItem.classList.toggle('active')
    }
    
    return (
        <div className="savedPlaylists">
            <div className="container">
                <h1>Playlists salvas</h1>
                 {localPlaylists.length === 0 && <span>Você não possui nenhuma playlist salva :(</span>}
                 <ul className="playlists">
                    {localPlaylists && localPlaylists.map(item => (
                        <li className="playlist-item">
                            <div className="title">
                                <button onClick={handleExpand} id="expand"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                                <p>{item.date} {item.city} {item.temperature + '°C'} {item.genre}</p>
                                <button id="delete" onClick={() => handleDelete(item.date)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                            </div>
                            <ul>
                                {item && item.playlist.map(track => (
                                    <li>{track.title} - {track.artist.name}</li>
                                ))}
                            </ul>
                        </li>
                    ))}  
                 </ul> 
            </div>
            
        </div>
    )
}


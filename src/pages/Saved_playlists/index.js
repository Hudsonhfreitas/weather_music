import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'; 
import { toast, ToastContainer } from 'react-toastify';

export default function SavedPlaylists() {
    
    const [localPlaylists, setLocalPlaylists] = useState([]);
 
    useEffect(() => {
        const local = localStorage.getItem('playlists')
        setLocalPlaylists(() => JSON.parse(local) || [])
    }, []);

    function handleDelete(id) {
        let newPlaylist = localPlaylists.filter( item => item.id !== id);
        setLocalPlaylists(newPlaylist);
        localStorage.setItem('playlists',JSON.stringify(newPlaylist));
        toast.error('Excluído com sucesso!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    function handleExpand(e) {       
       const listItem = e.target.parentElement.parentElement
       listItem.classList.toggle('active')
    }
    
    return (
        <div className="savedPlaylists">
            <div className="container">
                <ToastContainer theme="colored" className="toast"/>
                <h1>Playlists salvas</h1>
                 {localPlaylists.length === 0 && <span>Você não possui nenhuma playlist salva :(</span>}
                 <ul className="playlists">
                    {localPlaylists && localPlaylists.map(item => (
                        <li key={item.id} className="playlist-item">
                            <div className="title">
                                <button onClick={handleExpand} id="expand"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                                <p>{item.date}</p>
                                <button id="delete" onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                            </div>
                            <ul className="list">
                                <div className="info">
                                    <p><strong>Cidade: </strong>{item.city}</p>
                                    <p><strong>Temperatura: </strong>{item.temperature + '°C'}</p>
                                    <p><strong>Gênero: </strong>{item.genre}</p>
                                </div>
                                {item && item.playlist.map(track => (
                                    <li>{track.title} - {track.subtitle}</li>
                                ))}
                            </ul>
                        </li>
                    ))}  
                 </ul> 
            </div>
            
        </div>
    )
}


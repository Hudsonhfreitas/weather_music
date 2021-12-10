import { useContext } from "react"
import { GlobalContext } from "../../context/Global"
import Playlist_Item from "../Playlist_Item";

export default function Playlist() {
    const { playlist, genre, data, city } = useContext(GlobalContext)

    function handleLocal() {
        const localList =  localStorage.getItem('playlists')

        let savedPlaylists = JSON.parse(localList) || [];
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(playlist)
        
        let newPlaylist = {
            date: date+' '+time,
            temperature: Math.round(data.main.temp),
            city: city,
            genre: genre,
            playlist: playlist
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
                    <ul className="list">
                        {playlist.map( item => (
                           <Playlist_Item item={item}/>
                        ))}
                    </ul>
                    <div className="save">
                        <button onClick={handleLocal}>Salvar essa playlist</button>
                    </div>
                </>
            }
        </div>
    )
}
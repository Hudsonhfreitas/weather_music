import { useContext } from "react"
import { GlobalContext } from "../../context/Global"
import PlaylistItem from "../Playlist_Item";
import { v4 as uuid_v4 } from "uuid";

import { toast, ToastContainer } from "react-toastify";

export default function Playlist() {
    const { playlist, genre, data, city } = useContext(GlobalContext)
  
    function handleLocal() {
        const localList =  localStorage.getItem('playlists')

        let savedPlaylists = JSON.parse(localList) || [];
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
        let newPlaylist = {
            id: uuid_v4(),
            date: date+' '+time,
            temperature: Math.round(data.main.temp),
            city: city,
            genre: genre,
            playlist: playlist
        }

        savedPlaylists.push(newPlaylist)
        localStorage.setItem('playlists', JSON.stringify(savedPlaylists))
        toast.success("Playlist Salva com sucesso!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
    }    
    
    return (
        <div className="playlist">
            <ToastContainer theme="colored" className="toast"/>
            {genre === 'Rock' ? <p>Aqui vai uma playlist de <strong>{genre}</strong> para você curtir o clima!</p> : <p>Aqui vai uma playlist <strong>{genre}</strong> para você curtir o clima!</p>}
            { playlist &&
                <>
                    <ul className="list">
                        {playlist.map( item => (
                           <PlaylistItem key={item.id} item={item}/>
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
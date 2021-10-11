import { useContext, useEffect, useRef} from 'react';
import {getCityData, getPlaylist} from '../../services/api.js';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/Global.js';
import CityInfo from '../../components/CityInfo';
import Playlist from '../../components/Playlist';

export default function Home() {
    const {data, setData, playlist, city, setCity, setPlaylist, setGenre} = useContext(GlobalContext)
    const inputCity = useRef();

    useEffect(async () => {
        if(data) {
            let temp = data.main.temp
            let playlist = ''

            if (temp > 32) {
                playlist = 1728093421
                setGenre('Rock')
            } 
            else if ((temp < 32) && (temp > 24)){
                playlist = 1310668095
                setGenre('Pop')
            }
            else if((temp < 24) && (temp > 16)) {
                playlist  = 6090626284
                setGenre('Classica')
            }
            else if (temp < 16) {
                playlist = 7399204504
                setGenre('Lofi')
            }

            setPlaylist('')
            const resp = await getPlaylist(playlist)
            setPlaylist(resp)
        }

    }, [data])

    const handleAdd = ({target}) => {
        setCity(target.value);
    }

    const handleData = async () => {
        if(city) {
            const response = await getCityData(city)
            setData(response);
            inputCity.current.focus();
        }
    }

    return (
        <div className="main">
            <div className="container">
                <h1>Bem-vindo ao Weather Music</h1>
                <div className="search">
                    <input
                        ref={inputCity} 
                        type="text" 
                        value={city} 
                        onChange={handleAdd}
                        onKeyPress={(e) => {
                            if(e.charCode === 13) {
                                handleData()
                            }
                        }}
                        placeholder="Informe a cidade...">
                    </input>
                    <button onClick={handleData}><i className="fas fa-search"></i></button>
                </div>
                <Link to="/saved_playlists" className="savedPlaylists">Suas playlists</Link>
                {data && 
                    <CityInfo></CityInfo>
                }
                {playlist &&
                    <Playlist></Playlist> 
                }
            </div>
        </div>
    )
}
import { useContext, useEffect, useRef} from 'react';
import {getCityData, getPlaylist} from '../../services/api.js';
import { GlobalContext } from '../../context/Global.js';
import CityInfo from '../../components/CityInfo';
import Playlist from '../../components/Playlist';
import search from '../../assets/icon-search.svg';
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
    const {data, setData, playlist, city, setCity, setPlaylist, setGenre} = useContext(GlobalContext)
    const inputCity = useRef();

    useEffect(async () => {
        if(data && data !== 'error') {
            let temp = data.main.temp
            let current_genre = ''
                if (temp > 32)
                    current_genre = 'ROCK';
                else if((temp < 32) && (temp > 24))
                    current_genre = 'POP'
                else if ((temp < 24) && (temp > 16))
                    current_genre = 'SOUL_RNB';
                else if (temp < 16)
                    current_genre = 'ALTERNATIVE';
            
            setGenre(current_genre)
            const resp = await getPlaylist(current_genre)
            setPlaylist(resp)
        }

    }, [data])


    const handleAdd = ({target}) => {
        setCity(target.value);
    }

    const handleData = async () => {
        setPlaylist(null)
        if(city && city !== 'error') {
            const response = await getCityData(city)
            setData(response);
            inputCity.current.focus();
        }
    }

    return (
        <div className="main">
            <div className="container">
                <div className="search">
                    <input
                        ref={inputCity} 
                        type="text" 
                        value={city} 
                        onChange={handleAdd}
                        onKeyPress={(e) => {
                            if(e.key === 'Enter') {
                                handleData()
                            }
                        }}
                        placeholder="Informe a cidade...">
                    </input>
                    <button onClick={handleData}><img src={search}></img></button>
                </div>
                <div className='content'>
                    {data && data !== 'error' &&
                        <CityInfo />
                    }
                    {data === 'error' &&
                        <h1>Não encontramos essa cidade!</h1>}
                    {playlist &&
                        <Playlist></Playlist> 
                    }
                </div>
            </div>
        </div>
    )
}
import { useContext } from "react"
import { GlobalContext } from "../../context/Global"

export default function CityInfo() {
    const {data} = useContext(GlobalContext);
    
    return (
        <>
        {data !== 'error' &&
            <div className="weather">
                <div className="temperature">
                    <h2>{Math.round(data.main.temp)} °C</h2>
                    <img src={` http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="Weather icon" />
                </div>
                <p>{`${data.name} - ${data.sys.country}`}</p>
                <span>{data.weather[0].description}</span>
            </div>
       }
    </>
    )
}


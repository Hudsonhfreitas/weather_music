import { useContext } from "react"
import { GlobalContext } from "../../context/Global"

export default function CityInfo() {
    const {data} = useContext(GlobalContext);
    
    return (
        <div className="weather">
            <p>{data.name}</p>
            <h2>{Math.round(data.main.temp)} °C</h2>
        </div>
    )
}


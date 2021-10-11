import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const [city, setCity] = useState('');
    const [data, setData] = useState();
    const [playlist, setPlaylist] = useState();
    const [genre, setGenre] = useState()

    return (
        <GlobalContext.Provider value={{city, setCity, data, setData, playlist, setPlaylist, genre, setGenre}}>
            { children }
        </GlobalContext.Provider>
    )
}
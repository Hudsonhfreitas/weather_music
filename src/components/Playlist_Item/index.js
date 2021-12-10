import React from 'react'

export default function Playlist_Item({item}) {
    return (
    <li className='playlist_item' key={item.id}>
        <div className="item">
            <div className="cover">
                <img src={item.images.coverart}></img>
            </div>
            <div className="info">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
                <audio controls="controls">
                    <source src={item.hub.actions[1].uri} type="audio/mp3" />
                </audio>
            </div>
        </div>                      
    </li>
    )
}

import React from 'react'
import './style.css'

export const Card = ({ url, name, id, type }) => {

    return (
        <div id='card-div'>
            <div>

                <img src={url} alt={`pic of ${name}`} />
            </div>
            <h5><span>#{id}-</span>{name}</h5>
            <small>{type}</small>
        </div>
    )
}

import React from 'react'
import './style.css'


export const Card = ({ url, name, id }) => {


    return (
        <div>

            <img src={url} alt={`pic of ${name}`} />

            <h5><span>#{id}-</span>{name}</h5>




        </div>
    )
}

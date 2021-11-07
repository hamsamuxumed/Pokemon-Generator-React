import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card } from '../../components'
import './style.css'

export const GenPokemon = () => {

    const [loading, setLoading] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
    const [fetchPokemon, setFetchPokemon] = useState([]);



    const fetching = async () => {
        try {
            const { data } = await axios.get(loading)
            setLoading(data.next)

            const getPokemon = (results) => {
                results.forEach(async (pokemon) => {
                    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    setFetchPokemon(prevState => [...prevState, data])
                })
            }
            getPokemon(data.results)

        } catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        fetching()
        return setFetchPokemon([])

    }, [])



    console.log(fetchPokemon)

    return (
        <div id='main-div'>

            {fetchPokemon.map((p, i) => (<Card
                key={i}
                name={p.name}
                url={p.sprites.other.dream_world.front_default}
                id={i + 1}
                type={p.types[0].type.name}
            />))}

            <button onClick={() => { fetching() }}>Generate</button>
        </div>
    )
}



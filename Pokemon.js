import React, { useEffect, useState } from 'react'
import './pokemon.css'

const PokemonTest =  () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = async () => {
        const response = await fetch ('https://pokeapi.co/api/v2/pokemon/')
        const parseResponse = await response.json()
        console.log(parseResponse, 'parseResponse');

        setPokemons(parseResponse)
    } 

    return (
        <div className='container'>
            {pokemons.results?.map((pokemon) => {
                return (
                    <div className='pokemon_container'>
                        <div className='pokemon_card'>
                            <div>
                                <img src={pokemon?.url}/>
                            </div>

                            <div>
                                {pokemon.name}
                            </div>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    ) 
}

export default PokemonTest
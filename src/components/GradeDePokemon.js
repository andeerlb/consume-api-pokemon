import axios from "axios";
import { useEffect, useState } from "react";
import api from "../ApiPokemon";
import Pokemon from "./Pokemon";

export default function GradeDePokemon() {
    const [pokemons, setPokemons] = useState([]);
    const apiUrl = api();

    useEffect(() => {
      getPokemonsFromApi();
    }, [])

    const getPokemonsFromApi = () => {
      axios.get(apiUrl+"/pokemon")
      .then(request => {
        const { data } = request;
        setPokemons(data.results);
      })
    }

    return (
      <>
        {
            pokemons.length === 0 ? "lista de pokemons vazia" : pokemons.map(pokemon => {
              return <Pokemon pokemon={pokemon}/>
            })
          }
      </>
    )
}
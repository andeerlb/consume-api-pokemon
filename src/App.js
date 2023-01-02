import axios, {isCancel, AxiosError} from 'axios';
import './App.css';
import api from './ApiPokemon';
import { useEffect, useState } from 'react';

function Abilitie({ pokemon }) {
  const [abilities, setAbilities] = useState([]);

  const getPokemonInformationsFromApi = (urlApi) => {
    axios.get(urlApi)
      .then(request => {
        setAbilities(request.data.abilities);
      })
      .catch(function(error){
        console.error("deu erro: ",   error);
      })
      .finally(function(){
        console.warn("finally informações do pokemon: "+pokemon.name);
      })
  }

  useEffect(() => {
    getPokemonInformationsFromApi(pokemon.url);
  }, []);

  return (
    <>
      {
        abilities.length === 0 ? <div>Pokemon sem habilitades</div> 
      : 
      abilities.map(abilitie => <div className="abilitieContainer">{abilitie.ability.name}</div>)
    }
    </>
  )
}

function Pokemon({ pokemon }) {


  return (
    <div className="container_pokemon">
      {pokemon.name}
      <Abilitie pokemon={pokemon}/>
    </div>
  )
}

function App() {
  const apiUrl = api();
  const [pokemons, setPokemons] = useState([]);

  const getPokemonsFromApi = () => {
    axios.get(apiUrl+"/pokemon")
    .then(request => {
      const { data } = request;
      setPokemons(data.results);
    })
    .catch(function(error){
      console.error("deu erro: ",   error);
    })
    .finally(function(){
      console.warn("finally lista de pokemons");
    })
  }

  useEffect(() => {
    getPokemonsFromApi();
  }, [])

  return (
    <div className="App">
      {
        pokemons.length === 0 ? "lista de pokemons vazia" : pokemons.map(pokemon => {
          return <Pokemon pokemon={pokemon}/>
        })
      }
    </div>
  );
}

export default App;

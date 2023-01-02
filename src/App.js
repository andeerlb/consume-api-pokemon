import axios, {isCancel, AxiosError} from 'axios';
import './App.css';
import api from './ApiPokemon';
import { useEffect, useState } from 'react';

function Photo ({ photoUrl }) {
  return (
    <div className='photoContainer'>
      <img src={photoUrl} />
    </div>
  )
}
function Abilitie({ pokemon }) {
  const [abilities, setAbilities] = useState([]);
  const [photo, setPhoto] = useState(null);

  const getPokemonInformationsFromApi = (urlApi) => {
    axios.get(urlApi)
      .then(request => {
        setAbilities(request.data.abilities);
        setPhoto(request.data.sprites.other.home.front_default ? request.data.sprites.other.home.front_default : request.data.sprites.back_default);
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
      <Photo photoUrl={photo} />
      {
        abilities.length === 0 ? <div>Pokemon sem habilitades</div> 
      : 
      abilities.map(abilitie => {
        return <>
          <div className="abilitieContainer">Habilidade: {abilitie.ability.name}</div>
        </>
      })
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

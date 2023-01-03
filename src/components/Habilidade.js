import axios from "axios";
import { useEffect, useState } from "react";
import Photo from "./Photo";

export default function Habilidade({ pokemon }) {
    const [abilities, setAbilities] = useState([]);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        getPokemonInformationsFromApi(pokemon.url);
    }, []);
  
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
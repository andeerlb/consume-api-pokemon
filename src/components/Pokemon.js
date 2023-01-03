import { useEffect, useState } from "react";
import axios from "axios";
import Habilidade from "./Habilidade";
import Foto from "./Photo";

export default function Pokemon({ pokemon }) {
    const [detalhes, atualizarDetalhes] = useState(null);
    const [foto, atualizarFoto] = useState(null);

    useEffect(() => {
        pegarDetalhesPokemonDaApi(pokemon.url);
    }, []);

    const pegarDetalhesPokemonDaApi = (urlApi) => {
        axios.get(urlApi)
        .then(request => {
            atualizarDetalhes(request.data);
            atualizarFoto(request.data.sprites.other.home.front_default ? request.data.sprites.other.home.front_default : request.data.sprites.back_default);
            console.log('detalhes, ', request.data);
        })
    }

    return (
      <div className="container_pokemon">
        <Foto urlDaFoto={foto} alt={pokemon.name}/>
        {pokemon.name}
        <Habilidade habilidade={detalhes?.abilities}/>
      </div>
    )
  }
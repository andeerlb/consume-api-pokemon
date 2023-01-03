import Habilidade from "./Habilidade";

export default function Pokemon({ pokemon }) {
    return (
      <div className="container_pokemon">
        {pokemon.name}
        <Habilidade pokemon={pokemon}/>
      </div>
    )
  }
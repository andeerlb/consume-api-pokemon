import { useState } from "react";

export default function Habilidade({ habilidades = [] }) {
  
    return (
      <>
        {
          habilidades.length === 0 ? <div>Pokemon sem habilitades</div> 
        : habilidades.map(habilidade => {
          return <>
            <div className="abilitieContainer">Habilidade: {habilidade.name}</div>
          </>
        })
      }
      </>
    )
  }
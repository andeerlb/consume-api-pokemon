import { useState } from "react"

export default function Foto ({ urlDaFoto, alt }) {
  return (
    <div className='photoContainer'>
      <img src={urlDaFoto} alt={alt}/>
    </div>
  )
}
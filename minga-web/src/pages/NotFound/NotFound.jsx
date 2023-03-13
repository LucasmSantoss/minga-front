import React from 'react'
<<<<<<< HEAD
import "./notFound.css"

export default function NotFound() {
  return (
    <div>
        <h1>La pagina que intenta buscar no se encuentra</h1>
    </div>
  )
}
=======
import { Link as Anchor,useParams } from 'react-router-dom'
import './notFound.css'

export default function NotFound() {
    const { numerodinamico } = useParams()
    console.log(numerodinamico)
    return (
        <div className='not-main'>
            <h3>PAGINA NO ENCONTRADA!</h3>
            <Anchor to='/home'>REGISTRO CATEGORIA</Anchor>
        </div>
    )
}
>>>>>>> 84316ea3a8cf5058dbf6a3a6777d3e29b71287fa

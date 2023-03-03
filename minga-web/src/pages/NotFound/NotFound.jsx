import React from 'react'
import { Link as Anchor,useParams } from 'react-router-dom'
import './notFound.css'

export default function NotFound() {
    const { numerodinamico } = useParams()
    console.log(numerodinamico)
    return (
        <div className='not-main'>
            <h3>PAGINA NO ENCONTRADA!</h3>
            <Anchor to='/nueva-categoria'>REGISTRO CATEGORIA</Anchor>
        </div>
    )
}
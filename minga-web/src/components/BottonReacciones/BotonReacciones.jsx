import React from 'react'
import Like from '../../images/icon3.png'
import Dislike from '../../images/icon4.png'
import Love from '../../images/icon.png'
import Amazed from '../../images/icon2.png'
import './botonReacciones.css'
export default function BotonReacciones() {
    return (
        <>
            <div className="contenedor-reactions" >
                <div className="cont-button-reactions">
                    <div className="button-reaction">
                        <img src={Like} alt="like" />
                        <img src={Dislike} alt="dislike" />
                        <img src={Love} alt="love" />
                        <img src={Amazed} alt="amazed" />
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import './authormain.css'
import Image from "../Image/Image";

function AuthorMain() {
    return (
        <div className='main-author'>

            <div className='author-header'>
                <Image src="./imgs/killua.png" />
                <div className='author-info'>
                    <h2>Lucas Ezequiel Silva</h2>
                    <p>Caseros, Buenos Aires</p>
                    <p>16/02/2000</p>
                </div>
                <Image src="./imgs/editicon.png" />
            </div>
            <div className='author-description'>
                <p>
                    Programming student fanatic of minga, aquarium, I believe in God and he is Argentine...
                </p>
            </div>
            <div className='switch'>

            </div>
            <div className='images-container'>
                <div>
                    <Image src="./imgs/komi.png" />
                    <p>Komi san Cant Communicate</p>
                </div>
                <div>
                    <Image src="./imgs/boruto.png" />
                    <p>Boruto</p>
                </div>
                <div>
                    <Image src="./imgs/eva.png" />
                    <p>Evangelion</p>
                </div>
                <div>
                    <Image src="./imgs/kaguya.png" />
                    <p>Kaguya-sama: Love is war</p>
                </div>
            </div>

        </div>
    )
}
export default AuthorMain

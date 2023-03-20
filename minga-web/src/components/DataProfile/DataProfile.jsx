import React from 'react'
import './dataprofile.css'
import location from '../../images/location-marker.png'
import cake from '../../images/cake.png'
import imgprofile from '../../images/Rectangle10.png'


export default function DataProfile() {
    return (

        <div className='profile'>
            <img id="profile-img" src={imgprofile} alt="profile" />
            <h2>Lucas Exequiel Silva</h2>
            <div className="data-author">
                <p >
                    <img id="icon1" src={location} alt="location" />
                    Caseros, Buenos Aires
                </p>
                <p >
                    <img id="icon1" src={cake} alt="date" />
                    16/02/2000
                </p>
            </div>
        </div>
    )
}

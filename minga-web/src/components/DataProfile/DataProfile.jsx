import React from 'react'
import './dataprofile.css'


export default function DataProfile() {
    return (

        <div className='profile'>
            <img id="profile-img" src="./default-profile.png" alt="profile" />
            <h2>Lucas Exequiel Silva</h2>
            <div className="data-author">
                <p >
                    <img id="icon1" src="../../images/location-marker.png" alt="location" />
                    ballester, bs as
                </p>
                <p >
                    <img id="icon1" src="../../images/cake.png" alt="date" />
                    12/03/25
                </p>
            </div>
        </div>
    )
}

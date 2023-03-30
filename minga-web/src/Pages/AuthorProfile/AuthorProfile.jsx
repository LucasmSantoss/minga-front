import React from 'react'
import './authorprofile.css'
import FormProfile from '../../components/FormProfile/FormProfile'
import DataProfile from '../../components/DataProfile/DataProfile'

export default function AuthorProfile() {
    return (
        <>
            <div className='contenedor'>
                <div id='profile-Background'>
                    <h1>Profile</h1>
                </div>
                <div className='sectionProfile'>
                    <FormProfile />
                    <DataProfile/>
                </div>
            </div>
        </>
    )
}
import React from 'react'
import { useSelector } from 'react-redux'
import './dataprofile.css'
import location from '../../images/location-marker.png'
import date from '../../images/cake.png'


export default function Profile() {
    let author = useSelector(store => store?.author.author)
    console.log(author)

    const authorDate = author?.date?.split('T')[0]

    return (

        <div className='profile'>
           <img id="profile-img" src={author?.photo} alt="profile" />
            <div className="data-author">
                <p className="name">{author?.name} {author?.last_name}</p>
                <p ><img id="icon1" src={location} alt="location" />{author?.city} ,{author?.country}</p>
                <p ><img id="icon1" src={date} />{authorDate}</p>
              
            </div>
        </div>
    )
}

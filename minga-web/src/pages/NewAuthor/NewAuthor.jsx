import React from 'react'
import './newauthor.css'
import AuthorForm from '../../components/AuthorForm/AuthorForm'

export default function NewAuthor() {
    return (
        <div className="newauthor-page">
            <div className='author-h1'>
                <h1>
                    New Author
                </h1>
            </div>
            <AuthorForm />

        </div>
    )
}

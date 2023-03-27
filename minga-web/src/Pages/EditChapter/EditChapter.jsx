import React from 'react'
import "./EditChapter.css"
import EditChapterForm from '../../components/EditChapterForm/EditChapterForm'
import Chapter from '../../components/Chapter/Chapter'


export default function EditChapter() {
  return (
    <div className='editChapterPage'>
       <EditChapterForm/>
       <Chapter/>
    </div>
  )
}

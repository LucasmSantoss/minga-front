import React from 'react'
import NewChapter from '../../components/NewChapter/NewChapter.jsx'
import "./chapterForm.css"
export default function ChapterForm() {
  return (
    <div className='divchapter'>
      <div className='divh2'>
        <h2 className='h2chapter'>New Chapter</h2>
      </div>
      <NewChapter/>
    
    </div>
  )
}

import React from 'react'
import "./newchapter.css"

export default function NewChapter() {
  return (
    <div id='ContainCharter'>
     
            <form className='form-chapter'>
                
                <input type="text" name='title' id='title' placeholder='Insert title' />        
                <input type="number" name='order' id='order' placeholder='Insert order'/>
                <input type="url" name='pages' id='pages' placeholder='Insert pages' />
                <input type="url" name='image' id='image' placeholder='Insert image' />
              <div>
                 <button className='submitbtn'>Send</button>
              </div>
            </form>
        
    </div>
  )
}

import React from 'react'
import './imgLogoForm.css'

export default function Image({className,src}) {
  return (
    <img id='logoForm' className={className} src={src}/>
  )
}
